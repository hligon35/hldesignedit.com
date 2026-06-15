import express from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getReportById, listReports, saveReport } from '../storage/reportsRepository.js';

const reportRoutes = express.Router();

reportRoutes.get('/', asyncHandler(async (request, response) => {
  const reports = await listReports(request.query.search || '');
  response.json({ reports });
}));

reportRoutes.get('/:id', asyncHandler(async (request, response) => {
  try {
    const report = await getReportById(request.params.id);
    response.json({ report });
  } catch {
    response.status(404).json({ error: 'Report not found.' });
  }
}));

reportRoutes.post('/', asyncHandler(async (request, response) => {
  const report = request.body;

  if (!report?.id || !report?.url) {
    response.status(400).json({ error: 'A complete report payload is required.' });
    return;
  }

  const saved = await saveReport(report);
  response.status(201).json({ report: saved });
}));

export default reportRoutes;