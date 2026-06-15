import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ReportTabs from '../components/ReportTabs';
import { analyzeUrl, saveReport } from '../services/api';

function AnalyzePage() {
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [saveState, setSaveState] = useState('idle');

  async function handleAnalyze(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');
    setSaveState('idle');

    try {
      const result = await analyzeUrl(url);
      setReport(result.report);
      setStatus('complete');
    } catch (requestError) {
      setError(requestError.message);
      setStatus('idle');
    }
  }

  async function handleSave() {
    if (!report) {
      return;
    }

    setSaveState('saving');

    try {
      const response = await saveReport(report);
      setReport(response.report);
      setSaveState('saved');
    } catch (saveError) {
      setError(saveError.message);
      setSaveState('idle');
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="Analyze"
        title="Run a complete site review"
        description="Submit a live website URL to generate a consultant-ready report, an AI scaffold prompt, and a plain-language explanation script."
        actions={<Link className="cta-btn secondary" to="/reports">Browse saved reports</Link>}
      />

      <section className="services-section sas-content-section">
        <div className="container sas-stack-lg">
          <article className="service-card sas-detail-card">
            <form className="sas-inline-form" onSubmit={handleAnalyze}>
              <label className="sas-input-group">
                <span className="sas-label">Client website URL</span>
                <input
                  type="url"
                  className="form-input sas-input"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  required
                />
              </label>
              <button type="submit" className="cta-btn primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Analyzing...' : 'Analyze'}
              </button>
            </form>
            {error ? <p className="sas-error-banner">{error}</p> : null}
            {report ? (
              <div className="sas-analysis-actions">
                <button
                  type="button"
                  className="cta-btn secondary"
                  onClick={handleSave}
                  disabled={saveState === 'saving' || saveState === 'saved'}
                >
                  {saveState === 'saving' ? 'Saving...' : saveState === 'saved' ? 'Saved' : 'Save Report'}
                </button>
                {report.id ? (
                  <Link className="cta-btn secondary" to={`/reports/${report.id}`}>
                    Open saved view
                  </Link>
                ) : null}
              </div>
            ) : null}
          </article>

          {report ? <ReportTabs report={report} /> : null}
        </div>
      </section>
    </>
  );
}

export default AnalyzePage;