# Contributing to Coelhinho Craft Pintar

Thanks for wanting to remix the world. Code and comments are in English.
Player-facing text is in Brazilian Portuguese.

## Quick start

```sh
pnpm install
pnpm dev      # http://localhost:5173 — WebGL2 required, port is fixed
pnpm test
pnpm build
```

Use a Node version that Vite 8 accepts (20.19+ or 22.12+).

## How we work

- Keep the game playable in the browser on GitHub Pages. No install step.
- Do not add a runtime dependency without a written reason in the commit.
- Cover behaviour with a test in `tests/` when you change a rule.
- Human play sessions with a child stay documented in [TESTING.md](TESTING.md).

## Good first issues

Browse open [good first issues](https://github.com/gamestudio42/mineboss/labels/good%20first%20issue)
and [discussions](https://github.com/gamestudio42/mineboss/discussions).

## Pull requests

- Keep the change small and tested.
- Commit titles use `[TAG] area: short description`, for example `[ADD]`, `[IMP]`, and `[FIX]`.
- The Pages workflow publishes `dist` to the `gh-pages` branch. Pull request previews live under `pr-preview/`.
