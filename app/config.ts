export const siteConfig = {
  brandName: 'UNIVIA',
  legalName: 'Univia Co.,Ltd',
  tagline: 'Your Journey. Our Commitment.',
  alternateTagline: 'Connecting You to the World.',
  publicUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://univia.example',
  description:
    'A premium travel and airline ticket inquiry experience for domestic and international journeys.',
} as const;

export const contactConfig = {
  phoneDisplay: '+95 XXX XXX XXX',
  whatsappNumber: '',
  email: '',
  emailPlaceholder: '[Configure email]',
  officeAddress: '[Configure office address]',
  facebookUrl: '',
  businessHours: '[Configure business hours]',
} as const;

export const assetConfig = {
  hero:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85',
  about:
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=85',
  contact:
    'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=85',
  corporate:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  assistance:
    'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85',
  destinations: {
    bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80',
    singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80',
    kualaLumpur: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80',
    dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80',
    seoul: 'https://images.unsplash.com/photo-1538485399081-7c897b4d7f0a?auto=format&fit=crop&w=900&q=80',
    phuket: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80',
    yangon: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
    mandalay: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
  },
  services: {
    domesticFlights: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    internationalFlights: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    corporateTravel: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    consultation: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80',
  },
  promo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80',
  footerBackground: '/footer-pattern.svg',
  socialShare: '/social-share.png',
} as const;

export type AssetConfig = typeof assetConfig;

export type ContactChannel = 'whatsapp' | 'mailto';

export function isWhatsAppConfigured(): boolean {
  return contactConfig.whatsappNumber.trim().length > 0;
}

export function isEmailConfigured(): boolean {
  return contactConfig.email.trim().length > 0;
}

export function buildWhatsAppUrl(message: string): string {
  if (!isWhatsAppConfigured()) return '';
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  if (!isEmailConfigured()) return '';
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
