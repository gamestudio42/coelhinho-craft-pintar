import * as THREE from 'three';

import { Health } from '../combat/Health.ts';
import { Entity, type EntityContext } from './Entity.ts';
import { GIANT_SCALE, GIANT_SECONDS } from '../world/places.ts';
import { steerAround, walkToward } from './boss/steer.ts';

const SPEED = 3.8;
const STEP_HEIGHT = 1.1;
/** Trots up to this distance and then sits by the player. */
export const PET_FOLLOW_DISTANCE = 2.6;
/** Farther than this (a teleport, a long flight) it simply catches up. */
export const PET_CATCH_UP_DISTANCE = 18;
/** Stays this close to the middle of its pen while waiting. */
export const PET_HOME_RADIUS = 1.2;
/** A pet walking home that cannot get there in this many seconds pops back. */
export const PET_STRAY_SECONDS = 8;

export interface PetHome {
  x: number;
  y: number;
  z: number;
}

export type PetKind = 'bunny' | 'cat' | 'dog';

/** Short name a child hears. */
export function petName(kind: PetKind): string {
  if (kind === 'cat') return 'gatinho';
  if (kind === 'dog') return 'cachorrinho';
  return 'coelhinho';
}

/**
 * The companion that moves into the first recognised pen. It shares the
 * summons' walk and sidestep, sits on the neutral team and cannot be hurt.
 */
export class Pet extends Entity {
  following = false;
  readonly home: PetHome;

  private wander = { x: 0, z: 0 };
  private wanderTimer = 0;
  /** Back home: it neither climbs nor hops, so a one-block fence keeps it in. */
  private settled = true;
  private strayTime = 0;
  /** Seconds left of the happy hop after a carrot. */
  private nibble = 0;
  /** Seconds left of the giant size after a golden carrot. */
  giant = 0;
  /** True for one check after the giant size finishes. */
  justShrunk = false;
  private visualScale = 1;
  readonly kind: PetKind;
  private readonly body3D = new THREE.Group();
  private readonly legs: THREE.Mesh[] = [];
  private readonly ears: THREE.Object3D[] = [];
  private tail: THREE.Object3D | null = null;

  constructor(home: PetHome, kind: PetKind = 'bunny') {
    super(0.7, 0.8, 'neutral', STEP_HEIGHT);
    this.kind = kind;
    this.home = { ...home };
    this.position.set(home.x, home.y, home.z);
    this.wander = { x: home.x, z: home.z };
    this.clearedOnDeath = false;
    // Only the right-click aim needs a health bar; nothing in the game damages neutrals.
    this.health = new Health(1, 0);
    this.health.immune = true;
    // Mesh builders draw from Math.random. Put that noise aside, then spend the
    // same budget as the first companion so later rolls do not drift.
    const random = Math.random;
    Math.random = () => 0.5;
    try {
      this.buildModel();
    } finally {
      Math.random = random;
    }
    for (let i = 0; i < 92; i++) random();
  }

  override update(context: EntityContext): void {
    const { dt, world, player } = context;
    if (!world.getChunk(Math.floor(this.position.x) >> 4, Math.floor(this.position.z) >> 4)) return;

    const target = this.following ? player.position : this.home;
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const distance = Math.hypot(dx, dz);
    if (this.following) this.settled = false;
    // Height matters: standing on the fence is close to home on the map, but
    // the bunny still has to hop down inside the pen.
    else if (distance <= PET_HOME_RADIUS && Math.abs(this.position.y - this.home.y) < 0.75) this.settled = true;
    const returning = !this.following && !this.settled;
    this.strayTime = returning ? this.strayTime + dt : 0;

    if (this.position.y < 0 || distance > PET_CATCH_UP_DISTANCE || this.strayTime > PET_STRAY_SECONDS) {
      if (!this.following || player.body.onGround) this.teleport(target);
      return;
    }

    let goalX = target.x;
    let goalZ = target.z;
    const stop = this.following ? PET_FOLLOW_DISTANCE : 0.3;
    if (this.settled) {
      this.wanderTimer -= dt;
      if (this.wanderTimer <= 0) {
        this.wanderTimer = 2 + Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        const reach = Math.random() * PET_HOME_RADIUS;
        this.wander = { x: this.home.x + Math.cos(angle) * reach, z: this.home.z + Math.sin(angle) * reach };
      }
      goalX = this.wander.x;
      goalZ = this.wander.z;
    }

    const gx = goalX - this.position.x;
    const gz = goalZ - this.position.z;
    const gap = Math.hypot(gx, gz);
    let wishX = 0;
    let wishZ = 0;
    if (gap > stop) {
      const steered = steerAround(this.position, gx / gap, gz / gap, (x, y, z) => world.getBlock(x, y, z));
      wishX = steered.x;
      wishZ = steered.z;
    }
    this.body.stepHeight = this.settled ? 0 : STEP_HEIGHT;
    walkToward(this, world, wishX, wishZ, this.settled ? SPEED * 0.45 : SPEED, dt, this.settled ? 'never' : 'moving');

    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    if (speed > 0.2) this.body3D.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
    else if (this.following && distance > 0.4) this.body3D.rotation.y = Math.atan2(dx, dz);
    const swing = speed > 0.2 ? Math.sin(context.elapsed * 14) * 0.5 : 0;
    this.legs.forEach((leg, i) => { leg.rotation.x = i % 3 === 0 ? swing : -swing; });
    if (this.nibble > 0) this.nibble = Math.max(0, this.nibble - dt);
    this.tickGiant(dt);
    const hop = this.nibble > 0 ? Math.abs(Math.sin(context.elapsed * 16)) * 0.34 : 0;
    this.body3D.position.y = hop;
    const flop = this.nibble > 0 ? Math.sin(context.elapsed * 18) * 0.45 : 0;
    this.ears.forEach((ear, index) => {
      ear.rotation.z = (index === 0 ? -0.08 : 0.08) + flop;
    });
    if (this.tail && this.kind === 'dog') this.tail.rotation.y = Math.sin(context.elapsed * (this.nibble > 0 ? 16 : 7)) * 0.7;
    if (this.tail && this.kind === 'cat') this.tail.rotation.z = 0.5 + Math.sin(context.elapsed * 2.2) * 0.12;
  }

  /** Happy hop and ear wiggle. The caller already spent the carrot. */
  feed(): void {
    this.nibble = 1.6;
  }

  /** Huge for a little while, then eases back to the usual size. */
  growBig(): void {
    this.giant = GIANT_SECONDS;
    this.nibble = 1.6;
    this.justShrunk = false;
  }

  private tickGiant(dt: number): void {
    if (this.giant > 0) {
      this.giant = Math.max(0, this.giant - dt);
      if (this.giant === 0) this.justShrunk = true;
    }
    const shrink = this.giant > 0 && this.giant < 2;
    const target = this.giant <= 0 ? 1 : shrink ? 1 + (GIANT_SCALE - 1) * (this.giant / 2) : GIANT_SCALE;
    const step = 1 - Math.exp(-dt * 3.2);
    this.visualScale += (target - this.visualScale) * step;
    this.body3D.scale.setScalar(this.visualScale);
  }

  get nibbling(): boolean {
    return this.nibble > 0;
  }

  private teleport(target: { x: number; y: number; z: number }): void {
    this.position.set(target.x, target.y + 0.1, target.z);
    this.velocity.set(0, 0, 0);
    this.settled = !this.following;
    this.strayTime = 0;
  }

  private buildModel(): void {
    if (this.kind === 'cat') {
      this.buildCat();
      return;
    }
    if (this.kind === 'dog') {
      this.buildDog();
      return;
    }
    this.buildBunny();
  }

  private buildBunny(): void {
    const fur = new THREE.MeshLambertMaterial({ color: 0xfff7f2, flatShading: true });
    const inner = new THREE.MeshLambertMaterial({ color: 0xf7b7c8, flatShading: true });
    const noseMat = new THREE.MeshLambertMaterial({ color: 0xff8fab, flatShading: true });
    const dark = new THREE.MeshBasicMaterial({ color: 0x2b1d24 });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.42, 0.72), fur);
    torso.position.y = 0.46;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.38, 0.4), fur);
    head.position.set(0, 0.7, 0.42);
    const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.08), fur);
    cheek.position.set(0, 0.58, 0.64);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.06), noseMat);
    nose.position.set(0, 0.6, 0.7);
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.04), dark);
    leftEye.position.set(-0.1, 0.76, 0.62);
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.04), dark);
    rightEye.position.set(0.1, 0.76, 0.62);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), fur);
    tail.position.set(0, 0.52, -0.4);
    this.body3D.add(torso, head, cheek, nose, leftEye, rightEye, tail);

    for (const side of [-1, 1]) {
      const ear = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.42, 0.08), fur);
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.28, 0.04), inner);
      pad.position.set(0, -0.02, 0.04);
      ear.add(outer, pad);
      ear.position.set(side * 0.12, 1.05, 0.38);
      this.ears.push(ear);
      this.body3D.add(ear);
    }

    for (const [x, z] of [[-0.16, 0.22], [0.16, 0.22], [-0.16, -0.22], [0.16, -0.22]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.26, 0.12), fur);
      leg.geometry.translate(0, -0.13, 0);
      leg.position.set(x, 0.28, z);
      this.legs.push(leg);
      this.body3D.add(leg);
    }
    this.object3D.add(this.body3D);
  }

  private buildCat(): void {
    const fur = new THREE.MeshLambertMaterial({ color: 0xf6b26b, flatShading: true });
    const cream = new THREE.MeshLambertMaterial({ color: 0xfff3e4, flatShading: true });
    const noseMat = new THREE.MeshLambertMaterial({ color: 0xe97878, flatShading: true });
    const dark = new THREE.MeshBasicMaterial({ color: 0x2b1d24 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.36, 0.7), fur);
    torso.position.y = 0.42;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.34, 0.38), fur);
    head.position.set(0, 0.66, 0.36);
    const muzzle = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.08), cream);
    muzzle.position.set(0, 0.56, 0.56);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.05), noseMat);
    nose.position.set(0, 0.58, 0.62);
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.04), dark);
    leftEye.position.set(-0.1, 0.7, 0.55);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.1;
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.1), fur);
    tail.position.set(0, 0.72, -0.32);
    tail.rotation.x = -0.4;
    this.tail = tail;
    this.body3D.add(torso, head, muzzle, nose, leftEye, rightEye, tail);
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.22, 0.06), fur);
      ear.position.set(side * 0.12, 0.92, 0.32);
      ear.rotation.z = side * -0.2;
      this.ears.push(ear);
      this.body3D.add(ear);
    }
    for (const [x, z] of [[-0.14, 0.18], [0.14, 0.18], [-0.14, -0.2], [0.14, -0.2]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.1), fur);
      leg.geometry.translate(0, -0.11, 0);
      leg.position.set(x, 0.24, z);
      this.legs.push(leg);
      this.body3D.add(leg);
    }
    this.object3D.add(this.body3D);
  }

  private buildDog(): void {
    const fur = new THREE.MeshLambertMaterial({ color: 0xf3e2c4, flatShading: true });
    const brown = new THREE.MeshLambertMaterial({ color: 0xb07a45, flatShading: true });
    const noseMat = new THREE.MeshLambertMaterial({ color: 0x3a2a24, flatShading: true });
    const dark = new THREE.MeshBasicMaterial({ color: 0x2b1d24 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.38, 0.74), fur);
    torso.position.y = 0.44;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.36, 0.4), fur);
    head.position.set(0, 0.68, 0.4);
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.16), fur);
    snout.position.set(0, 0.58, 0.58);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.06), noseMat);
    nose.position.set(0, 0.6, 0.68);
    const spot = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.2), brown);
    spot.position.set(0, 0.58, -0.1);
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.04), dark);
    leftEye.position.set(-0.1, 0.74, 0.58);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.1;
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.34), brown);
    tail.geometry.translate(0, 0, -0.16);
    tail.position.set(0, 0.58, -0.38);
    this.tail = tail;
    this.body3D.add(torso, head, snout, nose, spot, leftEye, rightEye, tail);
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.06), brown);
      ear.geometry.translate(0, -0.12, 0);
      ear.position.set(side * 0.18, 0.78, 0.36);
      ear.rotation.z = side * 0.35;
      this.ears.push(ear);
      this.body3D.add(ear);
    }
    for (const [x, z] of [[-0.15, 0.2], [0.15, 0.2], [-0.15, -0.22], [0.15, -0.22]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.12), fur);
      leg.geometry.translate(0, -0.12, 0);
      leg.position.set(x, 0.26, z);
      this.legs.push(leg);
      this.body3D.add(leg);
    }
    this.object3D.add(this.body3D);
  }
}
