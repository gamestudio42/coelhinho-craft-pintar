import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { HammerTier } from '../player/Hammer.ts';

const PALETTES = {
  [HammerTier.Wood]: { body: 0xb77b42, edge: 0xe7b86c, band: 0x574838, socket: 0x382c25, gem: 0xf5ca76 },
  [HammerTier.Iron]: { body: 0x859caf, edge: 0xe2edf0, band: 0x344c61, socket: 0x233140, gem: 0x65e6df },
  [HammerTier.Gold]: { body: 0xdb9c35, edge: 0xffe394, band: 0x80502e, socket: 0x4d302e, gem: 0x83f4cb },
};

const MODEL_FILES = ['hammer-wood', 'hammer-iron', 'hammer-gold'] as const;

export interface HammerMeshOptions {
  /** First-person view paints a glove on the shaft; the third-person body already has an arm. */
  glove?: boolean;
  /** Shift the mesh so the grip sits at the origin and a parent can place the hand. */
  gripAtOrigin?: boolean;
}

/** Centre of the leather wrap — the point a fist should close around. */
export const HAMMER_GRIP_Y = -0.35;

interface GlbAccessor {
  bufferView: number;
  componentType: number;
  count: number;
  type: string;
  normalized?: boolean;
}

interface GlbDocument {
  nodes?: Array<{ scale?: [number, number, number] }>;
  meshes?: Array<{ primitives: Array<{ attributes: Record<string, number>; indices?: number }> }>;
  accessors: GlbAccessor[];
  bufferViews: Array<{ byteOffset?: number; byteLength: number }>;
}

const sculpted = new Map<HammerTier, THREE.BufferGeometry>();
const prepared = new Map<string, THREE.BufferGeometry>();
let preloadPromise: Promise<void> | null = null;

function cacheKey(tier: HammerTier, glove: boolean, gripAtOrigin: boolean): string {
  return `${tier}:${glove ? 1 : 0}:${gripAtOrigin ? 1 : 0}`;
}

function shadeBox(geometry: THREE.BufferGeometry, hex: number): void {
  const color = new THREE.Color(hex);
  const shades = [0.78, 0.64, 1, 0.48, 0.92, 0.7];
  const colors = new Float32Array(24 * 3);
  for (let face = 0; face < 6; face++) {
    const tint = color.clone().multiplyScalar(shades[face]);
    for (let vertex = 0; vertex < 4; vertex++) tint.toArray(colors, (face * 4 + vertex) * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

function box(
  pieces: THREE.BufferGeometry[],
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
  hex: number,
): void {
  const geometry = new THREE.BoxGeometry(w, h, d);
  shadeBox(geometry, hex);
  geometry.deleteAttribute('uv');
  geometry.translate(x, y, z);
  pieces.push(geometry);
}

/** The original voxel hammer, kept so a missing model never leaves the hand empty. */
export function createBoxHammerGeometry(tier: HammerTier, options: HammerMeshOptions = {}): THREE.BufferGeometry {
  const palette = PALETTES[tier];
  const pieces: THREE.BufferGeometry[] = [];

  box(pieces, 0.105, 0.9, 0.105, 0, -0.08, 0, 0x956035);
  box(pieces, 0.025, 0.43, 0.007, -0.024, 0.05, 0.056, 0xc68b4c);
  box(pieces, 0.012, 0.24, 0.008, 0.025, 0.13, 0.056, 0x613e27);
  box(pieces, 0.145, 0.1, 0.14, 0, 0.19, 0, palette.band);
  box(pieces, 0.13, 0.36, 0.13, 0, -0.31, 0, 0x49352f);
  for (let i = 0; i < 5; i++) box(pieces, 0.143, 0.024, 0.143, 0, -0.16 - i * 0.067, 0, 0x8c6250);
  box(pieces, 0.17, 0.07, 0.16, 0, -0.52, 0, palette.band);
  box(pieces, 0.12, 0.025, 0.115, 0, -0.566, 0, palette.edge);

  const headY = 0.39;
  box(pieces, 0.55, 0.29, 0.27, 0, headY, 0, palette.body);
  box(pieces, 0.48, 0.025, 0.235, 0, headY + 0.1575, 0, palette.edge);
  for (const side of [-1, 1]) {
    box(pieces, 0.075, 0.33, 0.305, side * 0.27, headY, 0, palette.band);
    box(pieces, 0.055, 0.275, 0.255, side * 0.335, headY, 0, palette.edge);
    box(pieces, 0.018, 0.205, 0.185, side * 0.371, headY, 0, palette.body);
    box(pieces, 0.145, 0.175, 0.012, side * 0.155, headY, 0.141, palette.edge);
    box(pieces, 0.033, 0.033, 0.019, side * 0.22, headY + 0.09, 0.152, palette.socket);
    box(pieces, 0.033, 0.033, 0.019, side * 0.22, headY - 0.09, 0.152, palette.socket);
  }
  box(pieces, 0.125, 0.34, 0.306, 0, headY, 0, palette.band);
  box(pieces, 0.105, 0.15, 0.03, 0, headY, 0.169, palette.socket);
  box(pieces, 0.071, 0.09, 0.022, 0, headY, 0.195, palette.gem);
  box(pieces, 0.042, 0.125, 0.019, 0, headY, 0.194, palette.gem);
  box(pieces, 0.023, 0.035, 0.006, -0.014, headY + 0.022, 0.209, 0xfff3cf);
  if (options.glove !== false) addGlove(pieces);

  return finishPieces(pieces, options.gripAtOrigin === true);
}

function addGlove(pieces: THREE.BufferGeometry[]): void {
  box(pieces, 0.19, 0.16, 0.185, 0.025, -0.285, 0.018, 0xb77b51);
  box(pieces, 0.07, 0.12, 0.075, -0.06, -0.245, 0.108, 0xd49a67);
  for (let i = 0; i < 3; i++) box(pieces, 0.11, 0.012, 0.008, 0.055, -0.24 - i * 0.043, 0.115, 0x855338);
  box(pieces, 0.2, 0.065, 0.19, 0.034, -0.4, 0.019, 0x284d64);
  box(pieces, 0.195, 0.25, 0.18, 0.04, -0.55, 0.013, 0x447e97);
}

function finishPieces(pieces: THREE.BufferGeometry[], gripAtOrigin: boolean): THREE.BufferGeometry {
  const merged = mergeGeometries(pieces, false);
  if (!merged) throw new Error('hammer mesh is empty');
  for (const geometry of pieces) geometry.dispose();
  if (gripAtOrigin) merged.translate(0, -HAMMER_GRIP_Y, 0);
  merged.computeBoundingSphere();
  return merged;
}

function viewBytes(bin: Uint8Array, document: GlbDocument, viewIndex: number): Uint8Array {
  const view = document.bufferViews[viewIndex];
  const start = view.byteOffset ?? 0;
  return bin.subarray(start, start + view.byteLength);
}

/** Reads the small hammer GLB written by tools/blender/hammer.py. */
export function parseHammerGlb(buffer: ArrayBuffer): THREE.BufferGeometry {
  const data = new DataView(buffer);
  if (buffer.byteLength < 20 || data.getUint32(0, true) !== 0x46546c67) throw new Error('not a glb');

  let offset = 12;
  let document: GlbDocument | null = null;
  let bin = new Uint8Array();
  while (offset + 8 <= buffer.byteLength) {
    const length = data.getUint32(offset, true);
    const type = data.getUint32(offset + 4, true);
    const start = offset + 8;
    if (type === 0x4e4f534a) {
      document = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, start, length))) as GlbDocument;
    } else if (type === 0x004e4942) {
      bin = new Uint8Array(buffer, start, length);
    }
    offset = start + length;
  }
  if (!document) throw new Error('glb has no json');

  const primitive = document.meshes?.[0]?.primitives[0];
  if (!primitive || primitive.indices === undefined) throw new Error('glb has no mesh');
  const positionAccessor = document.accessors[primitive.attributes.POSITION];
  const colorAccessor = document.accessors[primitive.attributes.COLOR_0];
  const indexAccessor = document.accessors[primitive.indices];
  if (!positionAccessor || !colorAccessor || !indexAccessor) throw new Error('glb is missing hammer attributes');

  const scale = document.nodes?.[0]?.scale?.[0] ?? 1;
  const positionBytes = viewBytes(bin, document, positionAccessor.bufferView);
  const shorts = new Int16Array(positionBytes.buffer, positionBytes.byteOffset, positionAccessor.count * 3);
  const positions = new Float32Array(positionAccessor.count * 3);
  for (let i = 0; i < positions.length; i++) positions[i] = (shorts[i] / 32767) * scale;

  const colorBytes = viewBytes(bin, document, colorAccessor.bufferView);
  const colors = new Float32Array(colorAccessor.count * 3);
  for (let i = 0; i < colors.length; i++) colors[i] = colorBytes[i] / 255;

  const indexBytes = viewBytes(bin, document, indexAccessor.bufferView);
  const indices = new Uint16Array(indexBytes.buffer, indexBytes.byteOffset, indexAccessor.count);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Keeps one parsed mesh per tier. Later swaps only clone it. */
export function installHammerModel(tier: HammerTier, buffer: ArrayBuffer): boolean {
  try {
    const geometry = parseHammerGlb(buffer);
    sculpted.get(tier)?.dispose();
    sculpted.set(tier, geometry);
    for (const key of [...prepared.keys()]) {
      if (key.startsWith(`${tier}:`)) {
        prepared.get(key)?.dispose();
        prepared.delete(key);
      }
    }
    return true;
  } catch {
    return false;
  }
}

export function hammerModelsReady(): boolean {
  return sculpted.size === MODEL_FILES.length;
}

/**
 * Fetches every tier once. A failed file leaves that tier on the box hammer.
 * Tier changes after this stay on the already parsed meshes.
 */
export function preloadHammerModels(): Promise<void> {
  if (preloadPromise) return preloadPromise;
  if (typeof document === 'undefined') return Promise.resolve();
  preloadPromise = Promise.all(
    MODEL_FILES.map(async (name, tier) => {
      try {
        const response = await fetch(new URL(`models/${name}.glb`, document.baseURI));
        if (!response.ok) return;
        installHammerModel(tier as HammerTier, await response.arrayBuffer());
      } catch {
        // The box hammer stays in the hand.
      }
    }),
  ).then(() => undefined);
  return preloadPromise;
}

function sculptedGeometry(tier: HammerTier, options: HammerMeshOptions): THREE.BufferGeometry | null {
  const source = sculpted.get(tier);
  if (!source) return null;
  const glove = options.glove !== false;
  const gripAtOrigin = options.gripAtOrigin === true;
  const key = cacheKey(tier, glove, gripAtOrigin);
  const cached = prepared.get(key);
  if (cached) return cached;

  const pieces: THREE.BufferGeometry[] = [source.clone()];
  if (glove) addGlove(pieces);
  const geometry = pieces.length === 1 ? pieces[0] : finishPieces(pieces, false);
  if (gripAtOrigin) geometry.translate(0, -HAMMER_GRIP_Y, 0);
  geometry.computeBoundingSphere();
  prepared.set(key, geometry);
  return geometry;
}

/**
 * One geometry, one material, one draw. Uses the Blender mesh when it is
 * loaded and the box hammer otherwise.
 */
export function createHammerGeometry(tier: HammerTier, options: HammerMeshOptions = {}): THREE.BufferGeometry {
  const sculptedMesh = sculptedGeometry(tier, options);
  if (sculptedMesh) return sculptedMesh.clone();
  return createBoxHammerGeometry(tier, options);
}
