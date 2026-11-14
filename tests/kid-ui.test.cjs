require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PLAY_TIPS, tipsOpen, hideTips, TIPS_STORAGE_KEY } = require('../src/ui/PlayTips.ts');
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
  const storage = new Map();
  const box = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) };
  assert.equal(tipsOpen(box), true);
  hideTips(box);
  assert.equal(storage.get(TIPS_STORAGE_KEY), '1');
  assert.equal(tipsOpen(box), false);
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
