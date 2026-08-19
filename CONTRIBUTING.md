# Contributing

Thank you for your interest in contributing to this portfolio project. This file describes the workflow, expectations, and guidelines we use to review and accept changes.

1. Reporting issues
 - Use the repository's Issues tab to report bugs or request features.
 - Provide a clear title, steps to reproduce, expected vs actual behavior, and any relevant logs or screenshots.

2. Fixes and pull requests
 - Fork the repository and create a topic branch with a descriptive name: `fix/menu-accessibility`, `feat/add-ci`.
 - Keep changes small and focused. One logical change per pull request speeds review.
 - Write clear commit messages using conventional commits when possible (e.g., `fix:`, `feat:`, `chore:`).

3. Code style and tests
 - Keep formatting consistent with the existing codebase. Use Prettier/ESLint if available.
 - If you introduce functionality, include tests or a manual verification checklist.

4. Review process
 - Pull requests will be reviewed by the repository owner and merged once they pass CI and a code review.
 - Be responsive to review comments and iterate promptly.

5. Build and test locally
 - Install dependencies with Bun: `bun install`.
 - Start dev server: `bun run astro dev` (or background mode as documented).
 - Run `bun run build` to validate the production build locally.

6. Security-sensitive fixes
 - For vulnerabilities, follow the instructions in `SECURITY.md` rather than opening a public issue.

Thank you for helping improve this project.
