require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { qualityFor, explicitQuality } = require('../src/core/Settings.ts');
const { isPhoneDevice, isTouchDevice } = require('../src/core/device.ts');
const { idleChunkBudget, spawnColumns } = require('../src/world/spawnArea.ts');
const { World } = require('../src/world/World.ts');
const { TerrainGenerator } = require('../src/world/terrain/generator.ts');
const { isSolid } = require('../src/world/blocks.ts');

const phone = { coarse: true, hoverNone: true, ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)', shortSide: 390 };
const tablet = { coarse: true, hoverNone: true, ua: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)', shortSide: 820 };
const desktop = { coarse: false, hoverNone: false, ua: 'Mozilla/5.0 (X11; Linux x86_64)', shortSide: 1400 };

test('touch screens skip MSAA, and only a phone starts on the light preset', () => {
  assert.equal(isTouchDevice(phone), true);
  assert.equal(isTouchDevice(tablet), true);
  assert.equal(isTouchDevice(desktop), false);
  assert.equal(isPhoneDevice(phone), true);
  assert.equal(isPhoneDevice(tablet), false);
  assert.equal(isPhoneDevice(desktop), false);

  assert.equal(qualityFor(undefined, true), 'light');
  assert.equal(qualityFor(undefined, false), 'balanced');
  assert.equal(qualityFor('balanced', true), 'balanced');
  assert.equal(qualityFor('high', true), 'high');
  assert.equal(qualityFor('light', false), 'light');
  assert.equal(explicitQuality('unknown'), null);
  assert.equal(qualityFor('unknown', true), 'light');
});

test('JOGAR generates the ground under the player and leaves the distance for later', () => {
  const feet = spawnColumns(10.5, 10.5);
  assert.deepEqual(feet.mesh, [[0, 0]]);
  assert.equal(feet.generate.length, 9);
  assert.ok(feet.generate.every(([cx, cz]) => Math.abs(cx) <= 1 && Math.abs(cz) <= 1));

  const border = spawnColumns(15.9, 8.2);
  const meshed = new Set(border.mesh.map(([cx, cz]) => `${cx},${cz}`));
  assert.ok(meshed.has('0,0') && meshed.has('1,0'), 'a foot on the border covers both columns');
  assert.ok(border.generate.length < 25, 'the click no longer builds the old 5 by 5 disc');
  for (const [cx, cz] of border.mesh) {
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      assert.ok(border.generate.some(([gx, gz]) => gx === cx + dx && gz === cz + dz));
    }
  }

  const world = new World(new TerrainGenerator(42, 'adventure'));
  for (const [cx, cz] of feet.generate) world.ensureChunk(cx, cz);
  const ground = world.surfaceY(10, 10);
  assert.ok(ground > 1, 'the spawn column has a surface');
  assert.equal(isSolid(world.getBlock(10, ground, 10)), true);
  assert.equal(isSolid(world.getBlock(10, ground + 1, 10)), false, 'the block at the feet is open');
  assert.equal(world.getChunk(4, 0), undefined, 'a far column waits for the stream');

  assert.equal(idleChunkBudget(3, false), 0);
  assert.equal(idleChunkBudget(6, false), 1);
  assert.equal(idleChunkBudget(14, false), 2);
  assert.equal(idleChunkBudget(0, true), 1);
});
