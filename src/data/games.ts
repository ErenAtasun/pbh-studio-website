import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '../i18n/ui';
import { withBase } from '../i18n/utils';

export type Game = CollectionEntry<'games'> & { slug: string };

/** Games for a language; falls back to the English entry when a translation is missing. */
export async function getGames(lang: Lang): Promise<Game[]> {
  const all = await getCollection('games', ({ data }) => !data.draft);
  const bySlug = new Map<string, Game>();

  for (const entry of all) {
    const [entryLang, slug] = entry.id.split('/');
    if (entryLang !== defaultLang && entryLang !== lang) continue;
    // Prefer the requested language over the default one.
    if (bySlug.has(slug) && entryLang !== lang) continue;
    // Görsel yolları /public köküne göre yazılır; yayın alt yoluna göre burada düzeltilir.
    const data = { ...entry.data, cover: withBase(entry.data.cover), screenshots: entry.data.screenshots.map(withBase) };
    bySlug.set(slug, { ...entry, data, slug });
  }

  return [...bySlug.values()].sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}
