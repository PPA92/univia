import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Globe2, Plane, Users } from 'lucide-react';
import { Inquiry, Translated } from '../components';
import { translations } from '../i18n';
import { assetConfig } from '../config';

export const metadata: Metadata = { title: 'Air ticket inquiries', description: 'Ask UNIVIA about domestic, international, one-way, round-trip, and group flight journeys.', alternates: { canonical: '/air-tickets' }, openGraph: { title: 'Air ticket inquiries | UNIVIA', description: 'Ask UNIVIA about your next flight journey.', url: '/air-tickets', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] } };

const options = [
  { icon: Plane, title: { en: 'Domestic flights', my: 'ပြည်တွင်းလေယာဉ်များ' }, text: { en: 'Share your preferred route and dates for travel within Myanmar.', my: 'မြန်မာနိုင်ငံအတွင်း ခရီးစဉ်အတွက် နှစ်သက်သောလမ်းကြောင်းနှင့် ရက်စွဲများကို မျှဝေပါ။' } },
  { icon: Globe2, title: { en: 'International flights', my: 'နိုင်ငံတကာလေယာဉ်များ' }, text: { en: 'Start a conversation about routes beyond the country.', my: 'နိုင်ငံအပြင်ဘက် ခရီးစဉ်လမ်းကြောင်းများအကြောင်း စကားစတင်ပြောပါ။' } },
  { icon: Users, title: { en: 'Group journeys', my: 'အဖွဲ့လိုက် ခရီးစဉ်များ' }, text: { en: 'Include your group size and travel context in the inquiry.', my: 'မေးမြန်းမှုတွင် အဖွဲ့အရွယ်အစားနှင့် ခရီးစဉ်အခြေအနေကို ထည့်ပါ။' } },
  { icon: BriefcaseBusiness, title: { en: 'Corporate travel', my: 'ကုမ္ပဏီခရီးစဉ်' }, text: { en: 'Discuss practical requirements for business travel planning.', my: 'စီးပွားရေးခရီးစဉ် စီစဉ်မှုအတွက် လိုအပ်ချက်များကို ဆွေးနွေးပါ။' } },
];

export default function AirTickets() {
  const en = translations.en.pages.tickets;
  const my = translations.my.pages.tickets;
  return <main><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><Translated value={{ en: en.eyebrow, my: my.eyebrow }} /></p><h1><Translated value={{ en: en.title, my: my.title }} /></h1><p><Translated value={{ en: en.description, my: my.description }} /></p></div></section><section className="section container"><div className="ticket-options">{options.map(({ icon: Icon, title, text }) => <article className="option-card" key={title.en}><Icon aria-hidden="true" /><h2><Translated value={title} /></h2><p><Translated value={text} /></p></article>)}</div><div className="notice"><strong><Translated value={{ en: 'Inquiry only', my: 'မေးမြန်းမှုသာဖြစ်သည်' }} /></strong><span><Translated value={{ en: en.note, my: my.note }} /></span></div><div className="inquiry-page-form"><Inquiry /></div><p className="centered-link"><Translated value={{ en: en.contact, my: my.contact }} /> <Link href="/contact"><Translated value={{ en: 'Contact us', my: 'ဆက်သွယ်ရန်' }} /><ArrowRight size={15} aria-hidden="true" /></Link></p></section></main>;
}
