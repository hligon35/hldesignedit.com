import { useState } from 'react';
import Tabs from './Tabs';
import { formatScore, toSentenceCase } from '../lib/formatters';

const TAB_DEFINITIONS = [
  { id: 'client', label: 'Client Report' },
  { id: 'prompt', label: 'AI Scaffold Prompt' },
  { id: 'script', label: 'Consultant Script' }
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button type="button" className="cta-btn secondary sas-copy-button" onClick={handleCopy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function ReportTabs({ report }) {
  const [activeTab, setActiveTab] = useState('client');

  if (!report) {
    return null;
  }

  return (
    <section className="sas-report-layout">
      <Tabs tabs={TAB_DEFINITIONS} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'client' ? (
        <div className="sas-card-grid">
          <article className="service-card sas-summary-card">
            <div className="sas-score-ring">
              <span className="sas-score-label">Overall</span>
              <strong>{formatScore(report.overallScore)}</strong>
            </div>
            <p>{report.clientFacingSummary}</p>
          </article>

          <article className="service-card sas-detail-card">
            <h3>Category Scores</h3>
            <div className="sas-category-grid">
              {Object.entries(report.categories || {}).map(([key, value]) => (
                <div key={key} className="expertise-item sas-category-card">
                  <div className="sas-mini-score">{formatScore(value.score)}</div>
                  <h4>{toSentenceCase(key)}</h4>
                  <p>{value.summary}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="service-card sas-detail-card">
            <h3>Top Fixes</h3>
            <div className="sas-list-stack">
              {(report.topFixes || []).map((fix) => (
                <div key={`${fix.title}-${fix.impact}`} className="sas-list-card">
                  <div className="sas-list-header">
                    <h4>{fix.title}</h4>
                    <span className={`sas-impact sas-impact-${fix.impact}`}>{fix.impact}</span>
                  </div>
                  <p>{fix.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="service-card sas-detail-card">
            <h3>Section Insights</h3>
            <div className="sas-list-stack">
              {(report.sectionInsights || []).map((section) => (
                <div key={section.section} className="sas-insight-card">
                  <h4>{section.section}</h4>
                  <p><strong>What is wrong:</strong> {section.whatIsWrong}</p>
                  <p><strong>Why it matters:</strong> {section.whyItMatters}</p>
                  <p><strong>What to do:</strong> {section.whatToDo}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      ) : null}

      {activeTab === 'prompt' ? (
        <article className="service-card sas-longform-card">
          <div className="sas-longform-header">
            <h3>AI Scaffold Prompt</h3>
            <CopyButton text={report.aiScaffoldPrompt} />
          </div>
          <pre className="sas-preformatted">{report.aiScaffoldPrompt}</pre>
        </article>
      ) : null}

      {activeTab === 'script' ? (
        <article className="service-card sas-longform-card">
          <div className="sas-longform-header">
            <h3>Consultant Script</h3>
            <CopyButton text={report.consultantScript} />
          </div>
          <pre className="sas-preformatted">{report.consultantScript}</pre>
        </article>
      ) : null}
    </section>
  );
}

export default ReportTabs;