import { DurableObject } from "cloudflare:workers";
import type { SasReport } from "./types";

function buildSearchText(report: SasReport): string {
	const topFixes = report.topFixes.map((fix) => `${fix.title} ${fix.description}`).join(" ");
	const insights = report.sectionInsights
		.map((insight) => `${insight.section} ${insight.whatIsWrong} ${insight.whatToDo}`)
		.join(" ");

	return [
		report.url,
		report.timestamp,
		report.clientFacingSummary,
		topFixes,
		insights,
	].join(" ").toLowerCase();
}

export class SasStore extends DurableObject<Env> {
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);

		ctx.blockConcurrencyWhile(async () => {
			ctx.storage.sql.exec(`
				CREATE TABLE IF NOT EXISTS reports (
					id TEXT PRIMARY KEY,
					url TEXT NOT NULL,
					timestamp TEXT NOT NULL,
					search_text TEXT NOT NULL,
					payload TEXT NOT NULL
				)
			`);

			ctx.storage.sql.exec(`
				CREATE TABLE IF NOT EXISTS access_tokens (
					token TEXT PRIMARY KEY,
					expires_at INTEGER NOT NULL
				)
			`);
		});
	}

	private pruneExpiredTokens() {
		this.ctx.storage.sql.exec(
			"DELETE FROM access_tokens WHERE expires_at <= ?",
			Date.now()
		);
	}

	async issueAccessToken() {
		this.pruneExpiredTokens();
		const token = crypto.randomUUID();
		const expiresAt = Date.now() + 1000 * 60 * 60 * 8;

		this.ctx.storage.sql.exec(
			"INSERT INTO access_tokens (token, expires_at) VALUES (?, ?)",
			token,
			expiresAt
		);

		return {
			token,
			expiresAt,
		};
	}

	async verifyAccessToken(token: string) {
		this.pruneExpiredTokens();

		const row = this.ctx.storage.sql
			.exec<{ token: string }>(
				"SELECT token FROM access_tokens WHERE token = ? LIMIT 1",
				token
			)
			.one();

		return Boolean(row?.token);
	}

	async saveReport(report: SasReport) {
		const payload = JSON.stringify(report);
		const searchText = buildSearchText(report);

		this.ctx.storage.sql.exec(
			`INSERT OR REPLACE INTO reports (id, url, timestamp, search_text, payload)
			 VALUES (?, ?, ?, ?, ?)`,
			report.id,
			report.url,
			report.timestamp,
			searchText,
			payload
		);

		return report;
	}

	async getReport(id: string) {
		const row = this.ctx.storage.sql
			.exec<{ payload: string }>(
				"SELECT payload FROM reports WHERE id = ? LIMIT 1",
				id
			)
			.one();

		if (!row?.payload) {
			return null;
		}

		return JSON.parse(row.payload) as SasReport;
	}

	async listReports(search = "") {
		const query = search.trim().toLowerCase();
		const rows = query
			? this.ctx.storage.sql.exec<{ payload: string }>(
				"SELECT payload FROM reports WHERE search_text LIKE ? ORDER BY timestamp DESC",
				`%${query}%`
			)
			: this.ctx.storage.sql.exec<{ payload: string }>(
				"SELECT payload FROM reports ORDER BY timestamp DESC"
			);

		return rows.toArray().map((row) => JSON.parse(row.payload) as SasReport);
	}
}

export class SasStoreCurrent extends SasStore {}