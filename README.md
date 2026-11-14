<p align="center">
  <img src="docs/readme/mark.svg" width="88" alt="Coelhinho Craft Pintar mark">
</p>

<h1 align="center">Coelhinho Craft Pintar</h1>

<p align="center"><strong>Paint, build, and play with a bunny.</strong></p>

<p align="center">
  <a href="https://gamestudio42.github.io/coelhinho-craft-pintar/"><img src="https://img.shields.io/badge/Play_in_browser-7ec8f0?style=for-the-badge&labelColor=182837&color=7ec8f0" alt="Play Coelhinho Craft Pintar"></a>
  <a href="https://github.com/gamestudio42/coelhinho-craft-pintar/actions/workflows/pages.yml"><img src="https://img.shields.io/github/actions/workflow/status/gamestudio42/coelhinho-craft-pintar/pages.yml?branch=main&style=for-the-badge&labelColor=182837&label=Pages" alt="GitHub Pages deployment status"></a>
  <a href="https://github.com/gamestudio42"><img src="https://img.shields.io/badge/Game_Studio_42-182837?style=for-the-badge&labelColor=182837&color=7ec8f0" alt="Game Studio 42"></a>
</p>

<p align="center">
  A peaceful block game in the browser, made for Antonio.
  Paint pixel art on the walls, keep building with blocks, and give carrots to a white bunny.
  There are no monsters, no fights, and no scares.
</p>

<p align="center">
  <a href="https://gamestudio42.github.io/coelhinho-craft-pintar/">
    <img src="docs/readme/play.svg" alt="Play Coelhinho Craft Pintar in the browser" height="56">
  </a>
</p>

## Play

Open **[gamestudio42.github.io/coelhinho-craft-pintar](https://gamestudio42.github.io/coelhinho-craft-pintar/)**.
The words on screen are simple Brazilian Portuguese.

1. Press **Jogar**.
2. **Build.** Right click places a block. Left click removes one.
3. **Paint.** Press **Pintar**, pick a big color, and paint a wall with the right button. There are 23 colors.
4. Find carrots on the grass, plant them on dirt, or take the ones in the pack.
5. Look at the white bunny and give it a carrot. It hops.

The bunny follows you from the start. Falling, lava, and the void do not hurt.

### Secret base

In **Mundo**, a yellow path starts beside where you appear. Follow it to a pink picture on a wooden wall. Right-click the picture: the wall opens, and a stair goes down to a room with torches, a bed, a chest and a hay corner for the bunny. Right-click the picture again to close it.

### Village

Walk north-east from the start, about fifty blocks, until you see three little houses. The neighbours walk in the square. The iron golem is big and kind: every few seconds it offers a red flower to someone, and they hop. Nobody fights.

### Golden carrot

A gold cube sits on the yellow path, and another sits in the village square. They are rare. Select it, look at the bunny, and right-click. The bunny grows huge for 25 seconds, then shrinks back smoothly.

| Action | Control |
| --- | --- |
| Walk | `W` `A` `S` `D` or arrows |
| Jump | `Space` |
| Paint or build | `P` |
| Choose blocks | `B` |
| Fly, in free building | `F` |
| See the character | `V` |
| Menu | `Esc` |
| Help | `H` |

A pull request from this repository publishes a preview at
`/coelhinho-craft-pintar/pr-preview/pr-<number>/`.
The same relative build is what the site root uses after merge.

## Develop

Requires Node.js 22 and pnpm 10.

```sh
pnpm install
pnpm dev        # http://localhost:5173
```

| Command | Purpose |
| --- | --- |
| `pnpm check` | Type check, lint, and tests |
| `pnpm build` | Production build in `dist` |
| `pnpm preview` | Serve the production build |

The Pages workflow builds `dist` and publishes the `main` branch to `gh-pages`.
See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Coelhinho Craft Pintar is released under the MIT License ([`LICENSE`](LICENSE)).
Copyright (c) 2026 Game Studio 42.
