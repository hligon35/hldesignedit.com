import { promises as fs } from 'node:fs';
import path from 'node:path';
import { config } from '../config.js';

function normalizeReport(report) {
  return {
    id: report.id,
    url: report.url,
    timestamp: report.timestamp,
    overallScore: report.overallScore,
    categories: report.categories,
    topFixes: report.topFixes,
    sectionInsights: report.sectionInsights,
    clientFacingSummary: report.clientFacingSummary,
    aiScaffoldPrompt: report.aiScaffoldPrompt,
    consultantScript: report.consultantScript
  };
}

async function ensureReportsDirectory() {
  await fs.mkdir(config.reportsDir, { recursive: true });
}

async function readReportFile(fileName) {
  const filePath = path.join(config.reportsDir, fileName);
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

export async function listReports(search = '') {
  await ensureReportsDirectory();
  const entries = await fs.readdir(config.reportsDir);
  const reports = await Promise.all(
    entries
      .filter((entry) => entry.endsWith('.json'))
      .map((entry) => readReportFile(entry))
  );

  const query = search.trim().toLowerCase();

  return reports
    .filter((report) => {
      if (!query) {
        return true;
      }

      const timestamp = String(report.timestamp || '').toLowerCase();
      return report.url.toLowerCase().includes(query) || timestamp.includes(query);
    })
    .sort((left, right) => new Date(right.timestamp) - new Date(left.timestamp))
    .map(normalizeReport);
}

export async function getReportById(id) {
  await ensureReportsDirectory();
  const filePath = path.join(config.reportsDir, `${id}.json`);
  const raw = await fs.readFile(filePath, 'utf8');
  return normalizeReport(JSON.parse(raw));
}

export async function saveReport(report) {
  await ensureReportsDirectory();
  const normalized = normalizeReport(report);
  const filePath = path.join(config.reportsDir, `${normalized.id}.json`);
  await fs.writeFile(filePath, JSON.stringify(normalized, null, 2), 'utf8');
  return normalized;
}