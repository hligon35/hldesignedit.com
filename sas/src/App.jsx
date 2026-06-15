import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AccessGuard from './components/AccessGuard';
import AnalyzePage from './pages/AnalyzePage';
import ReportsPage from './pages/ReportsPage';
import ReportDetailPage from './pages/ReportDetailPage';
import './sas.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AnalyzePage />} />
        <Route
          path="/analyze"
          element={(
            <Navigate to="/" replace />
          )}
        />
        <Route
          path="/reports"
          element={(
            <AccessGuard>
              <ReportsPage />
            </AccessGuard>
          )}
        />
        <Route
          path="/reports/:id"
          element={(
            <AccessGuard>
              <ReportDetailPage />
            </AccessGuard>
          )}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;