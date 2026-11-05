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
  whatsappNumber: '95000000000',
  email: 'hello@example.com',
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
  footerBackground: '/footer-pattern.svg',
  socialShare: '/social-share.svg',
} as const;

export type ContactChannel = 'whatsapp' | 'mailto';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
