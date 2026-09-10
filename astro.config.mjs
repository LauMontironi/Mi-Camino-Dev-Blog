// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mi-camino-dev-blog.vercel.app',
	integrations: [
		mdx(),
		// The /proto/ prototype must never reach Google: it duplicates the
		// real pages. It is noindex too, but keeping it out of the sitemap
		// is the stronger signal.
		sitemap({ filter: (page) => !page.includes('/proto/') }),
	],

	redirects: {
		// The source file used to be named "21-post .md" (note the space),
		// which Astro slugified to "21-post-". Keep the old URL alive.
		'/blog/21-post-': '/blog/21-post',
	},
});
