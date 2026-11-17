require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const THREE = require('three');
const { Player, SWING_DURATION } = require('../src/player/Player.ts');
const { ViewModel } = require('../src/render/ViewModel.ts');
const { PlayerModel } = require('../src/render/PlayerModel.ts');

const DT = 1 / 60;
const REST_PITCH = 0.08;

function hammerRoot(camera) {
  return camera.children.find((child) => child.isGroup);
}

function armHammer(model) {
  let hammer = null;
  model.root.traverse((object) => {
    if (object.isMesh && object.material && object.material.vertexColors) hammer = object;
  });
  return hammer;
}

function pose(player) {
  return {
    x: 0,
    y: 0,
    z: 0,
    yaw: 0,
    moving: false,
    speed: 0,
    swing: player.swing,
    swingDuration: SWING_DURATION,
    reducedMotion: false,
  };
}

/** The peaceful frame: mining starts a swing, combat does not run, then the clock advances. */
function mineFrame(player, view, model) {
  player.startSwing();
  player.advanceSwing(DT);
  view.update(DT, player.swing, SWING_DURATION, 0);
  model.update(DT, pose(player));
  model.root.updateMatrixWorld(true);
}

test('mining swings the hammer on every hit, including a peaceful hold', () => {
  const game = fs.readFileSync(path.join(__dirname, '../src/core/Game.ts'), 'utf8');
  const combat = fs.readFileSync(path.join(__dirname, '../src/player/PlayerCombat.ts'), 'utf8');
  const tick = game.indexOf('this.player.advanceSwing(dt)');
  const combatGate = game.indexOf('if (allowCombat) this.combat.update');
  const shown = game.indexOf('this.viewModel.update');
  assert.ok(combatGate !== -1 && tick > combatGate && tick < shown, 'the swing clock runs after mining, not only in combat');
  assert.equal(combat.includes('this.player.swing ='), false);

  const camera = new THREE.PerspectiveCamera();
  const atlas = { texture: new THREE.Texture() };
  const view = new ViewModel(camera, atlas);
  const model = new PlayerModel(atlas);
  const player = new Player();
  player.peaceful = true;
  const root = hammerRoot(camera);
  const hammer = armHammer(model);
  const hand = new THREE.Vector3();

  player.startSwing();
  let struck = false;
  let settled = false;
  for (let frame = 0; frame < 30; frame++) {
    player.advanceSwing(DT);
    view.update(DT, player.swing, SWING_DURATION, 0);
    if (Math.abs(root.rotation.x - REST_PITCH) > 0.5) struck = true;
    if (struck && player.swing === 0 && Math.abs(root.rotation.x - REST_PITCH) < 0.05) settled = true;
  }
  assert.ok(struck, 'one click plays a visible swing');
  assert.ok(settled, 'the hammer returns after the click');

  const peaks = [];
  let raised = false;
  for (let frame = 0; frame < 75; frame++) {
    mineFrame(player, view, model);
    const pitch = Math.abs(root.rotation.x - REST_PITCH);
    if (!raised && pitch > 0.5) {
      raised = true;
      hammer.getWorldPosition(hand);
      peaks.push(hand.y);
    } else if (raised && pitch < 0.15) raised = false;
  }
  assert.ok(peaks.length >= 3, `holding the button swings again, saw ${peaks.length}`);
  assert.ok(peaks.every((height) => Math.abs(height - peaks[0]) < 1e-3));
  const idle = new THREE.Vector3();
  player.swing = 0;
  model.update(DT, pose(player));
  model.root.updateMatrixWorld(true);
  hammer.getWorldPosition(idle);
  assert.ok(Math.abs(peaks[0] - idle.y) > 0.2, 'the third-person arm lifts the hammer');
});
