import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { assetConfig } from '../config';
import { Translated } from '../components';
import { translations } from '../i18n';

export const metadata: Metadata = { title: 'About UNIVIA', description: 'Learn about the configurable UNIVIA travel and airline ticket inquiry experience.', alternates: { canonical: '/about' }, openGraph: { title: 'About UNIVIA', description: 'Learn about the configurable UNIVIA travel and airline ticket inquiry experience.', url: '/about', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

export default function About() {
  const en = translations.en.pages.about;
  const my = translations.my.pages.about;
  return <main>
    <section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.intro, my: my.intro }} /></p></div></section>
    <section className="section container two-column-intro"><div className="intro-image"><Image src={assetConfig.about} alt="Travellers looking toward a mountain landscape" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="intro-copy"><p className="eyebrow"><Translated value={{ en: 'A configurable foundation', my: 'ပြင်ဆင်နိုင်သော အခြေခံ' }} /></p><p className="lead"><Translated value={{ en: en.placeholder, my: my.placeholder }} /></p><p><Translated value={{ en: en.whyText, my: my.whyText }} /></p><Link href="/contact" className="button button-primary"><Translated value={{ en: 'Talk to UNIVIA', my: 'UNIVIA နှင့် ဆွေးနွေးရန်' }} /><ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    <section className="section section-white"><div className="container"><div className="values-grid"><article className="value-card"><Compass aria-hidden="true" /><h2><Translated value={{ en: en.mission, my: my.mission }} /></h2><p><Translated value={{ en: en.missionText, my: my.missionText }} /></p></article><article className="value-card"><Sparkles aria-hidden="true" /><h2><Translated value={{ en: en.vision, my: my.vision }} /></h2><p><Translated value={{ en: en.visionText, my: my.visionText }} /></p></article><article className="value-card"><HeartHandshake aria-hidden="true" /><h2><Translated value={{ en: en.values, my: my.values }} /></h2><p><Translated value={{ en: en.valuesText, my: my.valuesText }} /></p></article></div></div></section>
    <section className="section container narrow-section"><p className="eyebrow"><Translated value={{ en: en.why, my: my.why }} /></p><h2 className="section-title"><Translated value={{ en: 'A clear starting point, without overpromising.', my: 'မလိုအပ်သော ကတိများမပါဘဲ ရှင်းလင်းသော အစပြုရာ။' }} /></h2><p className="lead"><Translated value={{ en: en.whyText, my: my.whyText }} /></p></section>
  </main>;
}
