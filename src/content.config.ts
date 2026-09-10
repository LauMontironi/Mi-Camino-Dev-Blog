import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),

			// Chapter number, lifted out of the old "# 21 # ..." titles
			chapter: z.number().optional(),
			category: z.enum(['camino', 'bootcamp', 'codigo', 'trabajo']).default('camino'),
			tags: z.array(z.string()).default([]),

			// Ready for the i18n phase: same translationKey pairs two languages
			lang: z.enum(['es', 'en']).default('es'),
			translationKey: z.string(),

			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
		}),
});

export const collections = { blog };
