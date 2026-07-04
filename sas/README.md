# Alpha Zone Labs Site Analysis System

The Site Analysis System is a full-stack website auditing application built for Alpha Zone Labs. It provides a Turnstile-gated intake flow, OpenAI-backed analysis, persistent report storage, and a dashboard for browsing historical reports.

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
- `OPENAI_API_KEY`: Required for live LLM analysis.
- `TURNSTILE_SECRET_KEY`: Server-side Cloudflare Turnstile secret.
- `TURNSTILE_SITE_KEY`: Public Turnstile site key returned by the backend.
- `VITE_TURNSTILE_SITE_KEY`: Optional frontend build-time fallback. You can set it to the same value as `TURNSTILE_SITE_KEY`.

If `OPENAI_API_KEY` is missing or the OpenAI request fails, the app returns an analysis error instead of generating a fallback report. This prevents placeholder analysis from being mistaken for ChatGPT-backed analysis.

## Development

```bash
npm install
npm run dev
```

This starts Vite on `http://localhost:5173` and Express on `http://localhost:8787`. The Vite dev server proxies `/api/*` requests to Express.

## Production

```bash
npm run build
npm start
```

The Express server serves `dist/` in production and exposes the API from the same host.

## Deployment note

Deploy the Site Analysis System under `sas.alphazonelabs.com` or another Alpha Zone Labs subdomain.
