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

function createFallbackAnalysis(url: string, snapshot: string): SasAnalysis {
	const excerpt = snapshot.slice(0, 700);

	return {
		overallScore: 62,
		categories: {
			conversion: { score: 60, summary: "Calls to action and proof need to be clearer and easier to act on." },
			traffic_seo: { score: 64, summary: "The site has useful content but needs stronger search structure and intent clarity." },
			ux_ui: { score: 63, summary: "The page likely communicates value, but hierarchy and scanning flow can improve." },
			brand_consistency: { score: 61, summary: "Brand presentation needs tighter consistency across the site." },
		},
		topFixes: [
			{ title: "Strengthen above-the-fold messaging", impact: "high", description: "Make the offer, CTA, and proof visible immediately in the first viewport." },
			{ title: "Clarify the site path", impact: "medium", description: "Reduce cognitive load by tightening navigation and grouping content around decisions." },
			{ title: "Standardize trust cues", impact: "medium", description: "Use testimonials, proof points, and support messaging more consistently." },
		],
		sectionInsights: [
			{
				section: "Homepage hero",
				whatIsWrong: "The opening section may not connect the offer to a clear next step fast enough.",
				whyItMatters: "Visitors decide quickly whether the site is relevant and trustworthy.",
				whatToDo: "Lead with one clear offer, one direct CTA, and one proof-driven support statement.",
			},
			{
				section: "Service positioning",
				whatIsWrong: "Offer descriptions may be capability-heavy instead of outcome-focused.",
				whyItMatters: "Prospects respond faster when they understand benefits and business results.",
				whatToDo: "Rewrite key sections around buyer outcomes, trust signals, and the next action.",
			},
		],
		clientFacingSummary: `SAS could not reach the OpenAI service, so this report uses direct content extraction from ${url}. The site has a usable foundation, but it would benefit from a clearer conversion path, stronger information hierarchy, and tighter brand consistency.`,
		aiScaffoldPrompt: `Rebuild ${url} as a modern, responsive business website with an admin backend for editing content, services, testimonials, and SEO settings. Use this extracted context as source material:\n\n${excerpt}\n\nPrioritize stronger CTAs, clearer hierarchy, better SEO structure, and more consistent branding across all sections.`,
		consultantScript: "Here is the short version I would tell the client: the site has a solid base, but it is not converting as efficiently as it should. The biggest opportunities are clarifying the main offer, tightening the page structure, and making the brand feel more consistent from top to bottom. Once those are fixed, the site should communicate value faster and support better lead generation.",
	};
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

	if (!env.OPENAI_API_KEY) {
		console.warn("SAS OpenAI analysis skipped because OPENAI_API_KEY is missing.", { url });
		return createFallbackAnalysis(url, snapshot);
	}

	try {
		const response = await fetch("https://api.openai.com/v1/responses", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${env.OPENAI_API_KEY}`,
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
			const failureText = (await response.text()).slice(0, 500);
			throw new Error(`OpenAI request failed: ${response.status} ${failureText}`.trim());
		}

		const payload = await response.json<any>();
		const outputText = extractOutputText(payload);

		if (!outputText) {
			throw new Error("OpenAI response did not include output text.");
		}

		return SasAnalysisSchema.parse(JSON.parse(outputText));
	} catch (error) {
		console.error("SAS OpenAI analysis failed; using fallback analysis.", {
			url,
			error: error instanceof Error ? error.message : String(error),
		});
		return createFallbackAnalysis(url, snapshot);
	}
}