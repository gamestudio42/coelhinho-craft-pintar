require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PaintPalette, screenWantsClosedPalette } = require('../src/ui/PaintPalette.ts');

function element() {
  const classes = new Set();
  const listeners = {};
  const node = {
    style: {},
    attrs: {},
    hidden: false,
    children: [],
    classList: {
      toggle(name, force) {
        const on = force === undefined ? !classes.has(name) : Boolean(force);
        if (on) classes.add(name);
        else classes.delete(name);
        return on;
      },
      contains: (name) => classes.has(name),
    },
    setAttribute(name, value) { node.attrs[name] = String(value); },
    getAttribute(name) { return node.attrs[name]; },
    addEventListener(type, fn) { (listeners[type] ||= []).push(fn); },
    append(child) { node.children.push(child); },
    click() {
      const event = { preventDefault() {}, stopPropagation() {} };
      for (const fn of listeners.click || []) fn(event);
    },
  };
  return node;
}

function palette(coarse) {
  const previousDocument = global.document;
  const previousMatch = globalThis.matchMedia;
  global.document = { createElement: () => element() };
  globalThis.matchMedia = () => ({ matches: coarse });
  const parts = {
    colors: element(),
    paint: element(),
    build: element(),
    bucket: element(),
    dock: element(),
    sheet: element(),
    toggle: element(),
    close: element(),
    backdrop: element(),
  };
  const paletteDock = new PaintPalette(
    parts.colors, parts.paint, parts.build, parts.bucket, parts.dock, parts.sheet, parts.toggle, parts.close, parts.backdrop,
  );
  global.document = previousDocument;
  globalThis.matchMedia = previousMatch;
  return { palette: paletteDock, ...parts };
}

test('a phone starts with the color tray closed and can open and close it', () => {
  const previous = globalThis.matchMedia;
  globalThis.matchMedia = () => ({ matches: true });
  assert.equal(screenWantsClosedPalette(), true);
  globalThis.matchMedia = () => ({ matches: false });
  assert.equal(screenWantsClosedPalette(), false);
  globalThis.matchMedia = previous;

  const { palette: dock, sheet, toggle, close, backdrop, dock: panel } = palette(true);
  assert.equal(dock.open, false);
  assert.equal(sheet.hidden, true);
  assert.equal(toggle.attrs['aria-expanded'], 'false');
  assert.equal(backdrop.hidden, true);
  assert.equal(panel.classList.contains('is-open'), false);

  toggle.click();
  assert.equal(dock.open, true);
  assert.equal(sheet.hidden, false);
  assert.equal(toggle.attrs['aria-expanded'], 'true');
  assert.equal(backdrop.hidden, false);
  assert.equal(panel.classList.contains('is-open'), true);

  close.click();
  assert.equal(dock.open, false);
  assert.equal(sheet.hidden, true);

  toggle.click();
  backdrop.click();
  assert.equal(dock.open, false);
  assert.equal(backdrop.classList.contains('hidden'), true);

  dock.setOpen(true);
  assert.equal(sheet.hidden, false);
  dock.setOpen(false);
  assert.equal(dock.open, false);
});

test('a wide screen keeps the tray open, and choosing paint opens a closed tray', () => {
  const phone = palette(true);
  phone.palette.setMode(true);
  assert.equal(phone.palette.mode, true);
  assert.equal(phone.palette.open, true);
  assert.equal(phone.sheet.hidden, false);

  const desk = palette(false);
  assert.equal(desk.palette.open, true);
  assert.equal(desk.sheet.hidden, false);
  desk.palette.setOpen(false);
  desk.palette.setMode(false);
  assert.equal(desk.palette.open, false, 'leaving paint does not pop the tray back open');
  desk.palette.setMode(true);
  assert.equal(desk.palette.open, true);

  desk.bucket.click();
  assert.equal(desk.palette.bucket, true);
  assert.equal(desk.palette.mode, true);
  desk.paint.click();
  assert.equal(desk.palette.bucket, false);
  assert.equal(desk.palette.mode, true);
  desk.build.click();
  assert.equal(desk.palette.mode, false);
});
