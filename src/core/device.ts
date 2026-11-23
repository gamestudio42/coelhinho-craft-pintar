/** What the page can see about the screen, without touching WebGL. */
export interface DeviceFacts {
  coarse: boolean;
  hoverNone: boolean;
  /** `(any-pointer: coarse)` — a finger exists even when a mouse is primary. */
  anyCoarse?: boolean;
  ua: string;
  /** Smaller of the viewport width and height, in CSS pixels. */
  shortSide: number;
  /** Larger of the viewport width and height, in CSS pixels. */
  longSide?: number;
  maxTouchPoints?: number;
}

/**
 * Phone and tablet windows the touch layout is written for.
 * A mouse desktop is wider than this on the long side (1280 and up).
 */
export const TOUCH_COPY_SHORT = 820;
export const TOUCH_COPY_LONG = 1200;

/** A finger or a phone. Mouse desktops stay out. */
export function isTouchDevice(facts: DeviceFacts): boolean {
  if (facts.coarse || facts.hoverNone) return true;
  return /Mobi|Android|iPhone|iPod/i.test(facts.ua);
}

/**
 * A phone, not a tablet. Tablets keep the wider preset.
 * An iPhone user agent counts even when the reported screen is the physical size.
 */
export function isPhoneDevice(facts: DeviceFacts): boolean {
  if (/iPad|Tablet/i.test(facts.ua)) return false;
  if (/iPhone|iPod|Android.+Mobile|Mobi/i.test(facts.ua)) return true;
  if (!facts.coarse && !facts.hoverNone) return false;
  return facts.shortSide > 0 && facts.shortSide <= 700;
}

/** On-screen words for a finger. Mouse desktops keep keyboard and mouse words. */
export function usesTouchCopy(facts: DeviceFacts): boolean {
  if (facts.coarse || facts.hoverNone || facts.anyCoarse) return true;
  if (/Mobi|Android|iPhone|iPod|iPad|Tablet/i.test(facts.ua)) return true;
  const longSide = facts.longSide ?? 0;
  if (facts.shortSide > 0 && longSide > 0 && facts.shortSide <= TOUCH_COPY_SHORT && longSide <= TOUCH_COPY_LONG) return true;
  return (facts.maxTouchPoints ?? 0) > 0 && facts.shortSide > 0 && facts.shortSide <= TOUCH_COPY_SHORT;
}

/**
 * On-screen stick and buttons. A resized desktop window keeps the mouse:
 * copy can switch with the viewport, pointer lock does not.
 */
export function usesTouchControls(facts: DeviceFacts): boolean {
  if (facts.coarse || facts.hoverNone || facts.anyCoarse) return true;
  if (/Mobi|Android|iPhone|iPod|iPad|Tablet/i.test(facts.ua)) return true;
  return (facts.maxTouchPoints ?? 0) > 0 && facts.shortSide > 0 && facts.shortSide <= TOUCH_COPY_SHORT;
}

export function readDeviceFacts(): DeviceFacts {
  let coarse = false;
  let hoverNone = false;
  let anyCoarse = false;
  try {
    coarse = window.matchMedia('(pointer: coarse)').matches;
    hoverNone = window.matchMedia('(hover: none)').matches;
    anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
  } catch { /* Tests and very old browsers have no matchMedia. */ }
  const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  const width = typeof window === 'undefined' ? 0 : window.innerWidth || window.screen?.width || 0;
  const height = typeof window === 'undefined' ? 0 : window.innerHeight || window.screen?.height || 0;
  const shortSide = width > 0 && height > 0 ? Math.min(width, height) : Math.max(width, height);
  const longSide = width > 0 && height > 0 ? Math.max(width, height) : shortSide;
  const maxTouchPoints = typeof navigator === 'undefined' ? 0 : navigator.maxTouchPoints || 0;
  return { coarse, hoverNone, anyCoarse, ua, shortSide, longSide, maxTouchPoints };
}
