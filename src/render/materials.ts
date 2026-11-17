import * as THREE from 'three';

import type { BlockAtlas } from './atlas.ts';

/**
 * Lit terrain and glowing blocks share this material. Vertices with `unlit`
 * skip the lamps and match the old unlit pass, so a chunk section is one draw.
 */
class TerrainMaterial extends THREE.MeshLambertMaterial {
  constructor(atlas: BlockAtlas) {
    super({
      map: atlas.texture,
      vertexColors: true,
      alphaTest: 0.5,
    });
  }

  override customProgramCacheKey(): string {
    return 'terrain-unlit';
  }

  override onBeforeCompile(shader: THREE.WebGLProgramParametersWithUniforms, _renderer: THREE.WebGLRenderer): void {
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <color_pars_vertex>',
        '#include <color_pars_vertex>\nattribute float unlit;\nvarying float vUnlit;',
      )
      .replace('#include <color_vertex>', '#include <color_vertex>\nvUnlit = unlit;');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <color_pars_fragment>',
        '#include <color_pars_fragment>\nvarying float vUnlit;',
      )
      .replace(
        'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;',
        'vec3 outgoingLight = vUnlit > 0.5 ? diffuseColor.rgb : reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;',
      );
  }
}

/**
 * Terrain shares one material: the atlas supplies the colour, vertex colours
 * carry baked ambient occlusion, face shading and block glow.
 */
export function createTerrainMaterial(atlas: BlockAtlas): THREE.MeshLambertMaterial {
  return new TerrainMaterial(atlas);
}

/** Own pass so lakes stay see-through without sorting the solid terrain. */
export function createWaterMaterial(atlas: BlockAtlas): THREE.MeshLambertMaterial {
  return new THREE.MeshLambertMaterial({
    map: atlas.texture,
    vertexColors: true,
    transparent: true,
    opacity: 0.52,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}
