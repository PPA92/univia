import type { Metadata, Viewport } from 'next';
import './globals.css';
import { assetConfig, siteConfig } from './config';
import { SiteShell } from './components';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.publicUrl),
  applicationName: siteConfig.brandName,
  title: { default: `${siteConfig.brandName} | ${siteConfig.tagline}`, template: `%s | ${siteConfig.brandName}` },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], shortcut: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['my_MM'],
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.publicUrl,
    images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: `${siteConfig.brandName} travel and airline ticketing` }],
  },
  twitter: { card: 'summary_large_image', title: `${siteConfig.brandName} | ${siteConfig.tagline}`, description: siteConfig.description, images: [assetConfig.socialShare] },
};

export const viewport: Viewport = { themeColor: '#102A43', colorScheme: 'light' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
