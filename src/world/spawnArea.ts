/** Blocks around the feet that must be solid and visible on the first frame. */
const FOOT_REACH = 1;

export interface SpawnArea {
  /** Columns generated before the click returns. */
  generate: Array<[number, number]>;
  /** Columns whose mesh is requested immediately, so the ground underfoot is drawn. */
  mesh: Array<[number, number]>;
}

/**
 * The chunk under the player, plus a neighbour when the body stands on a border.
 * Their orthogonal neighbours are generated too, so the mesh has no missing edge.
 */
export function spawnColumns(x: number, z: number, reach = FOOT_REACH): SpawnArea {
  const meshKeys = new Set<string>();
  const minX = Math.floor(x - reach);
  const maxX = Math.floor(x + reach);
  const minZ = Math.floor(z - reach);
  const maxZ = Math.floor(z + reach);
  for (let wx = minX; wx <= maxX; wx++) {
    for (let wz = minZ; wz <= maxZ; wz++) {
      meshKeys.add(`${wx >> 4},${wz >> 4}`);
    }
  }

  const generateKeys = new Set<string>();
  for (const key of meshKeys) {
    const [cx, cz] = key.split(',').map(Number);
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) generateKeys.add(`${cx + dx},${cz + dz}`);
    }
  }

  const parse = (key: string): [number, number] => {
    const [cx, cz] = key.split(',').map(Number);
    return [cx, cz];
  };
  return {
    generate: [...generateKeys].map(parse),
    mesh: [...meshKeys].map(parse),
  };
}

/**
 * How many extra columns an idle callback may generate.
 * A busy frame generates none, so the click itself stays short.
 */
export function idleChunkBudget(timeRemainingMs: number, didTimeout: boolean): number {
  if (didTimeout) return 1;
  if (timeRemainingMs >= 12) return 2;
  if (timeRemainingMs >= 6) return 1;
  return 0;
}
