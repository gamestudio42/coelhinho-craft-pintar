require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PLAY_TIPS, POINTER_WORDS, foldTips, playHint, tipLine, tipsOpen, hideTips, TIPS_STORAGE_KEY } = require('../src/ui/PlayTips.ts');
const { usesTouchCopy, usesTouchControls } = require('../src/core/device.ts');
const { cueForTouch } = require('../src/ui/CombatCue.ts');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { stickAxes, stickKeys } = require('../src/ui/TouchControls.ts');
const { Input } = require('../src/core/Input.ts');
const { Game } = require('../src/core/Game.ts');

test('the four play tips name build, paint, carrot and the bunny', () => {
  assert.deepEqual(PLAY_TIPS.map((tip) => tip.id), ['build', 'paint', 'pick', 'feed']);
  for (const tip of PLAY_TIPS) {
    assert.ok(tip.icon.length > 0);
    assert.ok(tip.title.length > 0 && tip.title.length < 16);
    assert.ok(tip.text.length > 0 && tip.text.length < 40);
  }
  assert.equal(tipLine(PLAY_TIPS[0], false), 'Direito coloca.');
  assert.equal(tipLine(PLAY_TIPS[0], true), 'Toque no tijolo.');
  assert.equal(tipLine(PLAY_TIPS[1], false), 'Toque na cor ou no balde.');
  assert.equal(tipLine(PLAY_TIPS[2], true), 'Toque na cenoura.');
  assert.equal(playHint('path', true), 'Siga o caminho amarelo até o quadro rosa.');
  assert.equal(playHint('blocks', false).includes('Esc'), true);
  assert.equal(playHint('blocks', true).includes('Esc'), false);
  for (const tip of PLAY_TIPS) assert.equal(POINTER_WORDS.test(tipLine(tip, true)), false, tip.id);
  for (const id of ['path', 'island', 'blocks', 'bed']) assert.equal(POINTER_WORDS.test(playHint(id, true)), false, id);
  const touchCue = cueForTouch({ icon: '🧱', key: 'Direito', text: 'Colocar · esquerdo remove', kind: 'build' });
  assert.equal(touchCue.key, '');
  assert.equal(touchCue.text.includes('esquerdo'), false);
  const storage = new Map();
  const box = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) };
  assert.equal(tipsOpen(box), true);
  hideTips(box);
  assert.equal(storage.get(TIPS_STORAGE_KEY), '1');
  assert.equal(tipsOpen(box), false);
});

test('tip cards fold down to one button and open again', () => {
  let folded = false;
  const root = { classList: { toggle(name) { assert.equal(name, 'is-folded'); folded = !folded; return folded; } } };
  const attrs = {};
  const button = { textContent: '−', setAttribute(name, value) { attrs[name] = value; } };
  assert.equal(foldTips(root, button), true);
  assert.equal(button.textContent, 'Dicas');
  assert.equal(attrs['aria-expanded'], 'false');
  assert.equal(foldTips(root, button), false);
  assert.equal(button.textContent, '−');
  assert.equal(attrs['aria-label'], 'Recolher dicas');
});

test('phone targets and the shortcut line stay clear of the palette button', () => {
  const css = readFileSync(join(__dirname, '../src/styles.css'), 'utf8');
  assert.match(css, /\.studio-mark img \{\s*display: block;\s*width: 44px;\s*height: 44px;/);
  assert.match(css, /\.studio-mark-play img \{\s*width: 44px;\s*height: 44px;/);
  assert.match(css, /\.play-extras \.menu-quiet \{[^}]*\n\s*height: 44px;/);
  assert.match(css, /#hint \{\s*top: 132px;/);
  assert.match(css, /#play-tips \{\s*top: 8px;\s*left: 96px;/);
  assert.match(css, /#play-help, #flight-status \{ top: 84px; left: 16px;/);
  assert.match(css, /#play-tips \{ top: 8px; left: 80px;/);
  assert.doesNotMatch(css, /#hint \{ bottom: 312px;/);
  assert.doesNotMatch(css, /max-width: 400px\) and \(min-height: 640px\)/);
});

test('handheld windows use touch words and a mouse desktop does not', () => {
  const mouse = { coarse: false, hoverNone: false, anyCoarse: false, ua: 'Mozilla/5.0 (X11; Linux x86_64)', maxTouchPoints: 0 };
  assert.equal(usesTouchCopy({ ...mouse, shortSide: 1080, longSide: 1920 }), false);
  assert.equal(usesTouchControls({ ...mouse, shortSide: 1080, longSide: 1920 }), false);
  assert.equal(usesTouchCopy({ ...mouse, shortSide: 800, longSide: 1280 }), false);
  assert.equal(usesTouchControls({ ...mouse, shortSide: 390, longSide: 844, maxTouchPoints: 1 }), true);
  assert.equal(usesTouchControls({ ...mouse, shortSide: 1080, longSide: 1920, maxTouchPoints: 10 }), false);
  const sizes = [[360, 740], [412, 915], [915, 412], [820, 1180], [1180, 820]];
  for (const [width, height] of sizes) {
    const facts = { ...mouse, shortSide: Math.min(width, height), longSide: Math.max(width, height) };
    assert.equal(usesTouchCopy(facts), true, `${width}x${height}`);
    assert.equal(usesTouchControls(facts), false, `${width}x${height} keeps the mouse`);
  }
  assert.equal(usesTouchCopy({ ...mouse, coarse: true, shortSide: 1400, longSide: 1900 }), true);
  assert.equal(usesTouchControls({ ...mouse, hoverNone: true, shortSide: 1400, longSide: 1900 }), true);
});

test('the touch stick points forward and to the side, and a small nudge does nothing', () => {
  assert.deepEqual(stickKeys(stickAxes(0, 0)), []);
  assert.deepEqual(stickKeys(stickAxes(4, 4)), []);
  assert.deepEqual(stickKeys(stickAxes(0, -40)), ['KeyW']);
  assert.deepEqual(stickKeys(stickAxes(0, 40)), ['KeyS']);
  assert.deepEqual(stickKeys(stickAxes(40, 0)), ['KeyD']);
  assert.deepEqual(stickKeys(stickAxes(-40, -40)), ['KeyW', 'KeyA']);
});

test('touch buttons count as mouse buttons without pointer lock', () => {
  const oldW = global.window;
  const oldD = global.document;
  global.window = new EventTarget();
  global.document = new EventTarget();
  const canvas = new EventTarget();
  canvas.requestPointerLock = () => Promise.resolve();
  const input = new Input(canvas);
  input.setMouseButton(2, true);
  assert.equal(input.wasMousePressed(2), true);
  assert.equal(input.isMouseDown(2), true);
  input.setStick(['KeyW', 'KeyA']);
  assert.equal(input.isDown('KeyW'), true);
  assert.equal(input.isDown('KeyA'), true);
  input.setStick([]);
  assert.equal(input.isDown('KeyW'), false);
  input.setMouseButton(2, false);
  assert.equal(input.isMouseDown(2), false);
  global.window = oldW;
  global.document = oldD;
});

test('a peaceful pause offers the child choices and keeps boss tools for a fight', () => {
  const g = Object.create(Game.prototype);
  const labels = [];
  g.player = { peaceful: true, creative: false };
  g.petFollowing = true;
  g.practice = null;
  g.controller = { view: 0 };
  g.arena = { active: false };
  g.ruin = { active: false };
  g.grove = { active: false };
  g.overlay = { addAction(label) { labels.push(label); } };
  g.addPlayActions();
  assert.deepEqual(labels, ['Blocos', 'Casa', 'Junto', 'Gatinho', 'Cachorrinho', 'Ajuda', 'Som', 'Para adultos']);

  labels.length = 0;
  g.arena.active = true;
  g.addPlayActions();
  assert.ok(labels.includes('Sair da batalha'));
  assert.equal(labels.includes('Para adultos'), false);
});
