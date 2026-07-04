const TOKEN_KEY = 'sas-access-token';
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '/api/sas').replace(/\/$/, '');

function getAccessToken() {
  return window.sessionStorage.getItem(TOKEN_KEY) || '';
}

function setAccessToken(token) {
  if (token) {
    window.sessionStorage.setItem(TOKEN_KEY, token);
    return;
  }

  window.sessionStorage.removeItem(TOKEN_KEY);
}

async function request(path, options = {}) {
  const token = getAccessToken();

  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {})
      },
      ...options
    });
  } catch (_error) {
    throw new Error(
      `Unable to reach the SAS API at ${API_BASE}. Start the backend server or set VITE_API_BASE_URL to a reachable endpoint.`
    );
  }

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      setAccessToken('');
    }

    const message = typeof body === 'string' ? body : body?.error || 'Request failed';
    throw new Error(message);
  }

  return body;
}

export function validateTurnstile(token) {
  return request('/access/verify', {
    method: 'POST',
    body: JSON.stringify({ token })
  }).then((result) => {
    setAccessToken(result.accessToken || '');
    return result;
  });
}

export function checkAccess() {
  return request('/access/status').catch((error) => {
    setAccessToken('');
    throw error;
  });
}

export function analyzeUrl(url) {
  return request('/analyze', {
    method: 'POST',
    body: JSON.stringify({ url })
  });
}

export function fetchReports(search = '') {
  const query = search ? `?search=${encodeURIComponent(search)}` : '';
  return request(`/reports${query}`);
}

export function fetchReport(id) {
  return request(`/reports/${encodeURIComponent(id)}`);
}

export function saveReport(report) {
  return request('/reports', {
    method: 'POST',
    body: JSON.stringify(report)
  });
}

export function clearAccessToken() {
  setAccessToken('');
}