import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Globe2, Plane, Users } from 'lucide-react';
import { Inquiry, Translated } from '../components';
import { ticketOptions, translations } from '../i18n';
import { assetConfig } from '../config';

export const metadata: Metadata = { title: 'Air ticket inquiries', description: 'Ask UNIVIA about domestic, international, one-way, round-trip, and group flight journeys.', alternates: { canonical: '/air-tickets' }, openGraph: { title: 'Air ticket inquiries | UNIVIA', description: 'Ask UNIVIA about your next flight journey.', url: '/air-tickets', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

const optionIcons = { domestic: Plane, international: Globe2, group: Users, corporate: BriefcaseBusiness };

export default function AirTickets() {
  const en = translations.en.pages.tickets;
  const my = translations.my.pages.tickets;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container"><div className="ticket-options">{ticketOptions.map((option) => { const Icon = optionIcons[option.id]; return <article className="option-card" key={option.id}><Icon aria-hidden="true" /><h2><Translated value={option.title} /></h2><p><Translated value={option.text} /></p></article>; })}</div><div className="notice"><strong><Translated value={{ en: 'Inquiry only', my: 'မေးမြန်းမှုသာဖြစ်သည်' }} /></strong><span><Translated value={{ en: en.note, my: my.note }} /></span></div><div className="inquiry-page-form"><Inquiry /></div><p className="centered-link"><Translated value={{ en: en.contact, my: my.contact }} /> <Link href="/contact"><Translated value={{ en: 'Contact us', my: 'ဆက်သွယ်ရန်' }} /><ArrowRight size={15} aria-hidden="true" /></Link></p></section></main>;
}
