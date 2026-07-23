import { Hono } from "hono";
import { FormsSubmit } from "./endpoints/formsSubmit";
import {
  ReviewAuthConfig,
  ReviewAuthLogout,
  ReviewAuthSession,
  ReviewGoogleLogin,
} from "./endpoints/reviewAuth";

const app = new Hono<{ Bindings: Env }>();

app.use("*", async (c, next) => {
  await next();
  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
  c.header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self';");
});

app.options("/api/forms", FormsSubmit);
app.post("/api/forms", FormsSubmit);

app.get("/api/auth/config", ReviewAuthConfig);
app.post("/api/auth/google", ReviewGoogleLogin);
app.get("/api/auth/session", ReviewAuthSession);
app.post("/api/auth/logout", ReviewAuthLogout);

app.get("/", (c) => c.json({ ok: true, service: "Alpha Zone Labs forms and review authentication" }));

export default app;
