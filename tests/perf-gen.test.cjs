require('./register.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const THREE = require('three');
const { hash3 } = require('../src/core/math.ts');
const { AdventureGenerator } = require('../src/world/terrain/adventure.ts');
const { Chunk } = require('../src/world/Chunk.ts');
const { Block } = require('../src/world/blocks.ts');
const { buildSectionMesh, volumeIndex, VOLUME_LENGTH } = require('../src/world/meshing/mesher.ts');
const { createTerrainMaterial } = require('../src/render/materials.ts');
const { paintBlockAtlas } = require('../src/render/atlas.ts');
const { Tile, ATLAS_SIZE_PX, ATLAS_TILE_PX, ATLAS_TILES_PER_ROW } = require('../src/world/blocks.ts');

const ROCK = new Set([Block.Stone, Block.CoalOre, Block.IronOre, Block.GoldOre, Block.CrystalOre, Block.Gravel]);

function terrainHash(seed, cx, cz) {
  const generator = new AdventureGenerator(seed);
  const chunk = new Chunk(cx, cz);
  generator.generate(chunk);
  let hash = 0;
  for (let z = 0; z < 16; z += 5) {
    for (let x = 0; x < 16; x += 5) {
      for (let y = 0; y < 128; y++) {
        const id = chunk.get(x, y, z);
        const code = ROCK.has(id) ? 1 : id + 2;
        hash = Math.imul(hash, 33) ^ code;
      }
    }
  }
  return hash >>> 0;
}

test('the same seed keeps the same hills, caves and structures', () => {
  assert.equal(hash3(1, 2, 3, 42), 0.4692740202881396);
  assert.equal(new AdventureGenerator(42).surfaceHeight(0, 0), 64);
  assert.equal(new AdventureGenerator(42).surfaceHeight(10, 10), 64);
  assert.equal(new AdventureGenerator(42).surfaceHeight(-20, 7), 61);
  assert.equal(new AdventureGenerator(42).surfaceHeight(100, -40), 65);
  assert.equal(terrainHash(42, 0, 0), 3124839283);
  assert.equal(terrainHash(42, 2, -1), 416602966);
  assert.equal(terrainHash(7, 0, 0), 3205218261);
  assert.equal(terrainHash(7, 2, -1), 361583148);

  const first = new AdventureGenerator(42);
  const second = new AdventureGenerator(42);
  const a = new Chunk(1, -2);
  const b = new Chunk(1, -2);
  first.generate(a);
  second.generate(b);
  assert.deepEqual(a.voxels, b.voxels);
});

test('ore stays in the old depth bands at a similar rate', () => {
  const generator = new AdventureGenerator(42);
  const counts = { coal: 0, iron: 0, gold: 0, crystal: 0, gravel: 0, rock: 0 };
  for (let cz = -2; cz <= 2; cz++) {
    for (let cx = -2; cx <= 2; cx++) {
      const chunk = new Chunk(cx, cz);
      generator.generate(chunk);
      for (let y = 1; y < 80; y++) {
        for (let z = 0; z < 16; z++) {
          for (let x = 0; x < 16; x++) {
            const id = chunk.get(x, y, z);
            if (!ROCK.has(id)) continue;
            counts.rock++;
            if (id === Block.CoalOre) {
              counts.coal++;
              assert.ok(y < 74);
            } else if (id === Block.IronOre) {
              counts.iron++;
              assert.ok(y < 54);
            } else if (id === Block.GoldOre) {
              counts.gold++;
              assert.ok(y < 30);
            } else if (id === Block.CrystalOre) {
              counts.crystal++;
              assert.ok(y < 26);
            } else if (id === Block.Gravel) {
              counts.gravel++;
              assert.ok(y < 16);
            }
          }
        }
      }
    }
  }
  const share = (n) => n / counts.rock;
  assert.ok(share(counts.coal) > 0.015 && share(counts.coal) < 0.035, `coal ${share(counts.coal)}`);
  assert.ok(share(counts.iron) > 0.008 && share(counts.iron) < 0.025, `iron ${share(counts.iron)}`);
  assert.ok(share(counts.gold) > 0.002 && share(counts.gold) < 0.012, `gold ${share(counts.gold)}`);
  assert.ok(share(counts.crystal) > 0.001 && share(counts.crystal) < 0.008, `crystal ${share(counts.crystal)}`);
  assert.ok(share(counts.gravel) > 0.001 && share(counts.gravel) < 0.008, `gravel ${share(counts.gravel)}`);
});

test('glow shares the terrain mesh instead of a second material group', () => {
  const volume = new Uint8Array(VOLUME_LENGTH);
  volume[volumeIndex(2, 2, 2)] = Block.Stone;
  volume[volumeIndex(4, 2, 2)] = Block.Glowstone;
  const mesh = buildSectionMesh(volume);
  assert.equal(mesh.litIndexCount, mesh.indices.length);
  assert.equal(mesh.unlit.length, mesh.positions.length / 3);
  const glowing = mesh.unlit.filter((value) => value === 1).length;
  const lit = mesh.unlit.filter((value) => value === 0).length;
  assert.equal(glowing, 24);
  assert.equal(lit, 24);

  const torch = new Uint8Array(VOLUME_LENGTH);
  torch[volumeIndex(1, 1, 1)] = Block.Torch;
  const torchMesh = buildSectionMesh(torch);
  assert.ok(torchMesh.unlit.length > 0);
  assert.ok(torchMesh.unlit.every((value) => value === 1));

  const material = createTerrainMaterial({ texture: new THREE.Texture() });
  assert.equal(material.customProgramCacheKey(), 'terrain-unlit');
  const shader = {
    vertexShader: THREE.ShaderLib.lambert.vertexShader,
    fragmentShader: THREE.ShaderLib.lambert.fragmentShader,
  };
  material.onBeforeCompile(shader, {});
  assert.match(shader.vertexShader, /attribute float unlit/);
  assert.match(shader.fragmentShader, /vUnlit > 0\.5 \? diffuseColor\.rgb/);
  material.dispose();
});

test('the atlas is painted in memory and never read back from the canvas', () => {
  const painted = paintBlockAtlas();
  const again = paintBlockAtlas();
  assert.equal(painted.rgba.length, ATLAS_SIZE_PX * ATLAS_SIZE_PX * 4);
  assert.deepEqual(painted.rgba, again.rgba);
  assert.deepEqual(painted.tileColors, again.tileColors);

  const stone = painted.tileColors[Tile.Stone];
  assert.ok(stone[0] > 0.4 && stone[0] < 0.6, `stone ${stone}`);
  const origin = (Tile.Stone % ATLAS_TILES_PER_ROW) * ATLAS_TILE_PX;
  const row = Math.floor(Tile.Stone / ATLAS_TILES_PER_ROW) * ATLAS_TILE_PX;
  const pixel = ((row * ATLAS_SIZE_PX) + origin) * 4;
  assert.equal(painted.rgba[pixel + 3], 255);

  const glass = painted.tileColors[Tile.Glass];
  assert.ok(glass[0] < stone[0], 'clear glass pixels stay in the average');
  assert.equal(require('node:fs').readFileSync(require('node:path').join(__dirname, '../src/render/atlas.ts'), 'utf8').includes('getImageData('), false);
});
