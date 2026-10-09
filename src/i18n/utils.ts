import { ui, defaultLang, type Lang, type UIKey } from './ui';

// Site bir alt yolda yayınlanabilir (GitHub Pages: /pbh-studio-website). Tüm iç linkler bundan geçer.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/images/x.jpg' → '/pbh-studio-website/images/x.jpg'; harici linklere dokunmaz. */
export function withBase(path: string): string {
  if (/^([a-z]+:|#)/i.test(path)) return path;
  return BASE + (path.startsWith('/') ? path : `/${path}`);
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** '/games' → '/tr/games' for Turkish, unchanged for English. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return withBase(path);
  return withBase(path === '/' ? `/${lang}` : `/${lang}${path}`);
}

/** Strips the language prefix from a pathname: '/tr/games/x' → '/games/x'. */
export function stripLang(pathname: string): string {
  const withoutBase = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  const stripped = withoutBase.replace(/^\/tr(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped.replace(/(.)\/$/, '$1');
}

export function pick<T>(value: Record<Lang, T>, lang: Lang): T {
  return value[lang] ?? value[defaultLang];
}
