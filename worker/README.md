# Alpha Zone Labs form worker

This Cloudflare Worker receives project requests from `alphazonelabs.com` and sends them to the Alpha Zone Labs inbox through Cloudflare Email Routing.

## Endpoints

- `GET /` — health check
- `OPTIONS /api/forms` — CORS preflight
- `POST /api/forms` — contact and project request delivery

## Local development

1. Run `npm install`.
2. Run `npm run dev`.
3. The worker starts at `http://127.0.0.1:8787`.

## Configuration

The non-secret values in `wrangler.jsonc` configure the Alpha Zone Labs recipient, sender, and allowed website origins:

- `FORMS_TO_EMAIL`
- `FORMS_DISPLAY_TO_EMAIL`
- `FORMS_FROM_EMAIL`
- `ALLOWED_ORIGINS`

Deploy with `npm run deploy` after confirming the Cloudflare Email Routing binding is active.
