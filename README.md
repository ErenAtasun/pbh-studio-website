# PBH Studio — Web Sitesi

Primordial Black Hole Studio'nun tanıtım sitesi. [Astro](https://astro.build) ile yapılmış statik bir sitedir; İngilizce (`/`) ve Türkçe (`/tr`) olarak iki dilde yayınlanır.

## Çalıştırma

```bash
npm install      # ilk seferde
npm run dev      # http://localhost:4321 — değişiklikler anında görünür
npm run build    # yayına hazır site dist/ klasörüne üretilir
```

## Sık yapılan işler

### Yeni oyun eklemek
1. `src/content/games/en/pawed-drive.md` dosyasını kopyala, adını oyunun adresi yap: `src/content/games/en/oyun-adi.md` → site adresi `/games/oyun-adi` olur.
2. Türkçesi için aynı adla `src/content/games/tr/oyun-adi.md` oluştur. Yoksa Türkçe sayfada İngilizce metin gösterilir.
3. Görselleri `public/images/games/oyun-adi/` klasörüne koy (kapak 1920×1080 JPG önerilir).
4. Fragman için YouTube video ID'sini `trailer:` alanına yaz (`youtube.com/watch?v=` sonrasındaki kısım).
5. Steam sayfası açılınca `steamAppId:` ve `stores:` alanlarını doldur.

Tüm alanların açıklaması: `src/content.config.ts`. Bir oyunu geçici olarak gizlemek için `draft: true`.

### Stüdyo bilgileri, e-posta, sosyal medya, ekip
`src/data/studio.ts` — boş bırakılan sosyal medya linkleri sitede görünmez.

### Hakkımızda metni
`src/copy/about.en.md` ve `src/copy/about.tr.md`. Üstteki `summary` basın kitinde kullanılır.

### Menü, buton ve başlık metinleri
`src/i18n/ui.ts` — her metnin İngilizce ve Türkçe karşılığı burada.

### Renkler ve yazı tipleri
`src/styles/global.css` dosyasının en üstündeki `:root` bloğu.

### Logo
- Menüdeki işaret: `public/brand/pbh-mark.png` (`src/components/LogoMark.astro`)
- Tarayıcı sekmesi ikonu: `public/favicon.png`, `public/apple-touch-icon.png`
- Basın kiti dosyaları: `public/press/` (sayfadaki liste `src/views/PressPage.astro` içinde)
- Sosyal medya paylaşım görseli: `public/og-default.jpg` (1200×630)

## Şu anki yayın: GitHub Pages (ücretsiz, geçici)

Site **https://erenatasun.github.io/pbh-studio-website/** adresinde yayında.
`main` dalına her `git push` yapıldığında `.github/workflows/deploy.yml` siteyi otomatik derleyip yeniden yayınlar
(GitHub → Actions sekmesinden takip edilebilir, ~1–2 dk).

Site alt yolda (`/pbh-studio-website`) çalıştığı için koddaki tüm iç linkler `withBase()` / `localizePath()`
üzerinden üretilir (`src/i18n/utils.ts`). Yeni bir görsel veya link eklerken bunları kullan.

**Domain alınınca (GitHub Pages'te kalmak istersen):** Repo → Settings → Pages → Custom domain alanına domaini yaz,
DNS'te `CNAME` kaydını `erenatasun.github.io`'ya yönlendir. Alt yol otomatik olarak kalkar, kodda değişiklik gerekmez.

## Alternatif: Cloudflare Pages (ücretsiz)

1. Projeyi GitHub'a yükle.
2. Cloudflare → Workers & Pages → Create → Pages → GitHub reposunu bağla.
3. Ayarlar: Framework preset **Astro**, build komutu `npm run build`, çıktı klasörü `dist`.
4. Custom domains bölümünden domaini bağla.
5. `astro.config.mjs` içindeki `site:` adresini gerçek domainle güncelle.

Her `git push` sonrasında site otomatik olarak yeniden yayınlanır.

## Yapılacaklar
- [ ] Domain al, `astro.config.mjs` → `site` ve `src/data/studio.ts` → e-postaları güncelle
- [ ] Pawed Drive ve Mask Heist ekran görüntüleri / GIF'ler, fragman
- [ ] Mask Heist için gerçek kapak görseli (şu anki geçici)
- [ ] Steam sayfaları açılınca `stores` ve `steamAppId`
- [ ] Ekip fotoğrafları ve rolleri
- [ ] Sosyal medya linkleri
- [ ] Gizlilik politikası (analitik veya form eklenirse KVKK için gerekli)
