# Eli-ezer Ramírez — Personal Portfolio (Astro)

This repository contains the source for a personal portfolio site built with Astro. It is configured for local development with Bun and for deployment via GitHub Pages.

Contents
 - `src/` — Astro pages, layouts and components
 - `public/` — Static assets (favicons, images)
 - `.github/workflows/` — CI/CD workflow for GitHub Pages
 - `package.json` — Project metadata and scripts

Quick start (development)

```sh
bun install
bun run dev # starts local dev server (wraps `astro dev`)
```

Build for production

```sh
bun run build
bun run preview
```

Deployment
 - This project includes a GitHub Actions workflow that builds the site and deploys it to GitHub Pages on pushes to the `main` branch. See `.github/workflows/deploy.yml`.

Contributing and governance
 - Please read `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md` before contributing.

License
 - The project is released under the MIT License. See `LICENSE` for details.

More
 - Astro documentation: https://docs.astro.build
 - If you need help, open an issue in the repository or contact the maintainer.
