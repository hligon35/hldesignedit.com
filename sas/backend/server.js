import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'node:path';
import { config } from './config.js';
import analyzeRoutes from './routes/analyzeRoutes.js';
import { accessRoutes, requireAccess } from './routes/accessRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

app.get('/api/config', (_request, response) => {
  response.json({ turnstileSiteKey: config.turnstileSiteKey });
});

app.use('/api/access', accessRoutes);
app.use('/api/analyze', requireAccess, analyzeRoutes);
app.use('/api/reports', requireAccess, reportRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(config.distDir));

  app.get('*', (_request, response) => {
    response.sendFile(path.join(config.distDir, 'index.html'));
  });
}

app.use((error, _request, response, _next) => {
  const message = error instanceof Error ? error.message : 'Unexpected server error';
  response.status(500).json({ error: message });
});

app.listen(config.port, () => {
  console.log(`SAS server listening on http://localhost:${config.port}`);
});