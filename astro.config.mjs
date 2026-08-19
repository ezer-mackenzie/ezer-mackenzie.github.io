// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Replace with your production site URL (GitHub Pages default for this repo)
	site: 'https://ezer-mackenzie.github.io',
	integrations: [sitemap()],
});
