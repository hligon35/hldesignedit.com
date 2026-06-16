import dotenv from 'dotenv';
import path from 'node:path';

const rootDir = process.cwd();

dotenv.config({ path: path.join(rootDir, '.env') });

export const config = {
  port: Number(process.env.PORT || 8787),
  rootDir,
  distDir: path.join(rootDir, 'dist'),
  reportsDir: path.join(rootDir, 'data', 'reports'),
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || '',
  turnstileSiteKey: process.env.VITE_TURNSTILE_SITE_KEY || process.env.TURNSTILE_SITE_KEY || '',
  openAiApiKey: process.env.OPENAI_API_KEY || '',
  accessCookieName: 'sas_access',
  accessCookieAgeMs: 1000 * 60 * 60 * 8,
  secureCookies: process.env.NODE_ENV === 'production'
};