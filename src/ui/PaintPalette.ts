import { Block } from '../world/blocks.ts';
import { PAINT_COLORS } from '../paint/palette.ts';

/** Phones and narrow windows start with the color tray closed. */
export function screenWantsClosedPalette(): boolean {
  const query = '(max-width: 900px), (pointer: coarse)';
  const match = globalThis.matchMedia?.(query);
  return Boolean(match?.matches);
}

export interface PaintDockParts {
  dock: { classList: { toggle(name: string, force?: boolean): boolean } };
  sheet: { hidden: boolean };
  toggle: { setAttribute(name: string, value: string): void };
  backdrop: { hidden: boolean; classList: { toggle(name: string, force?: boolean): boolean } };
}

/** Shows or hides the color tray without touching the build/paint mode. */
export function syncPaintDock(open: boolean, parts: PaintDockParts): void {
  parts.dock.classList.toggle('is-open', open);
  parts.sheet.hidden = !open;
  parts.toggle.setAttribute('aria-expanded', String(open));
  parts.backdrop.hidden = !open;
  parts.backdrop.classList.toggle('hidden', !open);
}

/** Big color buttons. The tray can close so it never sits on the touch controls. */
export class PaintPalette {
  mode = false;
  /** Paint a connected patch instead of one block. */
  bucket = false;
  color: Block = Block.Red;
  /** Color tray visibility. Separate from build versus paint. */
  open = false;
  onChange: (() => void) | null = null;

  private readonly buttons = new Map<Block, HTMLButtonElement>();

  constructor(
    colors: HTMLElement,
    private readonly paintButton: HTMLButtonElement,
    private readonly buildButton: HTMLButtonElement,
    private readonly bucketButton: HTMLButtonElement,
    private readonly dock: HTMLElement,
    private readonly sheet: HTMLElement,
    private readonly toggleButton: HTMLButtonElement,
    closeButton: HTMLButtonElement,
    private readonly backdrop: HTMLElement,
  ) {
    for (const swatch of PAINT_COLORS) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'paint-color';
      button.style.background = swatch.hex;
      button.setAttribute('aria-label', swatch.name);
      button.title = swatch.name;
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        this.color = swatch.block;
        this.mode = true;
        this.refresh();
        this.onChange?.();
      });
      this.buttons.set(swatch.block, button);
      colors.append(button);
    }

    paintButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this.mode = true;
      this.bucket = false;
      this.refresh();
      this.onChange?.();
    });
    buildButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this.mode = false;
      this.bucket = false;
      this.refresh();
      this.onChange?.();
    });
    bucketButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this.bucket = !this.bucket;
      if (this.bucket) this.mode = true;
      this.refresh();
      this.onChange?.();
    });
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(!this.open);
    });
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(false);
    });
    backdrop.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(false);
    });
    this.open = !screenWantsClosedPalette();
    this.refresh();
  }

  static fromDocument(): PaintPalette {
    const colors = document.getElementById('paint-colors');
    const paintButton = document.getElementById('mode-paint');
    const buildButton = document.getElementById('mode-build');
    const bucketButton = document.getElementById('mode-bucket');
    const dock = document.getElementById('paint-dock');
    const sheet = document.getElementById('paint-sheet');
    const toggleButton = document.getElementById('paint-toggle');
    const closeButton = document.getElementById('paint-close');
    const backdrop = document.getElementById('paint-backdrop');
    if (!(colors instanceof HTMLElement) || !(paintButton instanceof HTMLButtonElement) || !(buildButton instanceof HTMLButtonElement)
      || !(bucketButton instanceof HTMLButtonElement)
      || !(dock instanceof HTMLElement) || !(sheet instanceof HTMLElement) || !(toggleButton instanceof HTMLButtonElement)
      || !(closeButton instanceof HTMLButtonElement) || !(backdrop instanceof HTMLElement)) {
      throw new Error('Missing paint palette');
    }
    return new PaintPalette(colors, paintButton, buildButton, bucketButton, dock, sheet, toggleButton, closeButton, backdrop);
  }

  setMode(paint: boolean): void {
    this.mode = paint;
    if (!paint) this.bucket = false;
    if (paint) this.open = true;
    this.refresh();
  }

  setOpen(open: boolean): void {
    this.open = open;
    this.refresh();
  }

  private refresh(): void {
    this.paintButton.setAttribute('aria-pressed', String(this.mode));
    this.buildButton.setAttribute('aria-pressed', String(!this.mode));
    this.paintButton.classList.toggle('is-on', this.mode && !this.bucket);
    this.buildButton.classList.toggle('is-on', !this.mode);
    this.bucketButton.setAttribute('aria-pressed', String(this.bucket));
    this.bucketButton.classList.toggle('is-on', this.bucket);
    for (const [block, button] of this.buttons) {
      button.setAttribute('aria-pressed', String(this.mode && block === this.color));
      button.classList.toggle('is-on', this.mode && block === this.color);
    }
    syncPaintDock(this.open, {
      dock: this.dock,
      sheet: this.sheet,
      toggle: this.toggleButton,
      backdrop: this.backdrop,
    });
  }
}
