/** Short on-screen cards for the four things a child does most. */
export const TIPS_STORAGE_KEY = 'coelhinho-tips-hidden';

export interface PlayTip {
  id: string;
  icon: string;
  title: string;
  text: string;
  /** Shown instead of `text` on a touch screen. */
  touch?: string;
}

export const PLAY_TIPS: readonly PlayTip[] = [
  { id: 'build', icon: '🧱', title: 'Construir', text: 'Direito coloca.', touch: 'Toque no tijolo.' },
  { id: 'paint', icon: '🎨', title: 'Pintar', text: 'Toque na cor ou no balde.' },
  { id: 'pick', icon: '🥕', title: 'Cenoura', text: 'Esquerdo pega.', touch: 'Toque na cenoura.' },
  { id: 'feed', icon: '🐰', title: 'Amiguinhos', text: 'Olhe neles e dê a cenoura.' },
];

/** Mouse wording on a desktop, touch wording on a phone or tablet. */
export function tipLine(tip: PlayTip, coarse: boolean): string {
  return coarse && tip.touch ? tip.touch : tip.text;
}

/** First-play line. Touch screens do not mention mouse buttons or keys. */
export function playHint(id: 'path' | 'island' | 'blocks' | 'bed', coarse: boolean): string {
  if (id === 'path') return 'Siga o caminho amarelo até o quadro rosa.';
  if (id === 'island') return coarse ? 'Toque no tijolo para colocar terra e ampliar a ilha.' : 'Use o direito para colocar terra e ampliar a ilha.';
  if (id === 'blocks') return coarse ? 'Abra a pausa para escolher os blocos.' : 'B: escolha blocos. Esc: construir, base e chefões.';
  return coarse ? 'Coloque a cama e toque nela para descansar.' : 'Coloque a cama e clique nela com o botão direito para descansar';
}

export function tipsOpen(storage: { getItem(key: string): string | null } | null): boolean {
  return storage?.getItem(TIPS_STORAGE_KEY) !== '1';
}

export function hideTips(storage: { setItem(key: string, value: string): void }): void {
  storage.setItem(TIPS_STORAGE_KEY, '1');
}

/** Fills the HUD strip. Safe to call again; it replaces the previous cards. */
export function fillPlayTips(list: HTMLElement, coarse = false): void {
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
    title.className = 'play-tip-title';
    title.textContent = tip.title;
    const line = document.createElement('span');
    line.className = 'play-tip-text';
    line.textContent = ` ${tipLine(tip, coarse)}`;
    copy.append(title, line);
    card.append(icon, copy);
    list.append(card);
  }
}

/** Shrinks the tip cards to one button, or opens them again. Close still hides them for good. */
export function foldTips(root: HTMLElement, button: HTMLButtonElement): boolean {
  const folded = root.classList.toggle('is-folded');
  button.textContent = folded ? 'Dicas' : '−';
  button.setAttribute('aria-expanded', String(!folded));
  button.setAttribute('aria-label', folded ? 'Abrir dicas' : 'Recolher dicas');
  return folded;
}
