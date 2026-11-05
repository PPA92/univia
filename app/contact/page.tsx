import Image from 'next/image';
import type { Metadata } from 'next';
import { Clock3, Mail, MapPin, MessageCircle } from 'lucide-react';
import { ContactInquiry, Translated } from '../components';
import { assetConfig, contactConfig } from '../config';
import { translations } from '../i18n';

export const metadata: Metadata = { title: 'Contact UNIVIA', description: 'Prepare a travel or airline ticket inquiry for UNIVIA through WhatsApp or email.', alternates: { canonical: '/contact' }, openGraph: { title: 'Contact UNIVIA', description: 'Prepare a travel or airline ticket inquiry through WhatsApp or email.', url: '/contact', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

export default function Contact() {
  const en = translations.en.pages.contact;
  const my = translations.my.pages.contact;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container contact-layout"><div><div className="contact-image"><Image src={assetConfig.contact} alt="Traveller viewing an airport departure board" fill sizes="(max-width: 900px) 100vw, 42vw" /></div><div className="contact-details card"><h2><Translated value={{ en: en.channels, my: my.channels }} /></h2><p className="placeholder-note"><Translated value={{ en: en.inquiryNote, my: my.inquiryNote }} /></p><div className="contact-detail"><MessageCircle aria-hidden="true" /><div><strong><Translated value={{ en: en.whatsapp, my: my.whatsapp }} /></strong><a href={`https://wa.me/${contactConfig.whatsappNumber}`}>{contactConfig.phoneDisplay}</a></div></div><div className="contact-detail"><Mail aria-hidden="true" /><div><strong><Translated value={{ en: en.email, my: my.email }} /></strong><a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a></div></div><div className="contact-detail"><MapPin aria-hidden="true" /><div><strong><Translated value={{ en: en.address, my: my.address }} /></strong><span>{contactConfig.officeAddress}</span></div></div><div className="contact-detail"><Clock3 aria-hidden="true" /><div><strong><Translated value={{ en: en.hours, my: my.hours }} /></strong><span>{contactConfig.businessHours}</span></div></div>{contactConfig.facebookUrl && <a className="inline-link" href={contactConfig.facebookUrl} target="_blank" rel="noreferrer"><Translated value={{ en: en.facebook, my: my.facebook }} /></a>}</div></div><ContactInquiry /></section></main>;
}
