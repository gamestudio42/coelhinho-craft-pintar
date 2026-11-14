require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { World } = require('../src/world/World.ts');
const { TerrainGenerator } = require('../src/world/terrain/generator.ts');
const { Block, canPaintBlock } = require('../src/world/blocks.ts');
const {
  SECRET,
  VILLAGE,
  GIANT_SECONDS,
  groundY,
  doorCells,
  paintingCell,
  goldenCarrotNearSpawn,
  villageGoldenCarrot,
  toggleSecretDoor,
} = require('../src/world/places.ts');
const { Pet } = require('../src/entities/Pet.ts');
const { IronGolem, Villager } = require('../src/entities/VillageFolk.ts');
const { Player } = require('../src/player/Player.ts');

function adventure() {
  const world = new World(new TerrainGenerator(42, 'adventure'));
  for (let cz = -3; cz <= 1; cz++) {
    for (let cx = 0; cx <= 3; cx++) world.ensureChunk(cx, cz);
  }
  return world;
}

function flat() {
  const world = new World(new TerrainGenerator(1, 'oneblock'));
  world.ensureChunk(0, 0);
  for (let z = 0; z < 16; z++) {
    for (let x = 0; x < 16; x++) world.setBlock(x, 70, z, Block.Grass);
  }
  return world;
}

function context(world, player, dt, elapsed) {
  return {
    dt,
    world,
    player,
    particles: { burst() {} },
    entities: { entities: [] },
    atlas: null,
    sfx: { play() {} },
    elapsed,
  };
}

test('the secret painting opens and closes a stair to a furnished room', () => {
  const world = adventure();
  const floor = groundY(world.generator.surfaceHeight(SECRET.doorX, SECRET.doorZ));
  const picture = paintingCell(floor);
  assert.equal(world.getBlock(picture.x, picture.y, picture.z), Block.Painting);
  assert.equal(canPaintBlock(Block.Painting), false);
  for (const cell of doorCells(floor)) assert.equal(world.getBlock(cell.x, cell.y, cell.z), Block.Planks);

  const carrot = goldenCarrotNearSpawn(floor);
  assert.equal(world.getBlock(carrot.x, carrot.y, carrot.z), Block.GoldenCarrot);
  assert.equal(world.getBlock(14, floor, SECRET.doorZ), Block.Yellow);

  assert.equal(toggleSecretDoor(world, floor), 'open');
  for (const cell of doorCells(floor)) assert.equal(world.getBlock(cell.x, cell.y, cell.z), Block.Air);
  assert.equal(toggleSecretDoor(world, floor), 'shut');
  for (const cell of doorCells(floor)) assert.equal(world.getBlock(cell.x, cell.y, cell.z), Block.Planks);

  const roomY = floor - SECRET.depth;
  const roomX = SECRET.doorX + SECRET.depth;
  assert.equal(world.getBlock(roomX + 1, roomY + 1, SECRET.doorZ - 2), Block.Bed);
  assert.equal(world.getBlock(roomX + 5, roomY + 1, SECRET.doorZ - 2), Block.Chest);
  assert.equal(world.getBlock(roomX + 1, roomY + 2, SECRET.doorZ + 2), Block.Torch);
  assert.equal(world.getBlock(roomX + 3, roomY + 1, SECRET.doorZ + 1), Block.Hay);
  assert.equal(world.getBlock(roomX + 1, roomY + 1, SECRET.doorZ), Block.Air);
});

test('the village has houses and one golden carrot in the square', () => {
  const world = adventure();
  const floor = groundY(world.generator.surfaceHeight(VILLAGE.x, VILLAGE.z));
  assert.equal(world.getBlock(VILLAGE.x - 8, floor + 1, VILLAGE.z - 4), Block.Cobblestone);
  assert.equal(world.getBlock(VILLAGE.x - 6, floor + 1, VILLAGE.z - 4), Block.Bed);
  const carrot = villageGoldenCarrot(floor);
  assert.equal(world.getBlock(carrot.x, carrot.y, carrot.z), Block.GoldenCarrot);
  assert.ok(Math.hypot(VILLAGE.x - 10, VILLAGE.z - 10) > 40);
});

test('a golden carrot makes the bunny huge and then small again', () => {
  const world = flat();
  const player = new Player();
  player.position.set(8, 71, 8);
  const pet = new Pet({ x: 8, y: 71, z: 8 });
  pet.growBig();
  assert.equal(pet.giant, GIANT_SECONDS);
  let elapsed = 0;
  const step = (dt) => {
    elapsed += dt;
    pet.update(context(world, player, dt, elapsed));
  };
  for (let i = 0; i < 8; i++) step(0.25);
  assert.ok(pet.object3D.children[0].scale.x > 2);
  while (pet.giant > 0) step(1);
  assert.equal(pet.justShrunk, true);
  for (let i = 0; i < 4; i++) step(0.5);
  assert.ok(pet.object3D.children[0].scale.x < 1.2);
});

test('the iron golem offers a flower to a villager and neither can be hurt', () => {
  const world = flat();
  const player = new Player();
  const villager = new Villager(8, 71, 8);
  const golem = new IronGolem(8.4, 71, 8);
  golem.friends = [villager];
  golem.giftClock = 0;
  golem.update(context(world, player, 0.2, 1));
  assert.equal(golem.state, 'give');
  assert.ok(villager.cheer > 0);
  assert.equal(villager.health.immune, true);
  assert.equal(golem.health.immune, true);
  villager.health.damage(5);
  golem.health.damage(5);
  assert.equal(villager.health.current, villager.health.max);
  assert.equal(golem.health.current, golem.health.max);
});
