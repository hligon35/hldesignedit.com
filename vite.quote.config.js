import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'quote-app',
  base: './',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'quote-dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});