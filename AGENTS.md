## Development

This repository contains a production-ready Astro portfolio site. Follow these guidelines when developing locally or contributing.

Local development
 - Start the dev server (recommended background mode):

```sh
bun install
bun run astro dev -- --host --port 4321 --background
```

Use the helper commands to manage the background server:

- `bun run astro dev -- --background` — start in background
- `bun run astro dev --stop` — stop background server (if supported)
- `bun run astro dev --status` — check background server status
- `bun run astro dev --logs` — tail background logs

Build & preview

```sh
bun run build
bun run preview
```

Notes
 - This project uses Bun for local development and building; CI is configured to use Node + npm.
 - Static assets live in `public/`. Vector assets (favicons, SVG) are preferred for production.

Documentation & references

- Official Astro docs: https://docs.astro.build
- Project structure guide: https://docs.astro.build/en/basics/project-structure/
- Deployment with GitHub Pages: https://docs.github.com/en/pages

If you need a one-line reminder while working in the repo, check this file first.
