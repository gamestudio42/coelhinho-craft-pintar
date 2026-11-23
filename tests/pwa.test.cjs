require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { serviceWorkerSource } = require('../src/pwa/serviceWorkerSource.ts');

const root = join(__dirname, '..');

test('the page links a subpath-relative manifest and registers the worker in production', () => {
  const html = readFileSync(join(root, 'index.html'), 'utf8');
  assert.match(html, /rel="manifest" href="%BASE_URL%manifest\.webmanifest"/);
  assert.match(html, /rel="apple-touch-icon"/);
  const manifest = JSON.parse(readFileSync(join(root, 'public/manifest.webmanifest'), 'utf8'));
  assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons.some((icon) => icon.sizes === '192x192' && icon.src.startsWith('./')));
  assert.ok(manifest.icons.some((icon) => icon.sizes === '512x512'));
  const main = readFileSync(join(root, 'src/main.ts'), 'utf8');
  const register = readFileSync(join(root, 'src/pwa/register.ts'), 'utf8');
  assert.match(main, /registerServiceWorker/);
  assert.match(register, /import\.meta\.env\.PROD/);
  assert.match(register, /new URL\('sw\.js', document\.baseURI\)/);
  assert.match(register, /scope: '\.\/'/);
});

test('the service worker precaches relative urls, serves offline, and drops old caches', () => {
  const source = serviceWorkerSource('abc123', ['index.html', './assets/app.js', './manifest.webmanifest']);
  assert.match(source, /const CACHE = "coelhinho-abc123"/);
  assert.match(source, /"\.\/index\.html"/);
  assert.match(source, /"\.\/assets\/app\.js"/);
  assert.match(source, /cache\.put\('\.\/', index\.clone\(\)\)/);
  assert.match(source, /keys\.filter\(\(key\) => key !== CACHE\)/);
  assert.match(source, /request\.mode === 'navigate'/);
  assert.match(source, /caches\.match\('\.\/index\.html'\)/);
  assert.match(source, /self\.skipWaiting\(\)/);
  assert.match(source, /pathname\.endsWith\('\/sw\.js'\)/);
  assert.doesNotMatch(source, /\/coelhinho-craft-pintar\//);
});
