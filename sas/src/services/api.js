async function request(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof body === 'string' ? body : body?.error || 'Request failed';
    throw new Error(message);
  }

  return body;
}

export function validateTurnstile(token) {
  return request('/api/access/verify', {
    method: 'POST',
    body: JSON.stringify({ token })
  });
}

export function checkAccess() {
  return request('/api/access/status');
}

export function analyzeUrl(url) {
  return request('/api/analyze', {
    method: 'POST',
    body: JSON.stringify({ url })
  });
}

export function fetchReports(search = '') {
  const query = search ? `?search=${encodeURIComponent(search)}` : '';
  return request(`/api/reports${query}`);
}

export function fetchReport(id) {
  return request(`/api/reports/${encodeURIComponent(id)}`);
}

export function saveReport(report) {
  return request('/api/reports', {
    method: 'POST',
    body: JSON.stringify(report)
  });
}