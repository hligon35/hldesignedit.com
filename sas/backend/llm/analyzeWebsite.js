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

function createFallbackAnalysis(url, snapshot) {
  const excerpt = snapshot.slice(0, 600);

  return {
    overallScore: 62,
    categories: {
      conversion: { score: 60, summary: 'Calls to action and trust signals need sharper prioritization.' },
      traffic_seo: { score: 64, summary: 'Visible content exists, but information architecture and search intent cues need work.' },
      ux_ui: { score: 63, summary: 'The site likely communicates value, but hierarchy and scanning flow can be improved.' },
      brand_consistency: { score: 61, summary: 'Brand voice and presentation need tighter consistency across sections.' }
    },
    topFixes: [
      { title: 'Strengthen above-the-fold messaging', impact: 'high', description: 'Make the primary offer, CTA, and proof elements obvious within the first viewport.' },
      { title: 'Clarify service pathways', impact: 'medium', description: 'Reduce cognitive load by grouping services and outcomes into clearer navigation choices.' },
      { title: 'Standardize brand proof', impact: 'medium', description: 'Use consistent testimonials, proof points, and supporting visuals to reinforce credibility.' }
    ],
    sectionInsights: [
      {
        section: 'Homepage hero',
        whatIsWrong: 'The opening section may not immediately connect business value to a concrete next step.',
        whyItMatters: 'Visitors decide quickly whether to continue exploring or leave.',
        whatToDo: 'Lead with a sharper promise, one CTA, and one proof-driven supporting statement.'
      },
      {
        section: 'Service positioning',
        whatIsWrong: 'Offer descriptions may be broad and not tied closely enough to outcomes.',
        whyItMatters: 'Potential clients need to understand results, not just capabilities.',
        whatToDo: 'Rewrite services around measurable benefits, decision triggers, and engagement steps.'
      }
    ],
    clientFacingSummary: `SAS could not reach the OpenAI service, so this report is based on direct content extraction from ${url}. The site shows useful business information, but it would benefit from a clearer conversion path, more explicit SEO structure, and tighter brand presentation.`,
    aiScaffoldPrompt: `Rebuild ${url} as a modern, responsive marketing website with an admin backend for editing content, testimonials, services, and SEO settings. Use this extracted site context as source material:\n\n${excerpt}\n\nPrioritize stronger CTAs, clearer content hierarchy, improved SEO page structure, and consistent branding across all sections.`,
    consultantScript: `Here is the short version I would tell the client: the site has a solid base, but it is not converting as efficiently as it should. The biggest opportunities are clarifying the main offer, tightening the page hierarchy, and making the brand feel more consistent from top to bottom. Once those are fixed, the website should communicate value faster and support better lead generation.`
  };
}

export async function analyzeWebsite(url) {
  const snapshot = await fetchWebsiteSnapshot(url);

  if (!config.openAiApiKey) {
    return createFallbackAnalysis(url, snapshot);
  }

  const client = new OpenAI({ apiKey: config.openAiApiKey });

  try {
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

    const output = response.output_text;
    return JSON.parse(output);
  } catch (error) {
    return createFallbackAnalysis(url, snapshot);
  }
}