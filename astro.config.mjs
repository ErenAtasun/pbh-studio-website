// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH GitHub Pages yayınında workflow tarafından verilir
// (örn. https://erenatasun.github.io + /pbh-studio-website). Kendi domainimize geçince ikisi de gerekmez.
// TODO: domain alındığında varsayılan adresi gerçek domainle değiştir.
const site = process.env.SITE_URL || 'https://pbhstudio.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  devToolbar: { enabled: false },
  site,
  base,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
});
