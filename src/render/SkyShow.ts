import * as THREE from 'three';

import type { SkyMood } from '../world/weather.ts';

const DROPS = 96;
const RAINBOW = [0xe24b4b, 0xf0a04b, 0xf2d34b, 0x6fbf6a, 0x4aa0e0, 0x7a63d4];

/** A light shower around the player, then a small arc in front of them. */
export class SkyShow {
  private readonly rain: THREE.Points;
  private readonly drops: Float32Array;
  private readonly rainbow = new THREE.Group();
  private readonly forward = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.drops = new Float32Array(DROPS * 3);
    for (let i = 0; i < DROPS; i++) {
      this.drops[i * 3] = (Math.random() - 0.5) * 14;
      this.drops[i * 3 + 1] = Math.random() * 10;
      this.drops[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.drops, 3));
    this.rain = new THREE.Points(geometry, new THREE.PointsMaterial({
      color: 0xe7f2fb,
      size: 0.14,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    }));
    this.rain.visible = false;
    this.rain.frustumCulled = false;
    scene.add(this.rain);

    RAINBOW.forEach((color, index) => {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(7.2 + index * 0.55, 0.22, 5, 40, Math.PI),
        new THREE.MeshBasicMaterial({ color, fog: false, depthWrite: false, side: THREE.DoubleSide }),
      );
      this.rainbow.add(arc);
    });
    this.rainbow.visible = false;
    scene.add(this.rainbow);
  }

  update(origin: THREE.Vector3, yaw: number, mood: SkyMood, dt: number): void {
    const raining = mood === 'rain';
    this.rain.visible = raining;
    if (raining) {
      for (let i = 0; i < DROPS; i++) {
        const y = i * 3 + 1;
        this.drops[y] -= dt * 7;
        if (this.drops[y] < 0) this.drops[y] += 10;
      }
      this.rain.position.set(origin.x, origin.y + 1, origin.z);
      (this.rain.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    this.rainbow.visible = mood === 'rainbow';
    if (mood === 'rainbow') {
      this.forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
      this.rainbow.position.set(origin.x + this.forward.x * 22, origin.y + 8, origin.z + this.forward.z * 22);
      this.rainbow.rotation.y = yaw;
    }
  }
}
