# SAS - Site Analysis System

SAS is a full-stack website auditing application built on top of this workspace's existing visual system. It provides a Turnstile-gated intake flow, OpenAI-backed analysis, persistent report storage, and a dashboard for browsing historical reports.

## What it includes

- React + Vite frontend with routes for `/`, `/analyze`, `/reports`, and `/reports/:id`
- Express backend with protected API routes:
  - `POST /api/access/verify`
  - `GET /api/access/status`
  - `POST /api/analyze`
  - `GET /api/reports`
  - `GET /api/reports/:id`
  - `POST /api/reports`
- Persistent JSON report storage in `data/reports`
- Cloudflare Turnstile gate before the application can be used
- OpenAI integration with a structured JSON output contract
- Production serving of the built frontend from the Express server

## Environment variables

Copy `.env.example` to `.env` and set the following values:

- `PORT`: Express server port. Defaults to `8787`.
- `OPENAI_API_KEY`: Used for live LLM analysis.
- `TURNSTILE_SECRET_KEY`: Server-side Cloudflare Turnstile secret.
- `TURNSTILE_SITE_KEY`: Public Turnstile site key returned by the backend.
- `VITE_TURNSTILE_SITE_KEY`: Optional frontend build-time fallback. You can set it to the same value as `TURNSTILE_SITE_KEY`.

If `OPENAI_API_KEY` is missing, SAS falls back to a deterministic on-server analysis generated from the fetched site content so the UI still works during setup.

## Development

Install dependencies:

```bash
npm install
```

Run the full stack in development:

```bash
npm run dev
```

This starts:

- Vite on `http://localhost:5173`
- Express on `http://localhost:8787`

The Vite dev server proxies `/api/*` requests to Express.

## Production

Build the frontend bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The Express server serves `dist/` in production and exposes the API from the same host.

## Report storage

Saved reports are written to:

```text
data/reports/{id}.json
```

Each saved report contains:

```json
{
  "id": "2026-06-15T12-00-00-000Z",
  "url": "https://example.com/",
  "timestamp": "2026-06-15T12:00:00.000Z",
  "overallScore": 78,
  "categories": {
    "conversion": { "score": 80, "summary": "..." },
    "traffic_seo": { "score": 75, "summary": "..." },
    "ux_ui": { "score": 79, "summary": "..." },
    "brand_consistency": { "score": 78, "summary": "..." }
  },
  "topFixes": [],
  "sectionInsights": [],
  "clientFacingSummary": "...",
  "aiScaffoldPrompt": "...",
  "consultantScript": "..."
}
```

## Turnstile setup

1. Create a Turnstile widget for `localhost` and `sas.hldesignedit.com`.
2. Add the site key to `TURNSTILE_SITE_KEY` and optionally `VITE_TURNSTILE_SITE_KEY`.
3. Add the secret key to `TURNSTILE_SECRET_KEY`.
4. Start the app and complete the challenge on `/`.

The backend verifies Turnstile server-side and sets an HTTP-only access cookie before protected routes can be used.

## OpenAI analysis behavior

The backend utility at `backend/llm/analyzeWebsite.js`:

1. Fetches the target URL HTML
2. Extracts readable headings and text
3. Sends a structured prompt to OpenAI
4. Returns JSON matching the required analysis contract

If the OpenAI request fails, the utility returns a fallback structured report instead of breaking the workflow.

## Deployment note

This repository originally contained only a static Vite site plus a `CNAME` pointing to `www.hldesignedit.com`. There was no existing server-capable deployment configuration in the workspace to reuse for an Express backend.

Because of that, the codebase is now prepared for any Node-capable deployment target that can:

- run `npm install`
- run `npm run build`
- run `npm start`
- provide the required environment variables
- map the custom domain `sas.hldesignedit.com`

If you want this deployed on Cloudflare infrastructure specifically, the current Express requirement means the existing static-only setup will need a separate server-capable target or a follow-up adaptation to Workers.

## Validation completed

The scaffold was validated with:

```bash
npm install
npm run build
node --check backend/server.js
node --check backend/llm/analyzeWebsite.js
```