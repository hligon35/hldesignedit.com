import { Hono } from "hono";
import { FormsSubmit } from "./endpoints/formsSubmit";
import {
  ReviewAuthConfig,
  ReviewAuthLogout,
  ReviewAuthSession,
  ReviewGoogleLogin,
} from "./endpoints/reviewAuth";
import {
  ReviewCreateInvitation,
  ReviewGetInvitation,
  ReviewListAdmin,
  ReviewListPublished,
  ReviewModerate,
  ReviewPublicOptions,
  ReviewSubmit,
} from "./endpoints/reviews";

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

app.post("/api/reviews/invitations", ReviewCreateInvitation);
app.get("/api/reviews", ReviewListAdmin);
app.post("/api/reviews/:id/moderate", ReviewModerate);
app.get("/api/reviews/invitation/:token", ReviewGetInvitation);
app.post("/api/reviews/invitation/:token", ReviewSubmit);
app.options("/api/reviews/published", ReviewPublicOptions);
app.get("/api/reviews/published", ReviewListPublished);

app.get("/", (c) => c.json({ ok: true, service: "Alpha Zone Labs forms and review authentication" }));

export default app;
