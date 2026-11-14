/** Short on-screen cards for the four things a child does most. */
export const TIPS_STORAGE_KEY = 'coelhinho-tips-hidden';

export interface PlayTip {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export const PLAY_TIPS: readonly PlayTip[] = [
  { id: 'build', icon: '🧱', title: 'Construir', text: 'Direito coloca.' },
  { id: 'paint', icon: '🎨', title: 'Pintar', text: 'Toque na cor ou no balde.' },
  { id: 'pick', icon: '🥕', title: 'Cenoura', text: 'Esquerdo pega.' },
  { id: 'feed', icon: '🐰', title: 'Amiguinhos', text: 'Olhe neles e dê a cenoura.' },
];

export function tipsOpen(storage: { getItem(key: string): string | null } | null): boolean {
  return storage?.getItem(TIPS_STORAGE_KEY) !== '1';
}

export function hideTips(storage: { setItem(key: string, value: string): void }): void {
  storage.setItem(TIPS_STORAGE_KEY, '1');
}

/** Fills the HUD strip. Safe to call again; it replaces the previous cards. */
export function fillPlayTips(list: HTMLElement): void {
  list.replaceChildren();
  for (const tip of PLAY_TIPS) {
    const card = document.createElement('div');
    card.className = 'play-tip';
    card.dataset.tip = tip.id;
    const icon = document.createElement('span');
    icon.className = 'play-tip-icon';
    icon.textContent = tip.icon;
    icon.setAttribute('aria-hidden', 'true');
    const copy = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = tip.title;
    copy.append(title, document.createTextNode(` ${tip.text}`));
    card.append(icon, copy);
    list.append(card);
  }
}
