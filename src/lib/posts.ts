import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, formatDate, type Locale } from '../i18n/ui';

export type CategoryKey = 'camino' | 'bootcamp' | 'codigo' | 'trabajo';
export { CATEGORIES, formatDate };

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * English entries live in src/content/blog/en/, so their id is
 * "en/<slug>". Spanish entries keep their original flat id, which is what
 * preserves every existing production URL.
 */
export function slugOf(entry: { id: string }): string {
  return entry.id.replace(/^en\//, '');
}

export function hrefOf(entry: { id: string; data: { lang: Locale } }): string {
  const slug = slugOf(entry);
  return entry.data.lang === 'en' ? `/en/blog/${slug}/` : `/blog/${slug}/`;
}

function decorate(entry: CollectionEntry<'blog'>, lang: Locale) {
  const categoryKey = entry.data.category as CategoryKey;
  return {
    id: entry.id,
    slug: slugOf(entry),
    href: hrefOf(entry),
    lang,
    chapter: entry.data.chapter ?? null,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.pubDate,
    heroImage: entry.data.heroImage,
    tags: entry.data.tags,
    featured: entry.data.featured,
    translationKey: entry.data.translationKey,
    categoryKey,
    category: CATEGORIES[lang][categoryKey],
    minutes: readingTime(entry.body),
    entry,
  };
}

export type Post = ReturnType<typeof decorate>;

/**
 * Real articles for one locale, newest first.
 * Excludes drafts and `portada.md` (an index page, not an article: no chapter).
 * The English archive therefore only ever shows genuinely translated posts.
 */
export async function getPosts(lang: Locale): Promise<Post[]> {
  const all = await getCollection('blog');
  return all
    .filter((e) => e.data.lang === lang && !e.data.draft && e.data.chapter != null)
    .map((e) => decorate(e, lang))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

/** Everything in one locale that should get a page, including portada. */
export async function getRoutableEntries(lang: Locale) {
  return (await getCollection('blog')).filter((e) => e.data.lang === lang && !e.data.draft);
}

/**
 * translationKey -> { es?: href, en?: href }
 * The language switcher uses this and nothing else, so it can never invent
 * a URL: if a key has no entry for the other locale, there is no link.
 */
export async function getTranslationMap(): Promise<Map<string, Partial<Record<Locale, string>>>> {
  const map = new Map<string, Partial<Record<Locale, string>>>();
  for (const e of await getCollection('blog')) {
    if (e.data.draft) continue;
    const key = e.data.translationKey;
    const current = map.get(key) ?? {};
    current[e.data.lang as Locale] = hrefOf(e);
    map.set(key, current);
  }
  return map;
}

/** The counterpart URL for an article, or null when it is not translated. */
export async function getAlternateHref(
  translationKey: string,
  other: Locale,
): Promise<string | null> {
  const map = await getTranslationMap();
  return map.get(translationKey)?.[other] ?? null;
}
