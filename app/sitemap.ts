import type { MetadataRoute } from 'next';
import { siteConfig } from './config';

const routes = ['', 'about', 'air-tickets', 'destinations', 'services', 'faq', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route ? `/${route}` : '/', siteConfig.publicUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
