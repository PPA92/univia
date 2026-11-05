import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Cards, Translated } from '../components';
import { assetConfig } from '../config';
import { translations } from '../i18n';

export const metadata: Metadata = { title: 'Travel services', description: 'Explore UNIVIA domestic, international, group, corporate, and travel consultation inquiry services.', alternates: { canonical: '/services' }, openGraph: { title: 'Travel services | UNIVIA', description: 'Explore UNIVIA travel inquiry services.', url: '/services', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

export default function Services() {
  const en = translations.en.pages.services;
  const my = translations.my.pages.services;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container"><Cards kind="service" /><div className="destination-cta"><div><h2><Translated value={{ en: en.contact, my: my.contact }} /></h2><p><Translated value={{ en: 'A short inquiry is enough to begin. Share the context and preferred route.', my: 'စတင်ရန် မေးမြန်းမှုတိုတစ်ခု လုံလောက်ပါသည်။ အခြေအနေနှင့် နှစ်သက်သောလမ်းကြောင်းကို မျှဝေပါ။' }} /></p></div><Link href="/contact" className="button button-primary"><Translated value={{ en: 'Contact UNIVIA', my: 'UNIVIA သို့ ဆက်သွယ်ရန်' }} /><ArrowRight size={17} aria-hidden="true" /></Link></div></section></main>;
}
