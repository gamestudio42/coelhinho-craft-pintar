require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const THREE = require('three');
const { Player } = require('../src/player/Player.ts');
const { PlayerController } = require('../src/player/PlayerController.ts');
const { BlockInteraction } = require('../src/player/BlockInteraction.ts');
const { World } = require('../src/world/World.ts');
const { TerrainGenerator } = require('../src/world/terrain/generator.ts');
const { Block, canPaintBlock, nextCarrotStage } = require('../src/world/blocks.ts');
const { carrotPlantCell, growCarrotsNear } = require('../src/world/carrots.ts');
const { PAINT_COLORS } = require('../src/paint/palette.ts');
const { Pet } = require('../src/entities/Pet.ts');

function world() {
  const w = new World(new TerrainGenerator(42, 'oneblock'));
  w.ensureChunk(0, 0);
  return w;
}

function hands(player, w) {
  return new BlockInteraction(player, w, { tileColors: [] }, { burst() {} }, { play() {} }, new THREE.Scene());
}

function lookAt(player, x, y, z) {
  player.position.set(x + 0.5, y - 1.2, z + 3.2);
  player.yaw = 0;
  player.pitch = 0;
}

const click = (button) => ({
  isMouseDown: (b) => b === button,
  wasMousePressed: (b) => b === button,
  isDown: () => false,
  wasPressed: () => false,
});

test('the paint box has many big colors and recolors a whole block', () => {
  assert.ok(PAINT_COLORS.length >= 20);
  const names = new Set(PAINT_COLORS.map((color) => color.name));
  assert.equal(names.size, PAINT_COLORS.length);

  const w = world();
  w.setBlock(4, 80, 4, Block.Stone);
  w.setBlock(5, 80, 4, Block.Bedrock);
  const player = new Player();
  lookAt(player, 4, 80, 4);
  const handsOn = hands(player, w);
  handsOn.paintMode = true;
  handsOn.paintBlock = Block.Red;
  handsOn.update(0.2, click(2), false);
  assert.equal(w.getBlock(4, 80, 4), Block.Red);
  handsOn.update(0.2, click(-1), false);

  lookAt(player, 5, 80, 4);
  handsOn.paintBlock = Block.Blue;
  handsOn.update(0.2, click(2), false);
  assert.equal(w.getBlock(5, 80, 4), Block.Bedrock);
  assert.equal(canPaintBlock(Block.Bedrock), false);
  assert.equal(canPaintBlock(Block.Stone), true);
});

test('carrots can be planted, grown and picked', () => {
  const w = world();
  w.setBlock(4, 80, 4, Block.Dirt);
  assert.deepEqual(carrotPlantCell(w, 4, 80, 4), { x: 4, y: 81, z: 4 });
  const player = new Player();
  player.inventory.add(Block.Carrot, 3);
  player.inventory.select(0);
  lookAt(player, 4, 80, 4);
  const handsOn = hands(player, w);
  handsOn.update(0.2, click(2), false);
  assert.equal(w.getBlock(4, 81, 4), Block.CarrotSprout);
  assert.equal(player.inventory.count(Block.Carrot), 2);

  assert.equal(nextCarrotStage(Block.CarrotSprout), Block.CarrotGrowing);
  assert.equal(growCarrotsNear(w, 4, 81, 4, 2), 1);
  assert.equal(w.getBlock(4, 81, 4), Block.CarrotGrowing);
  assert.equal(growCarrotsNear(w, 4, 81, 4, 2), 1);
  assert.equal(w.getBlock(4, 81, 4), Block.CarrotRipe);
  assert.equal(growCarrotsNear(w, 4, 81, 4, 2), 0);

  lookAt(player, 4, 81, 4);
  handsOn.update(1, click(0), false);
  assert.equal(w.getBlock(4, 81, 4), Block.Air);
  assert.ok(player.inventory.count(Block.Carrot) >= 4);
});

test('the bunny nibbles a carrot and a peaceful fall does not hurt', () => {
  const pet = new Pet({ x: 1, y: 2, z: 3 });
  assert.equal(pet.nibbling, false);
  pet.feed();
  assert.equal(pet.nibbling, true);

  const w = world();
  w.setBlock(5, 40, 5, Block.Stone);
  const input = { isDown: () => false, wasPressed: () => false };
  const calm = new Player();
  calm.peaceful = true;
  calm.position.set(5.5, 80, 5.5);
  calm.body.fallPeak = 80;
  const calmController = new PlayerController(calm, w, new THREE.PerspectiveCamera());
  for (let i = 0; i < 500 && !calm.body.onGround; i++) calmController.update(1 / 60, input);
  assert.equal(calm.body.onGround, true);
  assert.equal(calm.health.current, 20);

  const risky = new Player();
  risky.position.set(5.5, 80, 5.5);
  risky.body.fallPeak = 80;
  const riskyController = new PlayerController(risky, w, new THREE.PerspectiveCamera());
  for (let i = 0; i < 500 && !risky.body.onGround; i++) riskyController.update(1 / 60, input);
  assert.equal(risky.body.onGround, true);
  assert.ok(risky.health.current < 20);
});
