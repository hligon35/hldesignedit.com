import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ReportTabs from '../components/ReportTabs';
import TurnstileWidget from '../components/TurnstileWidget';
import { analyzeUrl, checkAccess, saveReport, validateTurnstile } from '../services/api';

function AnalyzePage() {
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [saveState, setSaveState] = useState('idle');
  const [hasAccess, setHasAccess] = useState(false);
  const [siteKey, setSiteKey] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    let active = true;

    checkAccess()
      .then((result) => {
        if (!active) {
          return;
        }

        setHasAccess(Boolean(result.allowed));
        setSiteKey(result.siteKey || '');
      })
      .catch(() => {
        if (!active) {
          return;
        }

        setError('Unable to verify access status.');
      });

    return () => {
      active = false;
    };
  }, []);

  async function handleAnalyze(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');
    setSaveState('idle');

    try {
      if (!hasAccess) {
        if (!turnstileToken) {
          throw new Error('Complete the Turnstile challenge before running the analysis.');
        }

        await validateTurnstile(turnstileToken);
        setHasAccess(true);
      }

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
        eyebrow="Live Analysis"
        title="Enter a website and generate the full SAS report"
        description="Submit a live website URL, complete the Turnstile check once, and generate the client report, rebuild prompt, and consultant script from the landing page."
        actions={<Link className="cta-btn secondary" to="/reports">Browse saved reports</Link>}
      />

      <section className="services-section sas-content-section">
        <div className="container sas-stack-lg">
          <article className="service-card sas-detail-card">
            {!hasAccess ? (
              <div className="sas-list-stack sas-access-stack">
                <div className="sas-list-card">
                  <h3>Verification</h3>
                  <p>Complete the Turnstile challenge to unlock analysis and report storage for this session.</p>
                  <TurnstileWidget
                    siteKey={siteKey}
                    onToken={(nextToken) => {
                      setTurnstileToken(nextToken);
                      setError('');
                    }}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => setError('Turnstile could not be loaded. Check your site key configuration.')}
                  />
                  {!siteKey ? <p className="sas-error-banner">Set `TURNSTILE_SITE_KEY` on the Worker or `VITE_TURNSTILE_SITE_KEY` for local fallback.</p> : null}
                </div>
              </div>
            ) : null}
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
                {status === 'loading' ? 'Analyzing...' : hasAccess ? 'Analyze' : 'Verify and Analyze'}
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