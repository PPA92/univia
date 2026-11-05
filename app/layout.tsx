import type { Metadata } from 'next';
import './globals.css';
import { assetConfig, siteConfig } from './config';
import { SiteShell } from './components';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.publicUrl),
  title: { default: `${siteConfig.brandName} | ${siteConfig.tagline}`, template: `%s | ${siteConfig.brandName}` },
  description: siteConfig.description,
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.publicUrl,
    images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: `${siteConfig.brandName} travel and airline ticketing` }],
  },
  twitter: { card: 'summary_large_image', title: siteConfig.brandName, description: siteConfig.description, images: [assetConfig.socialShare] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
