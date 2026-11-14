import { Block } from '../world/blocks.ts';
import { PAINT_COLORS } from '../paint/palette.ts';

/** Big color buttons. Painting recolors a whole block; building stays available. */
export class PaintPalette {
  mode = false;
  color: Block = Block.Red;
  onChange: (() => void) | null = null;

  private readonly buttons = new Map<Block, HTMLButtonElement>();

  constructor(
    colors: HTMLElement,
    private readonly paintButton: HTMLButtonElement,
    private readonly buildButton: HTMLButtonElement,
  ) {
    for (const swatch of PAINT_COLORS) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'paint-color';
      button.style.background = swatch.hex;
      button.setAttribute('aria-label', swatch.name);
      button.title = swatch.name;
      button.addEventListener('click', () => {
        this.color = swatch.block;
        this.mode = true;
        this.refresh();
        this.onChange?.();
      });
      this.buttons.set(swatch.block, button);
      colors.append(button);
    }

    paintButton.addEventListener('click', () => {
      this.mode = true;
      this.refresh();
      this.onChange?.();
    });
    buildButton.addEventListener('click', () => {
      this.mode = false;
      this.refresh();
      this.onChange?.();
    });
    this.refresh();
  }

  static fromDocument(): PaintPalette {
    const colors = document.getElementById('paint-colors');
    const paintButton = document.getElementById('mode-paint');
    const buildButton = document.getElementById('mode-build');
    if (!(colors instanceof HTMLElement) || !(paintButton instanceof HTMLButtonElement) || !(buildButton instanceof HTMLButtonElement)) {
      throw new Error('Missing paint palette');
    }
    return new PaintPalette(colors, paintButton, buildButton);
  }

  setMode(paint: boolean): void {
    this.mode = paint;
    this.refresh();
  }

  private refresh(): void {
    this.paintButton.setAttribute('aria-pressed', String(this.mode));
    this.buildButton.setAttribute('aria-pressed', String(!this.mode));
    this.paintButton.classList.toggle('is-on', this.mode);
    this.buildButton.classList.toggle('is-on', !this.mode);
    for (const [block, button] of this.buttons) {
      button.setAttribute('aria-pressed', String(this.mode && block === this.color));
      button.classList.toggle('is-on', this.mode && block === this.color);
    }
  }
}
