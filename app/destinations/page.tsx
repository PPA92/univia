import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Cards, Translated } from '../components';
import { assetConfig } from '../config';
import { translations } from '../i18n';

export const metadata: Metadata = { title: 'Destinations', description: 'Browse domestic and international destination ideas for your next UNIVIA flight inquiry.', alternates: { canonical: '/destinations' }, openGraph: { title: 'Destinations | UNIVIA', description: 'Browse destination ideas for your next flight inquiry.', url: '/destinations', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

export default function Destinations() {
  const en = translations.en.pages.destinations;
  const my = translations.my.pages.destinations;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container"><Cards kind="dest" /><div className="destination-cta"><div><h2><Translated value={{ en: 'Have a destination in mind?', my: 'စိတ်ကူးထဲတွင် ခရီးစဉ်နေရာရှိပါသလား?' }} /></h2><p><Translated value={{ en: 'Tell us your preferred route and dates to start an inquiry.', my: 'မေးမြန်းမှုစတင်ရန် နှစ်သက်သောလမ်းကြောင်းနှင့် ရက်စွဲများကို မျှဝေပါ။' }} /></p></div><Link href="/air-tickets" className="button button-primary"><Translated value={{ en: en.inquiry, my: my.inquiry }} /><ArrowRight size={17} aria-hidden="true" /></Link></div></section></main>;
}
