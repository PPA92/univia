export type PhotoRecord = {
  id: string;
  url: string;
  subject: string;
  source: 'library-stand-in';
  standIn: true;
  sourceLabel: string;
  creditUrl: string;
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
  phoneDisplay: '',
  whatsappNumber: '',
  email: '',
  officeAddress: '',
  facebookUrl: '',
  businessHours: '',
} as const;

const unsplash = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;

export const travelPhotos = {
  hero: { id: 'hero-airport', url: unsplash('photo-1436491865332-7a61a109cc05'), subject: 'aircraft above clouds' },
  inquiry: { id: 'inquiry-terminal', url: unsplash('photo-1517479149777-5f3b1511d5ad'), subject: 'airport departure board' },
  about: { id: 'about-travelers', url: unsplash('photo-1527631746610-bca00a040d60'), subject: 'travelers on a mountain route' },
  process: { id: 'process-map', url: unsplash('photo-1488646953014-85cb44e25828'), subject: 'open travel map' },
  contact: { id: 'contact-terminal', url: unsplash('photo-1542296332-2e4473faf563'), subject: 'aircraft at a terminal' },
  destinations: {
    bangkok: { id: 'bangkok-city', url: unsplash('photo-1508009603885-50cf7c579365', 1000), subject: 'Bangkok city and temple roof' },
    singapore: { id: 'singapore-skyline', url: unsplash('photo-1525625293386-3f8f99389edd', 1000), subject: 'Singapore skyline' },
    kualaLumpur: { id: 'kuala-lumpur', url: unsplash('photo-1596422846543-75c6fc197f07', 1000), subject: 'Kuala Lumpur skyline' },
    dubai: { id: 'dubai-skyline', url: unsplash('photo-1512453979798-5ea266f8880c', 1000), subject: 'Dubai skyline' },
    tokyo: { id: 'tokyo-street', url: unsplash('photo-1540959733332-eab4deabeeaf', 1000), subject: 'Tokyo street and skyline' },
    seoul: { id: 'seoul-city', url: unsplash('photo-1538485399081-7c897b4d7f0a', 1000), subject: 'Seoul city skyline' },
    phuket: { id: 'phuket-coast', url: unsplash('photo-1589394815804-964ed0be2eb5', 1000), subject: 'Phuket coastline' },
    yangon: { id: 'yangon-street', url: unsplash('photo-1518005020951-eccb494ad742', 1000), subject: 'Yangon street and pagoda' },
    mandalay: { id: 'mandalay-temple', url: unsplash('photo-1548013146-72479768bada', 1000), subject: 'Mandalay temple architecture' },
  },
  services: {
    domestic: { id: 'domestic-flight', url: unsplash('photo-1436491865332-7a61a109cc05', 1200), subject: 'aircraft in flight' },
    international: { id: 'international-route', url: unsplash('photo-1488646953014-85cb44e25828', 1200), subject: 'travel map and passport' },
    corporate: { id: 'corporate-travel', url: unsplash('photo-1556761175-b413da4baf72', 1200), subject: 'travel planning desk' },
    assistance: { id: 'travel-assistance', url: unsplash('photo-1542296332-2e4473faf563', 1200), subject: 'aircraft at the gate' },
  },
} as const;

export type TravelPhoto = (typeof travelPhotos)[keyof typeof travelPhotos] extends infer T ? T : never;
export const photoCatalog: PhotoRecord[] = Object.values(travelPhotos).flatMap((entry) => {
  if ('url' in entry) return [entry];
  return Object.values(entry);
}).map((photo) => ({ ...photo, source: 'library-stand-in' as const, standIn: true, sourceLabel: 'Unsplash', creditUrl: 'https://unsplash.com' }));

export type AssetConfig = typeof travelPhotos;
export type ContactChannel = 'whatsapp' | 'mailto';

export const assetConfig = {
  ...travelPhotos,
  socialShare: '/brand/univia-mark-black.svg',
  footerBackground: '',
} as const;

export function isWhatsAppConfigured(): boolean { return contactConfig.whatsappNumber.trim().length > 0; }
export function isEmailConfigured(): boolean { return contactConfig.email.trim().length > 0; }
export function buildWhatsAppUrl(message: string): string {
  if (!isWhatsAppConfigured()) return '';
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function buildMailtoUrl(subject: string, body: string): string {
  if (!isEmailConfigured()) return '';
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
