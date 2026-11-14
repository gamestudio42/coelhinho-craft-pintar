import { defineConfig } from 'vite';

export default defineConfig({
  // A relative base loads at /coelhinho-craft-pintar/ and at
  // /coelhinho-craft-pintar/pr-preview/pr-<number>/.
  base: './',
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: { port: 5173, strictPort: true },
  worker: {
    format: 'es',
  },
  build: {
    target: 'es2022',
  },
});
