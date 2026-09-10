import { getCollection, type CollectionEntry } from 'astro:content';

export type CategoryKey = 'camino' | 'bootcamp' | 'codigo' | 'trabajo';

export const CATEGORIES: Record<
  CategoryKey,
  { label: string; emoji: string; className: string; filterClass: string }
> = {
  camino:   { label: 'Camino personal', emoji: '🛤',  className: 'cat--camino',   filterClass: 'filter--camino' },
  bootcamp: { label: 'Bootcamp',        emoji: '🎓', className: 'cat--bootcamp', filterClass: 'filter--bootcamp' },
  codigo:   { label: 'Código',          emoji: '💻', className: 'cat--codigo',   filterClass: 'filter--codigo' },
  trabajo:  { label: 'Vida laboral',    emoji: '💼', className: 'cat--trabajo',  filterClass: 'filter--trabajo' },
};

export function formatDate(date: Date, locale = 'es-ES'): string {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(date);
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function decorate(entry: CollectionEntry<'blog'>) {
  const categoryKey = entry.data.category as CategoryKey;
  return {
    id: entry.id,
    href: `/blog/${entry.id}/`,
    chapter: entry.data.chapter ?? null,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.pubDate,
    heroImage: entry.data.heroImage,
    tags: entry.data.tags,
    featured: entry.data.featured,
    categoryKey,
    category: CATEGORIES[categoryKey],
    minutes: readingTime(entry.body),
    entry,
  };
}

export type Post = ReturnType<typeof decorate>;

/**
 * Every real article, newest first.
 * Excludes drafts and `portada.md` (an index page, not an article — it has
 * no `chapter`). Its URL still builds; it just never appears in listings.
 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog');
  return all
    .filter((e) => !e.data.draft && e.data.chapter != null)
    .map(decorate)
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

/** Every entry that should get a page, including portada. */
export async function getRoutableEntries() {
  return (await getCollection('blog')).filter((e) => !e.data.draft);
}
