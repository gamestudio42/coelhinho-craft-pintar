import type { Input } from '../core/Input.ts';

/** Stick deflection. Up on the screen is forward. */
export function stickAxes(dx: number, dy: number, radius = 54): { forward: number; strafe: number } {
  const scale = Math.hypot(dx, dy);
  if (scale < 10) return { forward: 0, strafe: 0 };
  const power = Math.min(1, scale / radius);
  return { strafe: (dx / scale) * power, forward: (-dy / scale) * power };
}

/** Digital keys the walker already understands. */
export function stickKeys(axes: { forward: number; strafe: number }): string[] {
  const keys: string[] = [];
  if (axes.forward > 0.35) keys.push('KeyW');
  if (axes.forward < -0.35) keys.push('KeyS');
  if (axes.strafe > 0.35) keys.push('KeyD');
  if (axes.strafe < -0.35) keys.push('KeyA');
  return keys;
}

/** On-screen move stick plus two big buttons. Mouse play never needs them. */
export function bindTouchControls(input: Input, root: ParentNode): void {
  const stick = root.querySelector('#touch-stick');
  const mine = root.querySelector('#touch-mine');
  const use = root.querySelector('#touch-use');
  if (stick instanceof HTMLElement) bindStick(input, stick);
  if (mine instanceof HTMLButtonElement) bindMouseButton(input, mine, 0);
  if (use instanceof HTMLButtonElement) bindMouseButton(input, use, 2);
}

function bindStick(input: Input, stick: HTMLElement): void {
  let origin: { x: number; y: number } | null = null;
  stick.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    stick.setPointerCapture(event.pointerId);
    origin = { x: event.clientX, y: event.clientY };
    input.setStick([]);
  });
  stick.addEventListener('pointermove', (event) => {
    if (!origin) return;
    input.setStick(stickKeys(stickAxes(event.clientX - origin.x, event.clientY - origin.y)));
  });
  const end = (): void => {
    origin = null;
    input.setStick([]);
  };
  stick.addEventListener('pointerup', end);
  stick.addEventListener('pointercancel', end);
}

function bindMouseButton(input: Input, button: HTMLButtonElement, mouseButton: number): void {
  const down = (event: PointerEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    button.setPointerCapture(event.pointerId);
    input.setMouseButton(mouseButton, true);
  };
  const up = (): void => input.setMouseButton(mouseButton, false);
  button.addEventListener('pointerdown', down);
  button.addEventListener('pointerup', up);
  button.addEventListener('pointercancel', up);
}
