import { Hono } from "hono";
import { FormsSubmit } from "./endpoints/formsSubmit";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// Add security headers
app.use('*', async (c, next) => {
  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('X-Frame-Options', 'DENY');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self';");
});

app.options("/api/forms", FormsSubmit);
app.post("/api/forms", FormsSubmit);

app.get("/", (c) => c.json({ ok: true, service: "Alpha Zone Labs forms" }));

// Export the Hono app
export default app;
