import { Block } from './blocks.ts';
import { CHUNK_SIZE, WORLD_HEIGHT } from './Chunk.ts';
import type { World } from './World.ts';

/** Secret stair beside the adventure spawn (10, 10). Negative Z is north. */
export const SECRET = {
  doorX: 18,
  doorZ: 10,
  /** Steps down from the grass, and the room floor. */
  depth: 7,
} as const;

/** Peaceful village a short walk north-east of the spawn. */
export const VILLAGE = {
  x: 48,
  z: -32,
} as const;

export const GIANT_SECONDS = 25;
export const GIANT_SCALE = 2.4;

export interface Cell {
  x: number;
  y: number;
  z: number;
}

type Write = (x: number, y: number, z: number, id: Block) => void;

function boxTouchesChunk(cx: number, cz: number, minX: number, maxX: number, minZ: number, maxZ: number): boolean {
  const x0 = cx * CHUNK_SIZE;
  const z0 = cz * CHUNK_SIZE;
  return x0 + CHUNK_SIZE > minX && x0 <= maxX && z0 + CHUNK_SIZE > minZ && z0 <= maxZ;
}

/** Grass height the column generator actually uses. */
export function groundY(surface: number): number {
  return Math.min(surface, WORLD_HEIGHT - 12);
}

export function doorCells(floor: number): Cell[] {
  return [
    { x: SECRET.doorX, y: floor + 1, z: SECRET.doorZ },
    { x: SECRET.doorX, y: floor + 2, z: SECRET.doorZ },
  ];
}

export function paintingCell(floor: number): Cell {
  return { x: SECRET.doorX, y: floor + 2, z: SECRET.doorZ - 1 };
}

export function goldenCarrotNearSpawn(floor: number): Cell {
  return { x: 15, y: floor + 1, z: SECRET.doorZ };
}

export function villageGoldenCarrot(floor: number): Cell {
  return { x: VILLAGE.x + 3, y: floor + 1, z: VILLAGE.z };
}

/** Opens the plank door when it is shut, and shuts it when the stair is open. */
export function toggleSecretDoor(world: World, floor: number): 'open' | 'shut' {
  const cells = doorCells(floor);
  const shut = cells.some(cell => world.getBlock(cell.x, cell.y, cell.z) !== Block.Air);
  const next = shut ? Block.Air : Block.Planks;
  for (const cell of cells) world.setBlock(cell.x, cell.y, cell.z, next);
  return shut ? 'open' : 'shut';
}

function fill(write: Write, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, id: Block): void {
  for (let y = y0; y <= y1; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) write(x, y, z, id);
    }
  }
}

function stampSecret(write: Write, floor: number): void {
  for (let x = 12; x <= 17; x++) write(x, floor, SECRET.doorZ, Block.Yellow);
  write(goldenCarrotNearSpawn(floor).x, floor + 1, SECRET.doorZ, Block.GoldenCarrot);
  write(17, floor + 2, SECRET.doorZ - 1, Block.Torch);

  for (let z = SECRET.doorZ - 2; z <= SECRET.doorZ + 2; z++) {
    for (let y = floor + 1; y <= floor + 3; y++) write(SECRET.doorX, y, z, Block.Planks);
  }
  const picture = paintingCell(floor);
  write(picture.x, picture.y, picture.z, Block.Painting);
  for (const cell of doorCells(floor)) write(cell.x, cell.y, cell.z, Block.Planks);

  for (let step = 1; step <= SECRET.depth; step++) {
    const x = SECRET.doorX + step;
    const stepY = floor - step;
    for (let z = SECRET.doorZ - 1; z <= SECRET.doorZ + 1; z++) {
      write(x, stepY, z, Block.Planks);
      write(x, stepY + 1, z, Block.Air);
      write(x, stepY + 2, z, Block.Air);
      write(x, stepY - 1, z, Block.Stone);
    }
  }

  const roomY = floor - SECRET.depth;
  const x0 = SECRET.doorX + SECRET.depth;
  const x1 = x0 + 6;
  const z0 = SECRET.doorZ - 3;
  const z1 = SECRET.doorZ + 3;
  fill(write, x0, x1, roomY - 1, roomY, z0, z1, Block.Planks);
  fill(write, x0, x1, roomY + 4, roomY + 4, z0, z1, Block.Planks);
  for (let y = roomY + 1; y <= roomY + 3; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        const edge = x === x0 || x === x1 || z === z0 || z === z1;
        const doorway = x === x0 && z === SECRET.doorZ && y <= roomY + 2;
        write(x, y, z, edge && !doorway ? Block.Planks : Block.Air);
      }
    }
  }

  write(x0 + 1, roomY + 1, z0 + 1, Block.Bed);
  write(x1 - 1, roomY + 1, z0 + 1, Block.Chest);
  write(x0 + 1, roomY + 2, z1 - 1, Block.Torch);
  write(x1 - 1, roomY + 2, z1 - 1, Block.Torch);
  write(x0 + 1, roomY + 2, z0 + 1, Block.Torch);
  for (let z = SECRET.doorZ + 1; z <= SECRET.doorZ + 2; z++) {
    for (let x = x0 + 3; x <= x0 + 4; x++) write(x, roomY + 1, z, Block.Hay);
  }
}

function house(write: Write, ox: number, oz: number, floor: number, doorX: number, doorZ: number): void {
  for (let z = oz - 2; z <= oz + 2; z++) {
    for (let x = ox - 2; x <= ox + 2; x++) {
      write(x, floor, z, Block.Planks);
      write(x, floor + 3, z, Block.Planks);
      for (let y = floor + 1; y <= floor + 2; y++) {
        const edge = x === ox - 2 || x === ox + 2 || z === oz - 2 || z === oz + 2;
        const doorway = x === doorX && z === doorZ;
        write(x, y, z, edge && !doorway ? Block.Cobblestone : Block.Air);
      }
    }
  }
  write(ox, floor + 1, oz, Block.Bed);
  write(ox, floor + 2, oz - 1, Block.Torch);
}

function stampVillage(write: Write, floor: number): void {
  const { x: cx, z: cz } = VILLAGE;
  for (let z = cz - 10; z <= cz + 10; z++) {
    for (let x = cx - 10; x <= cx + 10; x++) {
      if (Math.hypot(x - cx, z - cz) > 11) continue;
      write(x, floor - 1, z, Block.Dirt);
      write(x, floor, z, Block.Grass);
      for (let y = floor + 1; y <= floor + 6; y++) write(x, y, z, Block.Air);
    }
  }
  for (let i = -6; i <= 6; i++) {
    write(cx + i, floor, cz, Block.Planks);
    write(cx, floor, cz + i, Block.Planks);
  }
  house(write, cx - 6, cz - 4, floor, cx - 4, cz - 4);
  house(write, cx + 6, cz - 4, floor, cx + 4, cz - 4);
  house(write, cx, cz + 6, floor, cx, cz + 4);
  const carrot = villageGoldenCarrot(floor);
  write(carrot.x, carrot.y, carrot.z, Block.GoldenCarrot);
}

/** Stamps the secret base and the village into one generated chunk. */
export function stampFriendlyPlaces(
  write: Write,
  surfaceAt: (x: number, z: number) => number,
  cx: number,
  cz: number,
): void {
  if (boxTouchesChunk(cx, cz, 12, SECRET.doorX + SECRET.depth + 6, SECRET.doorZ - 3, SECRET.doorZ + 3)) {
    stampSecret(write, groundY(surfaceAt(SECRET.doorX, SECRET.doorZ)));
  }
  if (boxTouchesChunk(cx, cz, VILLAGE.x - 11, VILLAGE.x + 11, VILLAGE.z - 11, VILLAGE.z + 11)) {
    stampVillage(write, groundY(surfaceAt(VILLAGE.x, VILLAGE.z)));
  }
}
