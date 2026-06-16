import { z } from "zod";
import type { AppContext } from "../types";
import { analyzeWebsite } from "../sas/analysis";
import { SasReportSchema, type SasReport } from "../sas/types";

const AccessRequestSchema = z.object({
	token: z.string().min(1),
});

const AnalyzeRequestSchema = z.object({
	url: z.string().url(),
});

function getSasStore(env: Env) {
	return env.SAS_STORE.getByName("sas-primary");
}

function getAllowedOrigins(env: Env): string[] {
	const sources = [env.SAS_ALLOWED_ORIGINS, env.ALLOWED_ORIGINS]
		.filter(Boolean)
		.flatMap((value) => (value || "").split(","))
		.map((value) => value.trim())
		.filter(Boolean);

	return Array.from(new Set(sources));
}

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
	if (!origin) {
		return {};
	}

	if (!getAllowedOrigins(env).includes(origin)) {
		return {};
	}

	return {
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Max-Age": "86400",
		Vary: "Origin",
	};
}

function getCorsHeaderRecord(c: AppContext): Record<string, string> {
	const origin = c.req.header("Origin") || null;
	return corsHeaders(origin, c.env);
}

async function verifyAccess(c: AppContext) {
	const authorization = c.req.header("Authorization") || "";
	const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";

	if (!token) {
		return null;
	}

	const store = getSasStore(c.env);
	const allowed = await store.verifyAccessToken(token);
	return allowed ? token : null;
}

function createReportId() {
	return new Date().toISOString().replace(/[.:]/g, "-");
}

export async function sasOptions(c: AppContext) {
	return new Response(null, { status: 204, headers: getCorsHeaderRecord(c) });
}

export async function sasAccessStatus(c: AppContext) {
	const allowed = Boolean(await verifyAccess(c));
	const siteKey = c.env.TURNSTILE_SITE_PUBLIC_KEY || c.env.TURNSTILE_SITE_KEY || "";
	return c.json({ allowed, siteKey }, 200, getCorsHeaderRecord(c));
}

export async function sasAccessVerify(c: AppContext) {
	if (!c.env.TURNSTILE_SECRET_KEY) {
		return c.json({ error: "TURNSTILE_SECRET_KEY is not configured." }, 500, getCorsHeaderRecord(c));
	}

	let parsed: z.infer<typeof AccessRequestSchema>;
	try {
		parsed = AccessRequestSchema.parse(await c.req.json());
	} catch {
		return c.json({ error: "Turnstile token is required." }, 400, getCorsHeaderRecord(c));
	}

	const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			secret: c.env.TURNSTILE_SECRET_KEY,
			response: parsed.token,
		}),
	});

	const verifyPayload = await verifyResponse.json<any>();

	if (!verifyPayload?.success) {
		return c.json({ error: "Turnstile validation failed." }, 403, getCorsHeaderRecord(c));
	}

	const store = getSasStore(c.env);
	const session = await store.issueAccessToken();

	return c.json({ success: true, accessToken: session.token, expiresAt: session.expiresAt }, 200, getCorsHeaderRecord(c));
}

export async function sasAnalyze(c: AppContext) {
	if (!(await verifyAccess(c))) {
		return c.json({ error: "Access denied. Complete Turnstile verification first." }, 403, getCorsHeaderRecord(c));
	}

	let parsed: z.infer<typeof AnalyzeRequestSchema>;
	try {
		parsed = AnalyzeRequestSchema.parse(await c.req.json());
	} catch {
		return c.json({ error: "Provide a valid absolute URL." }, 400, getCorsHeaderRecord(c));
	}

	const analysis = await analyzeWebsite(parsed.url, c.env);
	const report: SasReport = {
		id: createReportId(),
		url: parsed.url,
		timestamp: new Date().toISOString(),
		...analysis,
	};

	return c.json({ report }, 200, getCorsHeaderRecord(c));
}

export async function sasReportsList(c: AppContext) {
	if (!(await verifyAccess(c))) {
		return c.json({ error: "Access denied. Complete Turnstile verification first." }, 403, getCorsHeaderRecord(c));
	}

	const search = c.req.query("search") || "";
	const store = getSasStore(c.env);
	const reports = await store.listReports(search);
	return c.json({ reports }, 200, getCorsHeaderRecord(c));
}

export async function sasReportGet(c: AppContext) {
	if (!(await verifyAccess(c))) {
		return c.json({ error: "Access denied. Complete Turnstile verification first." }, 403, getCorsHeaderRecord(c));
	}

	const id = c.req.param("id");
	const store = getSasStore(c.env);
	const report = await store.getReport(id);

	if (!report) {
		return c.json({ error: "Report not found." }, 404, getCorsHeaderRecord(c));
	}

	return c.json({ report }, 200, getCorsHeaderRecord(c));
}

export async function sasReportSave(c: AppContext) {
	if (!(await verifyAccess(c))) {
		return c.json({ error: "Access denied. Complete Turnstile verification first." }, 403, getCorsHeaderRecord(c));
	}

	let parsed: SasReport;
	try {
		parsed = SasReportSchema.parse(await c.req.json());
	} catch {
		return c.json({ error: "A complete report payload is required." }, 400, getCorsHeaderRecord(c));
	}

	const store = getSasStore(c.env);
	const report = await store.saveReport(parsed);
	return c.json({ report }, 200, getCorsHeaderRecord(c));
}