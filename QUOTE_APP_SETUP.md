# Alpha Zone Labs Quote App Setup

## Local development

```bash
npm install
npm run dev:quote
```

Open `http://localhost:5174`.

## Build

```bash
npm run build:quote
```

The standalone app is generated in `quote-dist/`.

## Google Sheets and email integration

1. Create a new Google Sheet for quote responses.
2. Open **Extensions > Apps Script**.
3. Replace the default code with `google-apps-script/QuoteDiscovery.gs` from this repository.
4. Save the project.
5. Select **Deploy > New deployment**.
6. Choose **Web app**.
7. Set **Execute as** to yourself.
8. Set **Who has access** to `Anyone`.
9. Deploy and authorize the requested Google permissions.
10. Copy the `/exec` web app URL.
11. In `quote-app/main.js`, replace:

```js
const APPS_SCRIPT_URL = 'REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
```

with the copied web app URL.

The Apps Script will:

- append every completed response to the `Quote Discovery Responses` sheet tab;
- email the full branded response to `hligon@alphazonelabs.com`;
- send the client a branded confirmation email;
- notify the form when submission succeeds.

## Cloudflare Pages deployment

Create a separate Cloudflare Pages project connected to `hligon35/hldesignedit.com`.

Use these settings:

- Framework preset: `Vite`
- Build command: `npm run build:quote`
- Build output directory: `quote-dist`
- Root directory: leave blank

After the first successful deployment:

1. Open the Pages project.
2. Select **Custom domains**.
3. Add `quote.alphazonelabs.com`.
4. Allow Cloudflare to create or update the required DNS record.

This quote project is independent from the main Alpha Zone Labs website build.

## Testing checklist

- Submit using an email address you can access.
- Confirm the thank-you screen appears.
- Confirm a row is added to the Google Sheet.
- Confirm the owner email arrives at `hligon@alphazonelabs.com`.
- Confirm the client receives the confirmation email.
- Test on a phone and desktop browser.
- Submit once with several platforms selected to verify each platform receives its own feature step.
