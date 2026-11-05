/* eslint-disable @next/next/no-css-tags */
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
  icons: { icon: [{ url: '/brand/univia-mark-black.svg', type: 'image/svg+xml' }], shortcut: '/brand/univia-mark-black.svg', apple: '/brand/univia-mark-black.svg' },
  openGraph: { type: 'website', locale: 'en_US', alternateLocale: ['my_MM'], siteName: siteConfig.brandName, title: `${siteConfig.brandName} | ${siteConfig.tagline}`, description: siteConfig.description, url: siteConfig.publicUrl, images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: `${siteConfig.brandName} travel and airline ticketing` }] },
  twitter: { card: 'summary_large_image', title: `${siteConfig.brandName} | ${siteConfig.tagline}`, description: siteConfig.description, images: [assetConfig.socialShare] },
};
export const viewport: Viewport = { themeColor: '#032773', colorScheme: 'light' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion="quiet"><head><meta name="page-type" content="service" /><meta name="site-kind" content="other" /><link rel="stylesheet" href="/motion.css" /></head><body><SiteShell>{children}</SiteShell></body></html>; }
