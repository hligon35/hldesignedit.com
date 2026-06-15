import express from 'express';
import { analyzeWebsite } from '../llm/analyzeWebsite.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const analyzeRoutes = express.Router();

function createReportId() {
  return new Date().toISOString().replace(/[.:]/g, '-');
}

analyzeRoutes.post('/', asyncHandler(async (request, response) => {
  const { url } = request.body || {};

  if (!url) {
    response.status(400).json({ error: 'URL is required.' });
    return;
  }

  let normalizedUrl;

  try {
    normalizedUrl = new URL(url).toString();
  } catch {
    response.status(400).json({ error: 'Provide a valid absolute URL.' });
    return;
  }

  const analysis = await analyzeWebsite(normalizedUrl);
  const report = {
    id: createReportId(),
    url: normalizedUrl,
    timestamp: new Date().toISOString(),
    overallScore: analysis.overallScore,
    categories: analysis.categories,
    topFixes: analysis.topFixes,
    sectionInsights: analysis.sectionInsights,
    clientFacingSummary: analysis.clientFacingSummary,
    aiScaffoldPrompt: analysis.aiScaffoldPrompt,
    consultantScript: analysis.consultantScript
  };

  response.json({ report });
}));

export default analyzeRoutes;