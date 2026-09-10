// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mi-camino-dev-blog.vercel.app',

	// Spanish is the default locale and keeps the root URLs, so every existing
	// production URL is untouched. English lives under /en/.
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		routing: { prefixDefaultLocale: false },
	},

	integrations: [mdx(), sitemap()],

	redirects: {
		// The source file used to be named "21-post .md" (note the space),
		// which Astro slugified to "21-post-". Keep the old URL alive.
		'/blog/21-post-': '/blog/21-post',
	},
});
