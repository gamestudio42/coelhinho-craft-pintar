import * as THREE from 'three';

import { Health } from '../combat/Health.ts';
import { Entity, type EntityContext } from './Entity.ts';
import { steerAround, walkToward } from './boss/steer.ts';

const WANDER = 7;

function buildQuiet(build: () => void): void {
  const random = Math.random;
  Math.random = () => 0.5;
  try {
    build();
  } finally {
    Math.random = random;
  }
}

/** A peaceful neighbour who walks the square and waves when offered a flower. */
export class Villager extends Entity {
  readonly homeX: number;
  readonly homeY: number;
  readonly homeZ: number;
  cheer = 0;

  private wanderX: number;
  private wanderZ: number;
  private wanderTimer = 0;
  private readonly model = new THREE.Group();

  constructor(x: number, y: number, z: number) {
    super(0.6, 1.5, 'neutral', 1);
    this.homeX = x;
    this.homeY = y;
    this.homeZ = z;
    this.wanderX = x;
    this.wanderZ = z;
    this.position.set(x, y, z);
    this.clearedOnDeath = false;
    this.health = new Health(1, 0);
    this.health.immune = true;
    buildQuiet(() => this.buildModel());
  }

  wave(): void {
    this.cheer = 1.4;
  }

  override update(context: EntityContext): void {
    const { dt, world } = context;
    if (!world.getChunk(Math.floor(this.position.x) >> 4, Math.floor(this.position.z) >> 4)) return;
    if (this.cheer > 0) this.cheer = Math.max(0, this.cheer - dt);

    this.wanderTimer -= dt;
    if (this.wanderTimer <= 0) {
      this.wanderTimer = 3 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      const reach = Math.random() * WANDER;
      this.wanderX = this.homeX + Math.cos(angle) * reach;
      this.wanderZ = this.homeZ + Math.sin(angle) * reach;
    }

    const gx = this.wanderX - this.position.x;
    const gz = this.wanderZ - this.position.z;
    const gap = Math.hypot(gx, gz);
    const wish = gap > 0.4 ? steerAround(this.position, gx / gap, gz / gap, (x, y, z) => world.getBlock(x, y, z)) : { x: 0, z: 0 };
    walkToward(this, world, wish.x, wish.z, 1.6, dt, 'moving');
    if (this.position.y < this.homeY - 4) this.position.set(this.homeX, this.homeY, this.homeZ);

    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    if (speed > 0.2) this.model.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
    this.model.position.y = this.cheer > 0 ? Math.abs(Math.sin(context.elapsed * 14)) * 0.18 : 0;
  }

  private buildModel(): void {
    const robe = new THREE.MeshLambertMaterial({ color: 0x4a7ec8, flatShading: true });
    const skin = new THREE.MeshLambertMaterial({ color: 0xf0c8a0, flatShading: true });
    const hair = new THREE.MeshLambertMaterial({ color: 0x5a3828, flatShading: true });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.62, 0.32), robe);
    body.position.y = 0.62;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.36, 0.36), skin);
    head.position.y = 1.2;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.12, 0.4), hair);
    cap.position.y = 1.4;
    this.model.add(body, head, cap);
    this.object3D.add(this.model);
  }
}

export type GiftState = 'wander' | 'walk' | 'give';

/** A kind iron golem. Every few seconds it offers a red flower to a neighbour. */
export class IronGolem extends Entity {
  state: GiftState = 'wander';
  giftClock = 8;
  friends: Villager[] = [];

  private readonly model = new THREE.Group();
  private readonly arm = new THREE.Group();
  private readonly flower: THREE.Mesh;
  private target: Villager | null = null;
  private walkLeft = 0;
  private readonly puff = new THREE.Vector3();
  private wanderX: number;
  private wanderZ: number;
  private readonly anchorX: number;
  private readonly anchorZ: number;

  constructor(x: number, y: number, z: number) {
    super(0.9, 2.1, 'neutral', 1.05);
    this.anchorX = x;
    this.anchorZ = z;
    this.wanderX = x;
    this.wanderZ = z;
    this.position.set(x, y, z);
    this.clearedOnDeath = false;
    this.health = new Health(1, 0);
    this.health.immune = true;
    this.flower = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.16, 0.16),
      new THREE.MeshLambertMaterial({ color: 0xe23b3b, flatShading: true }),
    );
    buildQuiet(() => this.buildModel());
  }

  override update(context: EntityContext): void {
    const { dt, world } = context;
    if (!world.getChunk(Math.floor(this.position.x) >> 4, Math.floor(this.position.z) >> 4)) return;

    if (this.state === 'wander') {
      this.giftClock -= dt;
      if (this.giftClock <= 0) this.beginGift();
    }

    const goal = this.goal();
    const gx = goal.x - this.position.x;
    const gz = goal.z - this.position.z;
    const gap = Math.hypot(gx, gz);
    const close = gap < 1.6;
    if (this.state === 'walk') {
      this.walkLeft -= dt;
      if (close) this.state = 'give';
      else if (this.walkLeft <= 0) this.finishGift();
    }
    if (this.state === 'give') {
      this.giftClock -= dt;
      this.arm.rotation.x = -1.15;
      this.flower.visible = true;
      if (this.target && this.target.cheer <= 0) this.target.wave();
      this.puff.set(this.position.x, this.position.y + 1.7, this.position.z);
      context.particles.burst(this.puff, {
        count: 2,
        color: 0xe23b3b,
        speed: 1.2,
        spread: 0.25,
        life: 0.45,
        gravity: 2,
        upwardBias: 0.6,
      });
      if (this.giftClock <= 0) this.finishGift();
    } else {
      this.arm.rotation.x = 0;
      this.flower.visible = false;
    }

    const moving = this.state !== 'give' && gap > 0.8;
    const wish = moving
      ? steerAround(this.position, gx / gap, gz / gap, (x, y, z) => world.getBlock(x, y, z))
      : { x: 0, z: 0 };
    walkToward(this, world, wish.x, wish.z, 1.8, dt, 'moving');
    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    if (speed > 0.2) this.model.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
  }

  private beginGift(): void {
    const friend = this.friends.find(villager => !villager.removed);
    if (!friend) {
      this.giftClock = 4;
      return;
    }
    this.target = friend;
    this.state = 'walk';
    this.walkLeft = 8;
    this.giftClock = 1.8;
  }

  private finishGift(): void {
    this.state = 'wander';
    this.giftClock = 9;
    this.walkLeft = 0;
    this.target = null;
    this.arm.rotation.x = 0;
    this.flower.visible = false;
  }

  private goal(): { x: number; z: number } {
    if ((this.state === 'walk' || this.state === 'give') && this.target) {
      return { x: this.target.position.x, z: this.target.position.z };
    }
    if (Math.hypot(this.wanderX - this.position.x, this.wanderZ - this.position.z) < 0.8) {
      const angle = this.giftClock * 1.7;
      this.wanderX = this.anchorX + Math.cos(angle) * 3;
      this.wanderZ = this.anchorZ + Math.sin(angle) * 3;
    }
    return { x: this.wanderX, z: this.wanderZ };
  }

  private buildModel(): void {
    const iron = new THREE.MeshLambertMaterial({ color: 0xd5dde6, flatShading: true });
    const dark = new THREE.MeshLambertMaterial({ color: 0x8aa0b4, flatShading: true });
    const eye = new THREE.MeshBasicMaterial({ color: 0x7ec8f0 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.55), iron);
    torso.position.y = 1.15;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.42, 0.46), iron);
    head.position.y = 1.85;
    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.12), dark);
    nose.position.set(0, 1.7, 0.28);
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), eye);
    leftEye.position.set(-0.12, 1.92, 0.24);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.12;
    this.arm.position.set(0.55, 1.35, 0.1);
    const armMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), iron);
    armMesh.position.y = -0.2;
    this.flower.position.set(0, -0.55, 0.16);
    this.flower.visible = false;
    this.arm.add(armMesh, this.flower);
    this.model.add(torso, head, nose, leftEye, rightEye, this.arm);
    this.object3D.add(this.model);
  }
}
