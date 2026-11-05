import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FAQ, Translated } from '../components';
import { assetConfig } from '../config';
import { translations } from '../i18n';

export const metadata: Metadata = { title: 'Frequently asked questions', description: 'Answers to common UNIVIA flight inquiry and contact questions.', alternates: { canonical: '/faq' }, openGraph: { title: 'FAQ | UNIVIA', description: 'Answers to common UNIVIA flight inquiry questions.', url: '/faq', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

export default function Faq() {
  const en = translations.en.pages.faq;
  const my = translations.my.pages.faq;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container"><FAQ /><div className="faq-cta"><p><Translated value={{ en: en.contact, my: my.contact }} /></p><Link href="/contact" className="inline-link"><Translated value={{ en: 'Contact UNIVIA', my: 'UNIVIA သို့ ဆက်သွယ်ရန်' }} /><ArrowRight size={15} aria-hidden="true" /></Link></div></section></main>;
}
