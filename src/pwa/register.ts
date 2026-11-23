/** Installs the offline worker. Dev stays uncached so reloads pick up the Vite server. */
export function registerServiceWorker(): void {
  if (!import.meta.env.PROD) return;
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    const script = new URL('sw.js', document.baseURI);
    navigator.serviceWorker.register(script, { scope: './' }).catch(() => {
      /* The game still plays online when the worker cannot register. */
    });
  });
}
