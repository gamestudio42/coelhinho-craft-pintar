import { Block, isSoil, nextCarrotStage } from './blocks.ts';
import { WORLD_HEIGHT } from './Chunk.ts';
import type { World } from './World.ts';

/**
 * Plants a sprout on top of soil when the cell above is empty.
 * Returns the cell that received the sprout.
 */
export function carrotPlantCell(world: World, x: number, y: number, z: number): { x: number; y: number; z: number } | null {
  if (!isSoil(world.getBlock(x, y, z))) return null;
  const above = y + 1;
  if (above >= WORLD_HEIGHT || world.getBlock(x, above, z) !== Block.Air) return null;
  return { x, y: above, z };
}

/** Advances every growing carrot near the player by one stage. */
export function growCarrotsNear(world: World, originX: number, originY: number, originZ: number, radius = 12): number {
  const x0 = Math.floor(originX) - radius;
  const x1 = Math.floor(originX) + radius;
  const z0 = Math.floor(originZ) - radius;
  const z1 = Math.floor(originZ) + radius;
  const y0 = Math.max(1, Math.floor(originY) - 6);
  const y1 = Math.min(WORLD_HEIGHT - 1, Math.floor(originY) + 8);
  let grown = 0;

  for (let y = y0; y <= y1; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        const next = nextCarrotStage(world.getBlock(x, y, z));
        if (next === null) continue;
        if (world.setBlock(x, y, z, next)) grown += 1;
      }
    }
  }

  return grown;
}
