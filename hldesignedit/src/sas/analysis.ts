import { SasAnalysisSchema, type SasAnalysis } from "./types";

const ANALYSIS_JSON_SCHEMA = {
	type: "object",
	additionalProperties: false,
	required: [
		"overallScore",
		"categories",
		"topFixes",
		"sectionInsights",
		"clientFacingSummary",
		"aiScaffoldPrompt",
		"consultantScript",
	],
	properties: {
		overallScore: { type: "number" },
		categories: {
			type: "object",
			additionalProperties: false,
			required: ["conversion", "traffic_seo", "ux_ui", "brand_consistency"],
			properties: {
				conversion: { type: "object", required: ["score", "summary"], properties: { score: { type: "number" }, summary: { type: "string" } }, additionalProperties: false },
				traffic_seo: { type: "object", required: ["score", "summary"], properties: { score: { type: "number" }, summary: { type: "string" } }, additionalProperties: false },
				ux_ui: { type: "object", required: ["score", "summary"], properties: { score: { type: "number" }, summary: { type: "string" } }, additionalProperties: false },
				brand_consistency: { type: "object", required: ["score", "summary"], properties: { score: { type: "number" }, summary: { type: "string" } }, additionalProperties: false },
			},
		},
		topFixes: {
			type: "array",
			items: {
				type: "object",
				additionalProperties: false,
				required: ["title", "impact", "description"],
				properties: {
					title: { type: "string" },
					impact: { type: "string", enum: ["high", "medium", "low"] },
					description: { type: "string" },
				},
			},
		},
		sectionInsights: {
			type: "array",
			items: {
				type: "object",
				additionalProperties: false,
				required: ["section", "whatIsWrong", "whyItMatters", "whatToDo"],
				properties: {
					section: { type: "string" },
					whatIsWrong: { type: "string" },
					whyItMatters: { type: "string" },
					whatToDo: { type: "string" },
				},
			},
		},
		clientFacingSummary: { type: "string" },
		aiScaffoldPrompt: { type: "string" },
		consultantScript: { type: "string" },
	},
};

function stripHtml(html: string): string {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<style[\s\S]*?<\/style>/gi, " ")
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
		.replace(/<svg[\s\S]*?<\/svg>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/gi, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function extractTitle(html: string): string {
	const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
	return match?.[1]?.replace(/\s+/g, " ").trim() || "Untitled page";
}

function extractHeadings(html: string): string[] {
	const matches = html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi);
	return Array.from(matches)
		.map((match) => stripHtml(match[1] || ""))
		.filter(Boolean)
		.slice(0, 24);
}

async function fetchWebsiteSnapshot(url: string): Promise<string> {
	const response = await fetch(url, {
		headers: {
			"User-Agent": "SAS-Site-Analysis-System/1.0 (+https://sas.hldesignedit.com)",
		},
	});

	if (!response.ok) {
		throw new Error(`Unable to fetch target URL: ${response.status}`);
	}

	const html = await response.text();
	const title = extractTitle(html);
	const headings = extractHeadings(html);
	const readableText = stripHtml(html).slice(0, 10000);

	return [`Title: ${title}`, `Headings:\n${headings.join("\n")}`, `Readable text:\n${readableText}`].join("\n\n");
}

function buildPrompt(url: string, snapshot: string) {
	return [
		"You are auditing a business website for conversion performance, traffic/SEO, UX/UI, and brand consistency.",
		"Return only valid JSON matching the requested schema.",
		"The clientFacingSummary must be plain-language and client-safe.",
		"The aiScaffoldPrompt must instruct another AI to rebuild the site with all fixes and include an admin backend for content management.",
		"The consultantScript must sound natural spoken aloud.",
		`Target URL: ${url}`,
		"Website snapshot:",
		snapshot,
	].join("\n\n");
}

function extractOutputText(payload: any): string | null {
	if (typeof payload?.output_text === "string" && payload.output_text.trim()) {
		return payload.output_text;
	}

	const chunks = Array.isArray(payload?.output)
		? payload.output.flatMap((entry: any) => Array.isArray(entry?.content) ? entry.content : [])
		: [];

	const joined = chunks
		.map((content: any) => content?.text)
		.filter((text: unknown) => typeof text === "string")
		.join("\n")
		.trim();

	return joined || null;
}

export async function analyzeWebsite(url: string, env: Env): Promise<SasAnalysis> {
	const snapshot = await fetchWebsiteSnapshot(url);
	const apiKey = env.OPENAI_API_KEY?.trim();

	if (!apiKey) {
		throw new Error("OPENAI_API_KEY is not configured for the SAS Worker environment.");
	}

	const response = await fetch("https://api.openai.com/v1/responses", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: "gpt-5.1-mini",
			input: [
				{
					role: "system",
					content: [{ type: "input_text", text: "Analyze the provided website content and return only JSON matching the requested schema." }],
				},
				{
					role: "user",
					content: [{ type: "input_text", text: buildPrompt(url, snapshot) }],
				},
			],
			text: {
				format: {
					type: "json_schema",
					name: "site_analysis_report",
					schema: ANALYSIS_JSON_SCHEMA,
					strict: true,
				},
			},
		}),
	});

	if (!response.ok) {
		const message = await response.text().catch(() => "");
		throw new Error(`OpenAI request failed: ${response.status}${message ? ` ${message}` : ""}`);
	}

	const payload = await response.json<any>();
	const outputText = extractOutputText(payload);

	if (!outputText) {
		throw new Error("OpenAI response did not include output text.");
	}

	let parsedJson: unknown;
	try {
		parsedJson = JSON.parse(outputText);
	} catch {
		throw new Error("OpenAI response was not valid JSON.");
	}

	const parsed = SasAnalysisSchema.safeParse(parsedJson);
	if (!parsed.success) {
		throw new Error(`OpenAI response did not match the SAS analysis schema: ${parsed.error.message}`);
	}

	return parsed.data;
}
