require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  createHammerGeometry,
  createBoxHammerGeometry,
  installHammerModel,
  HAMMER_GRIP_Y,
} = require('../src/render/HammerModel.ts');
const { HammerTier } = require('../src/player/Hammer.ts');

function fileBuffer(name) {
  const bytes = fs.readFileSync(path.join(__dirname, '../public/models', name));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function gemVertices(geometry, gem) {
  const color = geometry.getAttribute('color');
  const position = geometry.getAttribute('position');
  let count = 0;
  for (let i = 0; i < color.count; i++) {
    if (position.getZ(i) < 0.15) continue;
    const red = color.getX(i);
    const green = color.getY(i);
    const blue = color.getZ(i);
    const iron = red < 0.08 && green > 0.45 && blue > 0.38 && blue > green * 0.75;
    const gold = red < 0.1 && green > 0.6 && blue > 0.22 && blue < 0.4;
    if (gem === 'iron' ? iron : gold) count++;
  }
  return count;
}

test('the blender hammer is one mesh, keeps the grip, and falls back when the file is bad', () => {
  assert.equal(installHammerModel(HammerTier.Wood, new ArrayBuffer(8)), false);
  assert.equal(installHammerModel(HammerTier.Wood, fileBuffer('hammer-wood.glb')), true);
  assert.equal(installHammerModel(HammerTier.Iron, fileBuffer('hammer-iron.glb')), true);
  assert.equal(installHammerModel(HammerTier.Gold, fileBuffer('hammer-gold.glb')), true);

  const wood = createHammerGeometry(HammerTier.Wood, { glove: false });
  const iron = createHammerGeometry(HammerTier.Iron, { glove: false });
  const gold = createHammerGeometry(HammerTier.Gold, { glove: false });
  const gloved = createHammerGeometry(HammerTier.Wood);
  const gripped = createHammerGeometry(HammerTier.Wood, { glove: false, gripAtOrigin: true });

  for (const geometry of [wood, iron, gold]) {
    assert.ok(geometry.getIndex());
    assert.equal(geometry.groups.length, 0);
    assert.equal(geometry.getAttribute('color').itemSize, 3);
    geometry.computeBoundingBox();
  }

  assert.ok(gloved.getAttribute('position').count > wood.getAttribute('position').count);
  const box = createBoxHammerGeometry(HammerTier.Wood, { glove: false });
  assert.notEqual(wood.getAttribute('position').count, box.getAttribute('position').count);
  box.dispose();
  assert.equal(gemVertices(wood, 'iron') + gemVertices(wood, 'gold'), 0);
  assert.ok(gemVertices(iron, 'iron') > 0);
  assert.equal(gemVertices(iron, 'gold'), 0);
  assert.ok(gemVertices(gold, 'gold') > 0);
  assert.equal(gemVertices(gold, 'iron'), 0);

  wood.computeBoundingBox();
  gripped.computeBoundingBox();
  assert.ok(Math.abs(gripped.boundingBox.min.y - (wood.boundingBox.min.y - HAMMER_GRIP_Y)) < 1e-4);
  assert.ok(gripped.boundingBox.min.y < 0);
  assert.ok(gripped.boundingBox.max.y > 0.5);

  const started = performance.now();
  for (let i = 0; i < 12; i++) {
    const swapped = createHammerGeometry(i % 2 === 0 ? HammerTier.Iron : HammerTier.Gold, { glove: false });
    swapped.dispose();
  }
  assert.ok(performance.now() - started < 40, 'tier swaps stay on the parsed mesh');

  for (const geometry of [wood, iron, gold, gloved, gripped]) geometry.dispose();
});
