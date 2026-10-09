import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Her oyun: src/content/games/en/<slug>.md (zorunlu) + src/content/games/tr/<slug>.md (isteğe bağlı).
// Türkçe dosya yoksa /tr sayfasında İngilizce içerik gösterilir.
const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['released', 'in-development', 'announced']),
    releaseDate: z.string().optional(), // serbest metin: "2027", "Q2 2027", "12 Mart 2027"
    genres: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]),
    cover: z.string(), // /public altındaki yol, 16:9 önerilir (1920x1080)
    screenshots: z.array(z.string()).default([]),
    trailer: z.string().optional(), // YouTube video ID'si (youtube.com/watch?v=<ID>)
    steamAppId: z.string().optional(), // Steam widget'ı için
    stores: z.array(z.object({ name: z.string(), url: z.string() })).default([]),
    features: z.array(z.string()).default([]),
    featured: z.boolean().default(false), // ana sayfada büyük gösterilir
    order: z.number().default(100), // küçük sayı önce gelir
    draft: z.boolean().default(false), // true ise sitede görünmez
  }),
});

export const collections = { games };
