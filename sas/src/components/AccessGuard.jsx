import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { checkAccess } from '../services/api';

function AccessGuard({ children }) {
  const location = useLocation();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    let active = true;

    checkAccess()
      .then((result) => {
        if (active) {
          setAllowed(result.allowed);
        }
      })
      .catch(() => {
        if (active) {
          setAllowed(false);
        }
      });

    return () => {
      active = false;
    };
  }, [location.pathname]);

  if (allowed === null) {
    return <div className="sas-loading-state">Checking secure access...</div>;
  }

  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AccessGuard;