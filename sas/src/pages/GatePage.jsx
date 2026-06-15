import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import TurnstileWidget from '../components/TurnstileWidget';
import { checkAccess, validateTurnstile } from '../services/api';

function GatePage() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [siteKey, setSiteKey] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    checkAccess()
      .then((result) => {
        setSiteKey(result.siteKey || '');
        if (result.allowed) {
          navigate('/analyze', { replace: true });
        }
      })
      .catch(() => {
        setError('Unable to verify access status.');
      });
  }, [navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!token) {
      setError('Complete the verification challenge first.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      await validateTurnstile(token);
      navigate('/analyze');
    } catch (submitError) {
      setError(submitError.message);
      setStatus('idle');
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="Secure Intake"
        title="Protected access for live site analysis"
        description="Verify once with Cloudflare Turnstile before generating audits, prompts, and consultant-ready scripts."
      />

      <section className="services-section sas-content-section">
        <div className="container sas-grid-two-column">
          <article className="service-card sas-detail-card">
            <h3>Access Gate</h3>
            <p>
              This challenge protects the analyzer before anyone reaches the OpenAI-backed workflow.
            </p>
            <form className="sas-form-stack" onSubmit={handleSubmit}>
              <TurnstileWidget
                siteKey={siteKey}
                onToken={(nextToken) => {
                  setToken(nextToken);
                  setError('');
                }}
                onExpire={() => setToken('')}
                onError={() => setError('Turnstile could not be loaded. Check your site key configuration.')}
              />
              {!siteKey ? <p className="sas-error-banner">Set VITE_TURNSTILE_SITE_KEY to render the widget.</p> : null}
              {error ? <p className="sas-error-banner">{error}</p> : null}
              <button type="submit" className="cta-btn primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Verifying...' : 'Enter SAS'}
              </button>
            </form>
          </article>

          <article className="service-card sas-detail-card">
            <h3>What happens next</h3>
            <div className="sas-list-stack">
              <div className="sas-list-card">
                <h4>Client-ready report</h4>
                <p>Conversion, UX, SEO, and brand consistency analysis in presentation-ready language.</p>
              </div>
              <div className="sas-list-card">
                <h4>AI scaffold prompt</h4>
                <p>A structured rebuild prompt that includes fixes plus an admin backend direction.</p>
              </div>
              <div className="sas-list-card">
                <h4>Consultant script</h4>
                <p>Plain-language talking points you can use immediately on a client call.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default GatePage;