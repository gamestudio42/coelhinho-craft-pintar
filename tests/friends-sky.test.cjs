require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { Block } = require('../src/world/blocks.ts');
const { paintBucket, PAINT_FILL_LIMIT } = require('../src/paint/bucket.ts');
const { SkyCycle, CLEAR_SECONDS, RAIN_SECONDS, RAINBOW_SECONDS, CARROT_GROW_SECONDS, RAIN_CARROT_GROW_SECONDS } = require('../src/world/weather.ts');
const { Pet, petName } = require('../src/entities/Pet.ts');

function blocks(entries) {
  const map = new Map(entries);
  return (x, y, z) => map.get(`${x},${y},${z}`) ?? Block.Air;
}

test('the paint bucket fills connected blocks of one color and then stops', () => {
  const row = blocks([
    ['0,2,0', Block.White],
    ['1,2,0', Block.White],
    ['2,2,0', Block.White],
    ['3,2,0', Block.Red],
    ['2,3,0', Block.White],
  ]);
  const filled = paintBucket(row, 0, 2, 0, Block.Blue);
  assert.deepEqual(filled.map((cell) => `${cell.x},${cell.y},${cell.z}`).sort(), ['0,2,0', '1,2,0', '2,2,0', '2,3,0']);
  assert.equal(paintBucket(row, 0, 2, 0, Block.White).length, 0, 'the same color is already done');
  assert.equal(paintBucket(row, 3, 2, 0, Block.Red).length, 0);
  assert.equal(paintBucket(blocks([['0,1,0', Block.Bedrock]]), 0, 1, 0, Block.Red).length, 0);
  assert.equal(paintBucket(blocks([['0,1,0', Block.Water]]), 0, 1, 0, Block.Red).length, 0);

  const wall = [];
  for (let i = 0; i < PAINT_FILL_LIMIT + 20; i++) wall.push([`${i},4,0`, Block.Stone]);
  const capped = paintBucket(blocks(wall), 0, 4, 0, Block.Yellow);
  assert.equal(capped.length, PAINT_FILL_LIMIT);
});

test('rain follows a quiet sky and makes carrots grow sooner, then a rainbow', () => {
  const sky = new SkyCycle();
  assert.equal(sky.mood, 'clear');
  assert.equal(sky.carrotEvery(), CARROT_GROW_SECONDS);
  sky.step(CLEAR_SECONDS - 0.2);
  assert.equal(sky.mood, 'clear');
  sky.step(0.2);
  assert.equal(sky.mood, 'rain');
  assert.equal(sky.raining, true);
  assert.equal(sky.carrotEvery(), RAIN_CARROT_GROW_SECONDS);
  sky.step(RAIN_SECONDS);
  assert.equal(sky.mood, 'rainbow');
  assert.equal(sky.raining, false);
  assert.equal(sky.carrotEvery(), CARROT_GROW_SECONDS);
  sky.step(RAINBOW_SECONDS);
  assert.equal(sky.mood, 'clear');
});

test('the kitten and the puppy can be fed and cannot be hurt', () => {
  const bunny = new Pet({ x: 0, y: 1, z: 0 });
  const cat = new Pet({ x: 1, y: 1, z: 0 }, 'cat');
  const dog = new Pet({ x: 2, y: 1, z: 0 }, 'dog');
  assert.equal(bunny.kind, 'bunny');
  assert.equal(petName('cat'), 'gatinho');
  assert.equal(petName('dog'), 'cachorrinho');
  assert.equal(cat.health.immune, true);
  assert.equal(dog.health.immune, true);
  cat.feed();
  assert.equal(cat.nibbling, true);
  dog.growBig();
  assert.ok(dog.giant > 0);
});
