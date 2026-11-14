import { canPaintBlock } from '../world/blocks.ts';

/** One fill stays small enough that a phone does not hitch. */
export const PAINT_FILL_LIMIT = 512;

const STEPS: ReadonlyArray<readonly [number, number, number]> = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

export interface PaintCell {
  x: number;
  y: number;
  z: number;
}

/**
 * Connected blocks of the same kind, face to face, ready to become `color`.
 * Stops at the limit so a huge wall can be finished with another tap.
 */
export function paintBucket(
  getBlock: (x: number, y: number, z: number) => number,
  x: number,
  y: number,
  z: number,
  color: number,
  limit = PAINT_FILL_LIMIT,
): PaintCell[] {
  const source = getBlock(x, y, z);
  if (source === color || !canPaintBlock(source)) return [];
  const cells: PaintCell[] = [];
  const queue: PaintCell[] = [{ x, y, z }];
  const seen = new Set<string>([`${x},${y},${z}`]);
  while (queue.length > 0 && cells.length < limit) {
    const cell = queue.shift()!;
    if (getBlock(cell.x, cell.y, cell.z) !== source) continue;
    cells.push(cell);
    for (const [dx, dy, dz] of STEPS) {
      const next = { x: cell.x + dx, y: cell.y + dy, z: cell.z + dz };
      const key = `${next.x},${next.y},${next.z}`;
      if (seen.has(key)) continue;
      seen.add(key);
      if (getBlock(next.x, next.y, next.z) !== source) continue;
      queue.push(next);
    }
  }
  return cells;
}
