import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ReportTabs from '../components/ReportTabs';
import { formatTimestamp } from '../lib/formatters';
import { fetchReport } from '../services/api';

function ReportDetailPage() {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReport(id)
      .then((result) => setReport(result.report))
      .catch((requestError) => setError(requestError.message));
  }, [id]);

  if (error) {
    return (
      <>
        <PageIntro
          eyebrow="Report"
          title="Unable to load report"
          description={error}
          actions={<Link className="cta-btn secondary" to="/reports">Back to reports</Link>}
        />
      </>
    );
  }

  if (!report) {
    return (
      <>
        <PageIntro
          eyebrow="Report"
          title="Loading report"
          description="Pulling the saved analysis from persistent storage."
        />
      </>
    );
  }

  return (
    <>
      <PageIntro
        eyebrow="Saved Report"
        title={report.url}
        description={`Generated ${formatTimestamp(report.timestamp)}`}
        actions={<Link className="cta-btn secondary" to="/reports">Back to reports</Link>}
      />

      <section className="services-section sas-content-section">
        <div className="container sas-stack-lg">
          <ReportTabs report={report} />
        </div>
      </section>
    </>
  );
}

export default ReportDetailPage;