/** What the page can see about the screen, without touching WebGL. */
export interface DeviceFacts {
  coarse: boolean;
  hoverNone: boolean;
  ua: string;
  /** Smaller of the viewport width and height, in CSS pixels. */
  shortSide: number;
}

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

export function readDeviceFacts(): DeviceFacts {
  let coarse = false;
  let hoverNone = false;
  try {
    coarse = window.matchMedia('(pointer: coarse)').matches;
    hoverNone = window.matchMedia('(hover: none)').matches;
  } catch { /* Tests and very old browsers have no matchMedia. */ }
  const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  const width = typeof window === 'undefined' ? 0 : window.innerWidth || window.screen?.width || 0;
  const height = typeof window === 'undefined' ? 0 : window.innerHeight || window.screen?.height || 0;
  const shortSide = width > 0 && height > 0 ? Math.min(width, height) : Math.max(width, height);
  return { coarse, hoverNone, ua, shortSide };
}
