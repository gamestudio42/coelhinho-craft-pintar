import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { serviceWorkerSource } from './src/pwa/serviceWorkerSource.ts';

function walkFiles(dir: string): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) found.push(...walkFiles(abs));
    else found.push(abs);
  }
  return found;
}

/** Writes sw.js with a cache name that changes when the built files change. */
function offlineWorker(): Plugin {
  return {
    name: 'coelhinho-offline-worker',
    apply: 'build',
    closeBundle() {
      const dist = join(process.cwd(), 'dist');
      const files = walkFiles(dist).filter((file) => !file.endsWith(`${join('dist', 'sw.js')}`) && !file.endsWith('/sw.js'));
      const hash = createHash('sha256');
      const urls: string[] = [];
      for (const file of files.sort()) {
        const rel = relative(dist, file).split('\\').join('/');
        urls.push(`./${rel}`);
        hash.update(rel);
        hash.update(readFileSync(file));
      }
      if (!urls.includes('./index.html')) urls.push('./index.html');
      const version = hash.digest('hex').slice(0, 12);
      writeFileSync(join(dist, 'sw.js'), serviceWorkerSource(version, urls));
    },
  };
}

export default defineConfig({
  plugins: [offlineWorker()],
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
