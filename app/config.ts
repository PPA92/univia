export type PhotoSource = 'brand-package' | 'library-stand-in';

export type PhotoRecord = {
  id: string;
  url: string;
  subject: string;
  source: PhotoSource;
  standIn: boolean;
  sourceLabel: string;
  creditUrl?: string;
  rightsNote?: string;
};

export const siteConfig = {
  brandName: 'UNIVIA',
  legalName: 'Univia Co.,Ltd',
  tagline: 'Your Journey. Our Commitment.',
  alternateTagline: 'Flight inquiries for the journeys ahead.',
  publicUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://univia.example',
  description: 'A premium travel and airline ticket inquiry experience for domestic and international journeys.',
} as const;

export const contactConfig = {
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  officeAddress: process.env.NEXT_PUBLIC_OFFICE_ADDRESS ?? '',
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
  businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? '',
} as const;

const unsplash = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;

export const travelPhotos = {
  hero: { id: 'hero-mount-fuji', url: '/brand-package/photos/japan-mount-fuji.jpg', subject: 'Mount Fuji and spring blossoms' },
  inquiry: { id: 'inquiry-terminal', url: unsplash('photo-1517479149777-5f3b1511d5ad'), subject: 'airport departure board' },
  about: { id: 'about-travelers', url: unsplash('photo-1527631746610-bca00a040d60'), subject: 'travelers on a mountain route' },
  process: { id: 'process-map', url: unsplash('photo-1488646953014-85cb44e25828'), subject: 'open travel map' },
  contact: { id: 'contact-terminal', url: unsplash('photo-1542296332-2e4473faf563'), subject: 'aircraft at a terminal' },
  destinationHero: { id: 'destination-wat-arun', url: '/brand-package/photos/thailand-wat-arun.jpg', subject: 'Wat Arun at sunset' },
  destinations: {
    bangkok: { id: 'bangkok-wat-arun', url: '/brand-package/photos/thailand-wat-arun.jpg', subject: 'Wat Arun at sunset' },
    singapore: { id: 'singapore-skyline', url: unsplash('photo-1525625293386-3f8f99389edd', 1000), subject: 'Singapore skyline' },
    kualaLumpur: { id: 'kuala-lumpur-petronas', url: '/brand-package/photos/malaysia-petronas-towers.jpg', subject: 'Petronas Towers at dusk' },
    dubai: { id: 'dubai-skyline', url: unsplash('photo-1512453979798-5ea266f8880c', 1000), subject: 'Dubai skyline' },
    tokyo: { id: 'tokyo-street', url: unsplash('photo-1540959733332-eab4deabeeaf', 1000), subject: 'Tokyo street and skyline' },
    seoul: { id: 'seoul-tower', url: '/brand-package/photos/south-korea-seoul-tower.jpg', subject: 'N Seoul Tower in autumn' },
    phuket: { id: 'phuket-coast', url: unsplash('photo-1589394815804-964ed0be2eb5', 1000), subject: 'Phuket coastline' },
    yangon: { id: 'yangon-street', url: unsplash('photo-1518005020951-eccb494ad742', 1000), subject: 'Yangon street and pagoda' },
    mandalay: { id: 'mandalay-temple', url: unsplash('photo-1548013146-72479768bada', 1000), subject: 'Mandalay temple architecture' },
  },
  services: {
    domestic: { id: 'domestic-flight', url: unsplash('photo-1556388158-158ea5ccacbd', 1200), subject: 'aircraft at a gate' },
    international: { id: 'international-route', url: unsplash('photo-1494783367193-149034c05e8f', 1200), subject: 'road through a mountain route' },
    corporate: { id: 'corporate-travel', url: unsplash('photo-1556761175-b413da4baf72', 1200), subject: 'travel planning desk' },
    assistance: { id: 'travel-assistance', url: unsplash('photo-1529070538774-1843cb3265df', 1200), subject: 'travel documents on a desk' },
    review: { id: 'review-options', url: unsplash('photo-1452421822248-d4c2b47f0c81', 1200), subject: 'route notes and a compass' },
    decide: { id: 'decide-route', url: unsplash('photo-1473445361085-b9a07f55608b', 1200), subject: 'path through a forest' },
  },
} as const;

export type TravelPhoto = (typeof travelPhotos)[keyof typeof travelPhotos] extends infer T ? T : never;
export const photoCatalog: PhotoRecord[] = Object.values(travelPhotos).flatMap((entry) => {
  if ('url' in entry) return [entry];
  return Object.values(entry);
}).map((photo) => photo.url.startsWith('/brand-package/')
  ? { ...photo, source: 'brand-package' as const, standIn: false, sourceLabel: 'UNIVIA brand package, supplied in univiaReels-main/photos-src', rightsNote: 'The source package notes that photo rights are unconfirmed.' }
  : { ...photo, source: 'library-stand-in' as const, standIn: true, sourceLabel: 'Unsplash', creditUrl: 'https://unsplash.com' });

export type AssetConfig = typeof travelPhotos;
export type ContactChannel = 'whatsapp' | 'mailto';

export const assetConfig = {
  ...travelPhotos,
  socialShare: '/brand/univia-mark-black.svg',
  footerBackground: '',
} as const;

function normaliseWhatsAppNumber(): string { return contactConfig.whatsappNumber.replace(/[^\d]/g, ''); }
export function isWhatsAppConfigured(): boolean { return normaliseWhatsAppNumber().length > 0; }
export function isEmailConfigured(): boolean { return contactConfig.email.trim().length > 0; }
export function buildWhatsAppUrl(message: string): string {
  if (!isWhatsAppConfigured()) return '';
  return `https://wa.me/${normaliseWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
}
export function buildMailtoUrl(subject: string, body: string): string {
  if (!isEmailConfigured()) return '';
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
