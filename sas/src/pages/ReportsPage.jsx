import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import { formatScore, formatTimestamp } from '../lib/formatters';
import { fetchReports } from '../services/api';

function ReportsPage() {
  const [search, setSearch] = useState('');
  const [reports, setReports] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    setStatus('loading');

    fetchReports(search)
      .then((result) => {
        if (!active) {
          return;
        }

        setReports(result.reports);
        setStatus('idle');
      })
      .catch((requestError) => {
        if (!active) {
          return;
        }

        setError(requestError.message);
        setStatus('idle');
      });

    return () => {
      active = false;
    };
  }, [search]);

  return (
    <>
      <PageIntro
        eyebrow="Reports"
        title="Persistent audit library"
        description="Search by URL or date, reopen any saved analysis, and reuse consultant deliverables without rerunning the audit."
      />

      <section className="services-section sas-content-section">
        <div className="container sas-stack-lg">
          <article className="service-card sas-detail-card">
            <label className="sas-input-group">
              <span className="sas-label">Search reports</span>
              <input
                type="search"
                className="form-input sas-input"
                placeholder="Search by URL or date"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            {error ? <p className="sas-error-banner">{error}</p> : null}
          </article>

          <div className="sas-report-list">
            {status === 'loading' ? <p>Loading reports...</p> : null}
            {!reports.length && status !== 'loading' ? (
              <article className="service-card sas-detail-card">
                <h3>No saved reports yet</h3>
                <p>Run an analysis and save it to build the dashboard history.</p>
              </article>
            ) : null}
            {reports.map((report) => (
              <Link key={report.id} to={`/reports/${report.id}`} className="service-card sas-report-row">
                <div>
                  <div className="sas-report-url">{report.url}</div>
                  <p>{formatTimestamp(report.timestamp)}</p>
                </div>
                <div className="sas-report-meta">
                  <span className="sas-impact sas-impact-high">{formatScore(report.overallScore)}</span>
                  <span className="cta-btn secondary sas-open-chip">Open</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ReportsPage;