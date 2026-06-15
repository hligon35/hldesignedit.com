import express from 'express';
import { config } from '../config.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const accessRoutes = express.Router();

function hasAccess(request) {
  return request.cookies?.[config.accessCookieName] === 'granted';
}

function requireAccess(request, response, next) {
  if (!hasAccess(request)) {
    response.status(403).json({ error: 'Access denied. Complete Turnstile verification first.' });
    return;
  }

  next();
}

accessRoutes.get('/status', (request, response) => {
  response.json({ allowed: hasAccess(request), siteKey: config.turnstileSiteKey });
});

accessRoutes.post('/verify', asyncHandler(async (request, response) => {
  const { token } = request.body || {};

  if (!token) {
    response.status(400).json({ error: 'Turnstile token is required.' });
    return;
  }

  if (!config.turnstileSecretKey) {
    response.status(500).json({ error: 'TURNSTILE_SECRET_KEY is not configured.' });
    return;
  }

  const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: config.turnstileSecretKey,
      response: token
    })
  });

  const verifyPayload = await verifyResponse.json();

  if (!verifyPayload.success) {
    response.status(403).json({ error: 'Turnstile validation failed.' });
    return;
  }

  response.cookie(config.accessCookieName, 'granted', {
    httpOnly: true,
    secure: config.secureCookies,
    sameSite: 'lax',
    maxAge: config.accessCookieAgeMs
  });

  response.json({ success: true });
}));

export { accessRoutes, hasAccess, requireAccess };