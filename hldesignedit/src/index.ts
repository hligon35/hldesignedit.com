import { fromHono } from "chanfana";
import { Hono } from "hono";
import { FormsSubmit } from "./endpoints/formsSubmit";
import {
  sasAccessStatus,
  sasAccessVerify,
  sasAnalyze,
  sasOptions,
  sasReportGet,
  sasReportSave,
  sasReportsList,
} from "./endpoints/sasRoutes";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { SasStoreCurrent } from "./sas/storage";

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

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

app.options("/api/forms", FormsSubmit);
app.post("/api/forms", FormsSubmit);
app.options("/api/sas/*", sasOptions);
app.get("/api/sas/access/status", sasAccessStatus);
app.post("/api/sas/access/verify", sasAccessVerify);
app.post("/api/sas/analyze", sasAnalyze);
app.get("/api/sas/reports", sasReportsList);
app.get("/api/sas/reports/:id", sasReportGet);
app.post("/api/sas/reports", sasReportSave);

// You may also register routes for non OpenAPI directly on Hono
// app.get('/test', (c) => c.text('Hono!'))

// Export the Hono app
export default app;
export { SasStoreCurrent };
// Re-export a stable class name expected by existing Durable Object instances
export { SasStoreCurrent as SasStore };
