// Stüdyo bilgileri — sitenin her yerinde buradan okunur.
// Boş bırakılan alanlar (url: '') sitede gösterilmez.

export const studio = {
  name: 'PBH Studio',
  fullName: 'Primordial Black Hole Studio',
  // TODO: kurumsal mail açılınca info@<domain> ile değiştir
  email: 'primordialblackholestudio@gmail.com',
  pressEmail: 'primordialblackholestudio@gmail.com',
  location: { en: 'Türkiye', tr: 'Türkiye' },
  // TODO: kuruluş yılı
  founded: '',
  socials: [
    { label: 'Steam', url: '' },
    { label: 'Discord', url: '' },
    { label: 'YouTube', url: '' },
    { label: 'X', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'TikTok', url: '' },
    { label: 'itch.io', url: '' },
  ],
  // Ekip üyeleri. photo: /public altındaki yol (boşsa baş harfler gösterilir)
  team: [
    { name: 'Eren Atasun', role: { en: 'Co-founder', tr: 'Kurucu Ortak' }, photo: '' },
    { name: 'Gonca Arabacı', role: { en: 'Co-founder', tr: 'Kurucu Ortak' }, photo: '' },
  ],
};

export const activeSocials = studio.socials.filter((s) => s.url);
