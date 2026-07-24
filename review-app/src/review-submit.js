import './review-submit.css';
import logoUrl from '../../alpha-zone-labs-logo.png?url';

const app = document.querySelector('#app');
const token = new URLSearchParams(window.location.search).get('token') || '';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function api(path, options = {}) {
  const response = await fetch(path, options);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || 'Request failed.');
  return payload;
}

function renderError(message) {
  app.innerHTML = `<section class="submit-shell"><img src="${logoUrl}" alt="Alpha Zone Labs" class="submit-logo"><div class="submit-card"><p class="eyebrow">Review request</p><h1>We could not open this link.</h1><p>${escapeHtml(message)}</p></div></section>`;
}

function renderForm(invitation) {
  app.innerHTML = `
    <section class="submit-shell">
      <img src="${logoUrl}" alt="Alpha Zone Labs" class="submit-logo">
      <div class="submit-card">
        <p class="eyebrow">Alpha Zone Labs</p>
        <h1>Tell us about your experience.</h1>
        <p>Your feedback may be displayed publicly after it is reviewed and approved.</p>
        <form id="review-form">
          <label for="reviewer-name">Name displayed with review</label>
          <input id="reviewer-name" name="name" type="text" maxlength="120" value="${escapeHtml(invitation.name || '')}" required>
          <fieldset>
            <legend>Overall rating</legend>
            <div class="rating-options">
              ${[5,4,3,2,1].map((rating) => `<label><input type="radio" name="rating" value="${rating}" required><span>${'★'.repeat(rating)}</span></label>`).join('')}
            </div>
          </fieldset>
          <label for="review-text">Your review</label>
          <textarea id="review-text" name="review" rows="7" maxlength="3000" minlength="10" required></textarea>
          <button type="submit">Submit review</button>
          <p id="submit-status" class="form-status" role="status"></p>
        </form>
      </div>
    </section>
  `;

  document.querySelector('#review-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const status = document.querySelector('#submit-status');
    const data = Object.fromEntries(new FormData(form));
    data.rating = Number(data.rating);
    button.disabled = true;
    status.className = 'form-status';
    status.textContent = 'Submitting your review…';
    try {
      const result = await api(`/api/reviews/invitation/${encodeURIComponent(token)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      form.innerHTML = `<div class="success-panel"><p class="eyebrow">Submitted</p><h2>Thank you for your feedback.</h2><p>${escapeHtml(result.message)}</p></div>`;
    } catch (error) {
      status.className = 'form-status error';
      status.textContent = error.message;
      button.disabled = false;
    }
  });
}

if (!token) {
  renderError('The review token is missing. Please use the complete link from your email.');
} else {
  api(`/api/reviews/invitation/${encodeURIComponent(token)}`)
    .then(({ invitation }) => renderForm(invitation))
    .catch((error) => renderError(error.message));
}
