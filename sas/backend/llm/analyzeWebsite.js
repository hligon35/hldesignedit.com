import * as cheerio from 'cheerio';
import OpenAI from 'openai';
import { config } from '../config.js';

const ANALYSIS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'overallScore',
    'categories',
    'topFixes',
    'sectionInsights',
    'clientFacingSummary',
    'aiScaffoldPrompt',
    'consultantScript'
  ],
  properties: {
    overallScore: { type: 'number' },
    categories: {
      type: 'object',
      additionalProperties: false,
      required: ['conversion', 'traffic_seo', 'ux_ui', 'brand_consistency'],
      properties: {
        conversion: {
          type: 'object',
          additionalProperties: false,
          required: ['score', 'summary'],
          properties: {
            score: { type: 'number' },
            summary: { type: 'string' }
          }
        },
        traffic_seo: {
          type: 'object',
          additionalProperties: false,
          required: ['score', 'summary'],
          properties: {
            score: { type: 'number' },
            summary: { type: 'string' }
          }
        },
        ux_ui: {
          type: 'object',
          additionalProperties: false,
          required: ['score', 'summary'],
          properties: {
            score: { type: 'number' },
            summary: { type: 'string' }
          }
        },
        brand_consistency: {
          type: 'object',
          additionalProperties: false,
          required: ['score', 'summary'],
          properties: {
            score: { type: 'number' },
            summary: { type: 'string' }
          }
        }
      }
    },
    topFixes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'impact', 'description'],
        properties: {
          title: { type: 'string' },
          impact: { type: 'string', enum: ['high', 'medium', 'low'] },
          description: { type: 'string' }
        }
      }
    },
    sectionInsights: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['section', 'whatIsWrong', 'whyItMatters', 'whatToDo'],
        properties: {
          section: { type: 'string' },
          whatIsWrong: { type: 'string' },
          whyItMatters: { type: 'string' },
          whatToDo: { type: 'string' }
        }
      }
    },
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
      'User-Agent': 'SAS-Site-Analysis-System/1.0 (+https://sas.hldesignedit.com)'
    }
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch target URL: ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  $('script, style, noscript, svg').remove();

  const title = $('title').first().text().trim();
  const headings = $('h1, h2, h3')
    .slice(0, 25)
    .map((_, element) => $(element).text().trim())
    .get()
    .filter(Boolean);
  const paragraphs = $('p, li')
    .slice(0, 50)
    .map((_, element) => $(element).text().replace(/\s+/g, ' ').trim())
    .get()
    .filter(Boolean)
    .join('\n');

  return `Title: ${title}\nHeadings:\n${headings.join('\n')}\n\nReadable text:\n${paragraphs}`.slice(0, 12000);
}

function extractOutputText(response) {
  if (typeof response?.output_text === 'string' && response.output_text.trim()) {
    return response.output_text;
  }

  const chunks = Array.isArray(response?.output)
    ? response.output.flatMap((entry) => Array.isArray(entry?.content) ? entry.content : [])
    : [];

  const joined = chunks
    .map((content) => content?.text)
    .filter((text) => typeof text === 'string')
    .join('\n')
    .trim();

  return joined || null;
}

export async function analyzeWebsite(url) {
  const snapshot = await fetchWebsiteSnapshot(url);

  if (!config.openAiApiKey) {
    throw new Error('OPENAI_API_KEY is not configured for SAS analysis.');
  }

  const client = new OpenAI({ apiKey: config.openAiApiKey });
  const response = await client.responses.create({
    model: 'gpt-5.1-mini',
    input: [
      {
        role: 'system',
        content: [
          {
            type: 'input_text',
            text: 'Analyze the provided website content and return only JSON matching the requested schema.'
          }
        ]
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: buildPrompt(url, snapshot)
          }
        ]
      }
    ],
    text: {
      format: {
        type: 'json_schema',
        name: 'site_analysis_report',
        schema: ANALYSIS_SCHEMA,
        strict: true
      }
    }
  });

  const output = extractOutputText(response);
  if (!output) {
    throw new Error('OpenAI response did not include output text.');
  }

  try {
    return JSON.parse(output);
  } catch {
    throw new Error('OpenAI response was not valid JSON.');
  }
}
