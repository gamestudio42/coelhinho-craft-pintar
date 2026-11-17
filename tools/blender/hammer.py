"""Low-poly toy hammers for Coelhinho Craft Pintar.

Rebuilds the three tiers and writes light GLBs plus the before/after pictures.

    blender --background --python tools/blender/hammer.py

The mesh is modelled with Z up. The glTF export turns that into Y up, and the
front face (Blender -Y) becomes +Z, which is the face the first-person view shows.
The leather grip stays centred at Z = -0.35 so HAMMER_GRIP_Y still lines up.
"""

from __future__ import annotations

import json
import os
import struct

import bmesh
import bpy
from mathutils import Vector

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
MODEL_DIR = os.path.join(ROOT, 'public', 'models')
IMAGE_DIR = os.path.join(ROOT, 'docs', 'images')

# Same hexes as the box hammer, so a tier is recognisable either way.
PALETTES = {
    'wood': {
        'body': (0xB7 / 255, 0x7B / 255, 0x42 / 255),
        'edge': (0xE7 / 255, 0xB8 / 255, 0x6C / 255),
        'band': (0x57 / 255, 0x48 / 255, 0x38 / 255),
        'socket': (0x38 / 255, 0x2C / 255, 0x25 / 255),
        'gem': None,
    },
    'iron': {
        'body': (0x85 / 255, 0x9C / 255, 0xAF / 255),
        'edge': (0xE2 / 255, 0xED / 255, 0xF0 / 255),
        'band': (0x34 / 255, 0x4C / 255, 0x61 / 255),
        'socket': (0x23 / 255, 0x31 / 255, 0x40 / 255),
        'gem': (0x65 / 255, 0xE6 / 255, 0xDF / 255),
    },
    'gold': {
        'body': (0xDB / 255, 0x9C / 255, 0x35 / 255),
        'edge': (0xFF / 255, 0xE3 / 255, 0x94 / 255),
        'band': (0x80 / 255, 0x50 / 255, 0x2E / 255),
        'socket': (0x4D / 255, 0x30 / 255, 0x2E / 255),
        'gem': (0x83 / 255, 0xF4 / 255, 0xCB / 255),
    },
}

WOOD = (0x95 / 255, 0x60 / 255, 0x35 / 255)
WOOD_LIGHT = (0xC6 / 255, 0x8B / 255, 0x4C / 255)
LEATHER = (0.32, 0.18, 0.12)
LEATHER_RIDGE = (0.62, 0.42, 0.28)
GEM_SPARK = (1.0, 0.96, 0.82)


def reset_scene() -> None:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.render.engine = 'BLENDER_EEVEE'
    scene.render.resolution_x = 480
    scene.render.resolution_y = 640
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = False
    scene.render.image_settings.file_format = 'PNG'
    scene.eevee.taa_render_samples = 16
    scene.view_settings.view_transform = 'Standard'

    world = bpy.data.worlds.new('Sky')
    world.use_nodes = True
    background = world.node_tree.nodes['Background']
    background.inputs['Color'].default_value = (0.73, 0.88, 0.96, 1)
    background.inputs['Strength'].default_value = 1
    scene.world = world

    sun_data = bpy.data.lights.new('Sun', 'SUN')
    sun_data.energy = 3.2
    sun = bpy.data.objects.new('Sun', sun_data)
    sun.rotation_euler = (0.9, 0.2, -0.6)
    scene.collection.objects.link(sun)

    fill_data = bpy.data.lights.new('Fill', 'AREA')
    fill_data.energy = 250
    fill_data.size = 2
    fill = bpy.data.objects.new('Fill', fill_data)
    fill.location = (-1.2, -1.4, 0.8)
    fill.rotation_euler = (1.1, 0, -0.6)
    scene.collection.objects.link(fill)

    camera_data = bpy.data.cameras.new('Camera')
    camera_data.type = 'ORTHO'
    camera_data.ortho_scale = 1.35
    camera = bpy.data.objects.new('Camera', camera_data)
    camera.location = (0.72, -1.65, 0.22)
    scene.collection.objects.link(camera)
    scene.camera = camera
    direction = Vector((0, -0.05, 0.02)) - camera.location
    camera.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()


def color_layer(bm: bmesh.types.BMesh):
    layer = bm.loops.layers.color.get('Color')
    if layer is None:
        layer = bm.loops.layers.color.new('Color')
    return layer


def paint(bm: bmesh.types.BMesh, rgb: tuple[float, float, float]) -> None:
    """Flat sRGB on the corners. The export shades in linear space, which is what the unlit view model shows."""
    layer = color_layer(bm)
    tint = (rgb[0], rgb[1], rgb[2], 1.0)
    for face in bm.faces:
        for loop in face.loops:
            loop[layer] = tint


def to_object(bm: bmesh.types.BMesh, name: str, location: tuple[float, float, float]):
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    for polygon in mesh.polygons:
        polygon.use_smooth = False
    attribute = mesh.color_attributes.get('Color')
    if attribute is not None:
        mesh.color_attributes.active_color = attribute
    obj = bpy.data.objects.new(name, mesh)
    obj.location = location
    bpy.context.scene.collection.objects.link(obj)
    return obj


def chamfered_box(size: tuple[float, float, float], bevel: float) -> bmesh.types.BMesh:
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=size, verts=list(bm.verts))
    if bevel > 0:
        bmesh.ops.bevel(
            bm,
            geom=list(bm.edges),
            offset=bevel,
            segments=1,
            affect='EDGES',
            profile=0.5,
            clamp_overlap=True,
        )
    return bm


def tube(radius: float, length: float, sides: int) -> bmesh.types.BMesh:
    bm = bmesh.new()
    bmesh.ops.create_cone(
        bm,
        cap_ends=True,
        cap_tris=False,
        segments=sides,
        radius1=radius,
        radius2=radius,
        depth=length,
    )
    return bm


def gem_shape(radius: float) -> bmesh.types.BMesh:
    bm = bmesh.new()
    top = bm.verts.new((0, 0, radius * 0.85))
    bottom = bm.verts.new((0, 0, -radius * 0.7))
    east = bm.verts.new((radius, 0, 0))
    west = bm.verts.new((-radius, 0, 0))
    back = bm.verts.new((0, radius * 0.55, 0))
    front = bm.verts.new((0, -radius * 1.15, 0))
    for tri in (
        (top, east, front),
        (top, front, west),
        (top, west, back),
        (top, back, east),
        (bottom, front, east),
        (bottom, west, front),
        (bottom, back, west),
        (bottom, east, back),
    ):
        bm.faces.new(tri)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    return bm


def place(bm: bmesh.types.BMesh, name: str, rgb: tuple[float, float, float], location: tuple[float, float, float]):
    paint(bm, rgb)
    return to_object(bm, name, location)


def build_sculpted(tier: str):
    palette = PALETTES[tier]
    parts = []
    # Oak shaft, leather grip and the metal collar under the head.
    parts.append(place(tube(0.046, 0.9, 6), 'shaft', WOOD, (0, 0, -0.06)))
    parts.append(place(tube(0.078, 0.38, 6), 'grip', LEATHER, (0, 0, -0.35)))
    for index, center in enumerate((-0.48, -0.35, -0.22)):
        parts.append(place(tube(0.09, 0.034, 6), f'ridge-{index}', LEATHER_RIDGE, (0, 0, center)))
    parts.append(place(tube(0.09, 0.06, 6), 'pommel', palette['band'], (0, 0, -0.55)))
    parts.append(place(chamfered_box((0.12, 0.12, 0.045), 0.008), 'pommel-cap', palette['edge'], (0, 0, -0.59)))
    parts.append(place(tube(0.086, 0.07, 6), 'ferrule', palette['band'], (0, 0, 0.24)))

    # A shorter, taller head than the old slab, with chamfered corners.
    parts.append(place(chamfered_box((0.52, 0.22, 0.26), 0.02), 'head', palette['body'], (0, 0, 0.4)))
    parts.append(place(chamfered_box((0.18, 0.24, 0.28), 0.014), 'band', palette['band'], (0, 0, 0.4)))
    for side, name in ((-1, 'cheek-l'), (1, 'cheek-r')):
        parts.append(
            place(
                chamfered_box((0.08, 0.25, 0.3), 0.012),
                name,
                palette['edge'],
                (side * 0.24, 0, 0.4),
            )
        )
        parts.append(
            place(
                chamfered_box((0.035, 0.04, 0.04), 0.004),
                f'bolt-{name}',
                palette['socket'],
                (side * 0.255, -0.1, 0.46),
            )
        )
    # Front plate. Negative Y is the face the player sees.
    parts.append(place(chamfered_box((0.18, 0.028, 0.16), 0.005), 'face', palette['edge'], (0, -0.13, 0.4)))
    if palette['gem'] is None:
        parts.append(place(chamfered_box((0.07, 0.03, 0.07), 0.008), 'peg', palette['socket'], (0, -0.15, 0.4)))
    else:
        parts.append(place(gem_shape(0.085), 'gem', palette['gem'], (0, -0.22, 0.42)))
        parts.append(place(chamfered_box((0.028, 0.016, 0.028), 0.003), 'spark', GEM_SPARK, (-0.02, -0.28, 0.47)))
    return join_parts(parts, f'hammer-{tier}')


def build_boxes(tier: str):
    """The previous hammer: the same boxes the game builds in code."""
    palette = PALETTES[tier]
    gem = palette['gem'] if palette['gem'] is not None else (0xF5 / 255, 0xCA / 255, 0x76 / 255)
    parts = []

    def box(w: float, h: float, d: float, x: float, y: float, z: float, rgb: tuple[float, float, float], name: str):
        # Three.js Y becomes Blender Z. Three.js +Z (the visible face) becomes Blender -Y.
        parts.append(place(chamfered_box((w, d, h), 0), name, rgb, (x, -z, y)))

    box(0.105, 0.9, 0.105, 0, -0.08, 0, WOOD, 'shaft')
    box(0.025, 0.43, 0.007, -0.024, 0.05, 0.056, WOOD_LIGHT, 'grain')
    box(0.012, 0.24, 0.008, 0.025, 0.13, 0.056, (0x61 / 255, 0x3E / 255, 0x27 / 255), 'knot')
    box(0.145, 0.1, 0.14, 0, 0.19, 0, palette['band'], 'ferrule')
    box(0.13, 0.36, 0.13, 0, -0.31, 0, (0x49 / 255, 0x35 / 255, 0x2F / 255), 'grip')
    old_ridge = (0x8C / 255, 0x62 / 255, 0x50 / 255)
    for index in range(5):
        box(0.143, 0.024, 0.143, 0, -0.16 - index * 0.067, 0, old_ridge, f'ridge-{index}')
    box(0.17, 0.07, 0.16, 0, -0.52, 0, palette['band'], 'pommel')
    box(0.12, 0.025, 0.115, 0, -0.566, 0, palette['edge'], 'pommel-cap')
    head_y = 0.39
    box(0.55, 0.29, 0.27, 0, head_y, 0, palette['body'], 'head')
    box(0.48, 0.025, 0.235, 0, head_y + 0.1575, 0, palette['edge'], 'head-top')
    for side in (-1, 1):
        box(0.075, 0.33, 0.305, side * 0.27, head_y, 0, palette['band'], f'cheek-{side}')
        box(0.055, 0.275, 0.255, side * 0.335, head_y, 0, palette['edge'], f'cap-{side}')
        box(0.018, 0.205, 0.185, side * 0.371, head_y, 0, palette['body'], f'face-end-{side}')
        box(0.145, 0.175, 0.012, side * 0.155, head_y, 0.141, palette['edge'], f'panel-{side}')
        box(0.033, 0.033, 0.019, side * 0.22, head_y + 0.09, 0.152, palette['socket'], f'rivet-a-{side}')
        box(0.033, 0.033, 0.019, side * 0.22, head_y - 0.09, 0.152, palette['socket'], f'rivet-b-{side}')
    box(0.125, 0.34, 0.306, 0, head_y, 0, palette['band'], 'center')
    box(0.105, 0.15, 0.03, 0, head_y, 0.169, palette['socket'], 'socket')
    box(0.071, 0.09, 0.022, 0, head_y, 0.195, gem, 'gem')
    box(0.042, 0.125, 0.019, 0, head_y, 0.194, gem, 'gem-tall')
    box(0.023, 0.035, 0.006, -0.014, head_y + 0.022, 0.209, GEM_SPARK, 'spark')
    return join_parts(parts, f'boxes-{tier}')


def join_parts(parts, name: str):
    bpy.context.view_layer.update()
    combined = bmesh.new()
    combined_color = color_layer(combined)
    for obj in parts:
        baked = obj.matrix_world.copy()
        temporary = bmesh.new()
        temporary.from_mesh(obj.data)
        temporary.transform(baked)
        source = temporary.loops.layers.color.get('Color')
        copied = {}
        for vertex in temporary.verts:
            copied[vertex] = combined.verts.new(vertex.co)
        combined.verts.ensure_lookup_table()
        for face in temporary.faces:
            try:
                new_face = combined.faces.new([copied[vertex] for vertex in face.verts])
            except ValueError:
                continue
            if source is not None:
                for source_loop, dest_loop in zip(face.loops, new_face.loops):
                    dest_loop[combined_color] = source_loop[source]
        temporary.free()
        bpy.data.objects.remove(obj, do_unlink=True)
    combined.normal_update()
    mesh = bpy.data.meshes.new(name)
    combined.to_mesh(mesh)
    combined.free()
    for polygon in mesh.polygons:
        polygon.use_smooth = False
    attribute = mesh.color_attributes.get('Color')
    if attribute is not None:
        mesh.color_attributes.active_color = attribute
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    assign_material(obj)
    return obj


def assign_material(obj) -> None:
    material = bpy.data.materials.get('HammerVertex')
    if material is None:
        material = bpy.data.materials.new('HammerVertex')
        material.use_nodes = True
        nodes = material.node_tree.nodes
        links = material.node_tree.links
        shader = nodes.get('Principled BSDF')
        attribute = nodes.new('ShaderNodeVertexColor')
        attribute.layer_name = 'Color'
        links.new(attribute.outputs['Color'], shader.inputs['Base Color'])
        shader.inputs['Roughness'].default_value = 0.62
    obj.data.materials.append(material)


def render(obj, path: str) -> None:
    for other in bpy.context.scene.objects:
        if other.type == 'MESH':
            other.hide_render = other != obj
    bpy.context.scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print(f'rendered {path} tris={len(obj.data.polygons)}')


def export_glb(obj, path: str) -> None:
    """One primitive, quantized, with vertex colours and no textures."""
    mesh = obj.data
    mesh.calc_loop_triangles()
    loops = mesh.loops
    color_attr = mesh.color_attributes.get('Color')
    positions = []
    colors = []
    indices = []
    weld = {}

    def linear_unit(channel: float) -> float:
        if channel <= 0.04045:
            return channel / 12.92
        return ((channel + 0.055) / 1.055) ** 2.4

    for triangle in mesh.loop_triangles:
        # Gentle facet shade in linear space. The first-person hammer is unlit, so a
        # darker sRGB multiply would crush the gem. Up is brighter; the front stays readable.
        normal = triangle.normal
        shade = min(1.0, 0.8 + 0.2 * max(0.0, normal.z) + 0.08 * max(0.0, -normal.y))
        corners = []
        for loop_index in triangle.loops:
            loop = loops[loop_index]
            blender = mesh.vertices[loop.vertex_index].co
            # Z-up Blender becomes Y-up glTF. The front (-Y) faces +Z.
            position = (blender.x, blender.z, -blender.y)
            if color_attr is not None:
                red, green, blue, _alpha = color_attr.data[loop_index].color
            else:
                red, green, blue = 1.0, 1.0, 1.0
            color = tuple(
                max(0, min(255, int(round(linear_unit(channel) * shade * 255))))
                for channel in (red, green, blue)
            )
            key = (
                round(position[0], 4),
                round(position[1], 4),
                round(position[2], 4),
                color,
            )
            index = weld.get(key)
            if index is None:
                index = len(positions)
                weld[key] = index
                positions.append(position)
                colors.append(color)
            corners.append(index)
        indices.extend(corners)

    extent = max(max(abs(axis) for axis in position) for position in positions)
    extent = extent or 1.0

    def pack_position(position):
        return tuple(max(-32767, min(32767, int(round(axis / extent * 32767)))) for axis in position)

    packed = [pack_position(position) for position in positions]
    minimum = [min(item[axis] for item in packed) / 32767 for axis in range(3)]
    maximum = [max(item[axis] for item in packed) / 32767 for axis in range(3)]

    bin_positions = b''.join(struct.pack('<hhh', *triple) for triple in packed)
    bin_colors = b''.join(bytes(color) for color in colors)
    bin_indices = b''.join(struct.pack('<H', index) for index in indices)
    if len(bin_positions) % 4:
        bin_positions += b'\x00' * (4 - len(bin_positions) % 4)
    if len(bin_colors) % 4:
        bin_colors += b'\x00' * (4 - len(bin_colors) % 4)
    blob = bin_positions + bin_colors + bin_indices
    if len(blob) % 4:
        blob += b'\x00' * (4 - len(blob) % 4)

    def accessor(buffer_view, component, count, accessor_type, extra=None):
        row = {
            'bufferView': buffer_view,
            'componentType': component,
            'count': count,
            'type': accessor_type,
        }
        if extra:
            row.update(extra)
        return row

    document = {
        'asset': {'version': '2.0', 'generator': 'tools/blender/hammer.py'},
        'scene': 0,
        'scenes': [{'nodes': [0]}],
        'nodes': [{'mesh': 0, 'scale': [extent, extent, extent]}],
        'materials': [{
            'name': 'hammer',
            'pbrMetallicRoughness': {
                'baseColorFactor': [1, 1, 1, 1],
                'metallicFactor': 0,
                'roughnessFactor': 1,
            },
        }],
        'meshes': [{
            'primitives': [{
                'attributes': {'POSITION': 0, 'COLOR_0': 1},
                'indices': 2,
                'material': 0,
            }],
        }],
        'accessors': [
            accessor(0, 5122, len(positions), 'VEC3', {'normalized': True, 'min': minimum, 'max': maximum}),
            accessor(1, 5121, len(colors), 'VEC3', {'normalized': True}),
            accessor(2, 5123, len(indices), 'SCALAR'),
        ],
        'bufferViews': [
            {'buffer': 0, 'byteOffset': 0, 'byteLength': len(bin_positions), 'target': 34962},
            {'buffer': 0, 'byteOffset': len(bin_positions), 'byteLength': len(bin_colors), 'target': 34962},
            {'buffer': 0, 'byteOffset': len(bin_positions) + len(bin_colors), 'byteLength': len(bin_indices), 'target': 34963},
        ],
        'buffers': [{'byteLength': len(blob)}],
    }
    raw = json.dumps(document, separators=(',', ':')).encode('utf8')
    raw += b' ' * ((4 - len(raw) % 4) % 4)
    header = struct.pack('<4sII', b'glTF', 2, 12 + 8 + len(raw) + 8 + len(blob))
    chunk_json = struct.pack('<I4s', len(raw), b'JSON') + raw
    chunk_bin = struct.pack('<I4s', len(blob), b'BIN\x00') + blob
    payload = header + chunk_json + chunk_bin
    with open(path, 'wb') as handle:
        handle.write(payload)
    print(f'exported {path} bytes={len(payload)} verts={len(positions)} indices={len(indices)}')


def main() -> None:
    os.makedirs(MODEL_DIR, exist_ok=True)
    os.makedirs(IMAGE_DIR, exist_ok=True)
    reset_scene()
    for tier in ('wood', 'iron', 'gold'):
        before = build_boxes(tier)
        render(before, os.path.join(IMAGE_DIR, f'hammer-{tier}-before.png'))
        bpy.data.objects.remove(before, do_unlink=True)

        after = build_sculpted(tier)
        render(after, os.path.join(IMAGE_DIR, f'hammer-{tier}-after.png'))
        export_glb(after, os.path.join(MODEL_DIR, f'hammer-{tier}.glb'))
        bpy.data.objects.remove(after, do_unlink=True)


if __name__ == '__main__':
    main()
