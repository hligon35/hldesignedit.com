import * as cheerio from 'cheerio';
import OpenAI from 'openai';
import { config } from '../config.js';

const ANALYSIS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['overallScore', 'categories', 'topFixes', 'sectionInsights', 'clientFacingSummary', 'aiScaffoldPrompt', 'consultantScript'],
  properties: {
    overallScore: { type: 'number' },
    categories: {
      type: 'object',
      additionalProperties: false,
      required: ['conversion', 'traffic_seo', 'ux_ui', 'brand_consistency'],
      properties: {
        conversion: { type: 'object', additionalProperties: false, required: ['score', 'summary'], properties: { score: { type: 'number' }, summary: { type: 'string' } } },
        traffic_seo: { type: 'object', additionalProperties: false, required: ['score', 'summary'], properties: { score: { type: 'number' }, summary: { type: 'string' } } },
        ux_ui: { type: 'object', additionalProperties: false, required: ['score', 'summary'], properties: { score: { type: 'number' }, summary: { type: 'string' } } },
        brand_consistency: { type: 'object', additionalProperties: false, required: ['score', 'summary'], properties: { score: { type: 'number' }, summary: { type: 'string' } } }
      }
    },
    topFixes: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['title', 'impact', 'description'], properties: { title: { type: 'string' }, impact: { type: 'string', enum: ['high', 'medium', 'low'] }, description: { type: 'string' } } } },
    sectionInsights: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['section', 'whatIsWrong', 'whyItMatters', 'whatToDo'], properties: { section: { type: 'string' }, whatIsWrong: { type: 'string' }, whyItMatters: { type: 'string' }, whatToDo: { type: 'string' } } } },
    clientFacingSummary: { type: 'string' },
    aiScaffoldPrompt: { type: 'string' },
    consultantScript: { type: 'string' }
  }
};

function buildPrompt(url, pageSnapshot) {
  return [
    'You are auditing a business website for conversion performance, traffic/SEO, UX/UI, and brand consistency.',
    'Return only valid JSON matching the requested schema.',
    'Your tone should be expert but direct. The client-facing summary must avoid jargon. The consultant script should sound natural spoken aloud.',
    'The AI scaffold prompt must instruct another AI to rebuild the site with the identified fixes and include an admin backend for content management.',
    `Target URL: ${url}`,
    'Website snapshot:',
    pageSnapshot
  ].join('\n\n');
}

async function fetchWebsiteSnapshot(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'AlphaZoneLabs-Digital-Presence-Analyzer/1.0 (+https://sas.alphazonelabs.com)'
    }
  });

  if (!response.ok) throw new Error(`Unable to fetch target URL: ${response.status}`);

  const html = await response.text();
  const $ = cheerio.load(html);
  const title = $('title').first().text().trim();
  const description = $('meta[name="description"]').attr('content') || '';
  const headings = $('h1, h2, h3').map((_, el) => `${el.tagName.toUpperCase()}: ${$(el).text().trim()}`).get().filter(Boolean).slice(0, 30).join('\n');
  const bodyText = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 6000);
  return [`Title: ${title}`, `Description: ${description}`, 'Headings:', headings, 'Body excerpt:', bodyText].join('\n');
}

export async function analyzeWebsite(url) {
  if (!config.openaiApiKey) throw new Error('OPENAI_API_KEY is not configured.');
  const pageSnapshot = await fetchWebsiteSnapshot(url);
  const client = new OpenAI({ apiKey: config.openaiApiKey });
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: buildPrompt(url, pageSnapshot),
    text: { format: { type: 'json_schema', name: 'website_analysis', schema: ANALYSIS_SCHEMA, strict: true } }
  });
  return JSON.parse(response.output_text);
}
