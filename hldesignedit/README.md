# Cloudflare Workers OpenAPI 3.1

This is a Cloudflare Worker with OpenAPI 3.1 using [chanfana](https://github.com/cloudflare/chanfana) and [Hono](https://github.com/honojs/hono).

This is an example project made to be used as a quick start into building OpenAPI compliant Workers that generates the
`openapi.json` schema automatically from code and validates the incoming request to the defined parameters or request body.

## Get started

1. Sign up for [Cloudflare Workers](https://workers.dev). The free tier is more than enough for most use cases.
2. Clone this project and install dependencies with `npm install`
3. Run `wrangler login` to login to your Cloudflare account in wrangler
4. Run `wrangler deploy` to publish the API to Cloudflare Workers

## Project structure

1. Your main router is defined in `src/index.ts`.
2. Each endpoint has its own file in `src/endpoints/`.
3. For more information read the [chanfana documentation](https://chanfana.pages.dev/) and [Hono documentation](https://hono.dev/docs).

## Development

1. Run `wrangler dev` to start a local instance of the API.
2. Open `http://localhost:8787/` in your browser to see the Swagger interface where you can try the endpoints.
3. Changes made in the `src/` folder will automatically trigger the server to reload, you only need to refresh the Swagger interface.

## Forms delivery (email)

This worker exposes `POST /api/forms` which your portfolio site uses to deliver:

- The inline contact form
- The Project Request modal form

### Email provider

Cloudflare Workers cannot send SMTP email directly. This project uses the Resend API.

1. Create a Resend account and get an API key.
2. Set the secret:

	- `wrangler secret put RESEND_API_KEY`

3. Set a valid `from` address.

	- By default `FORMS_FROM_EMAIL` is `onboarding@resend.dev`.
	- For production, set it to a sender you own/verified (example: `forms@hldesignedit.com`).

### Worker config

Configured in `wrangler.jsonc`:

- `FORMS_TO_EMAIL` (defaults to `info@hldesignedit.com`)
- `FORMS_FROM_EMAIL` (Resend sender)
- `ALLOWED_ORIGINS` (CORS allowlist for cross-origin submissions)

### Routing

Recommended: add a Worker route so the portfolio can call:

- `https://hldesignedit.com/api/forms`

In Cloudflare Dashboard:

- Workers & Pages → your Worker → Routes → add `hldesignedit.com/api/*`

Then deploy:

- `wrangler deploy`

## SAS integration

This Worker now also supports the SAS conversion path through `api/sas/*` routes, backed by a Durable Object for persistent report storage.

The dedicated SAS deployment target is the `sas` Wrangler environment. Deploying that environment builds the frontend from `../sas`, serves the built assets as a SPA, and attaches the Worker to `sas.hldesignedit.com`.

### SAS secrets

Set the required secrets with Wrangler instead of storing them in source:

- `wrangler secret put OPENAI_API_KEY`
- `wrangler secret put TURNSTILE_SECRET_KEY`

For the dedicated SAS deployment, set them on the `sas` environment:

- `wrangler secret put OPENAI_API_KEY --env sas`
- `wrangler secret put TURNSTILE_SECRET_KEY --env sas`

This Wrangler version does not validate required secrets from `wrangler.jsonc`, so the commands above are the source of truth for the SAS environment.

Set the Turnstile site key as a runtime binding for the `sas` environment so deploys do not commit or overwrite it from source. Use a distinct binding name to avoid collisions with prior plain-text vars:

- `wrangler secret put TURNSTILE_SITE_PUBLIC_KEY --env sas`

### SAS deployment

From `hldesignedit/`:

- `npm run deploy:sas`

That deployment uses the `env.sas` configuration in `wrangler.jsonc`, builds the frontend in `../sas`, serves it with Workers Assets, and points the custom domain `sas.hldesignedit.com` at the SAS landing page.

### SAS routes

- `GET /api/sas/access/status`
- `POST /api/sas/access/verify`
- `POST /api/sas/analyze`
- `GET /api/sas/reports`
- `GET /api/sas/reports/:id`
- `POST /api/sas/reports`

### SAS storage

SAS report persistence uses the `SasStore` Durable Object configured in `wrangler.jsonc` migrations.
