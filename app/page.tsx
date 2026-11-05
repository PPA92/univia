import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Compass, Globe2, Headphones, Play, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { assetConfig, siteConfig } from './config';
import { benefits, faqs, promoContent, testimonials } from './data';
import { Cards, FAQAccordion, Inquiry, Translated } from './components';
import { translations } from './i18n';

export const metadata: Metadata = {
  title: 'Premium travel and airline ticket inquiries',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: { title: `${siteConfig.brandName} | ${siteConfig.tagline}`, description: siteConfig.description, url: '/', images: [{ url: assetConfig.socialShare, width: 1200, height: 630, alt: 'UNIVIA travel and airline ticket inquiries' }] },
};

const benefitIcons = { calendar: CalendarDays, globe: Globe2, headphones: Headphones, compass: Compass };

export default function Home() {
  const copy = translations.en.pages;
  return <main>
    <section className="hero hero-home">
      <Image src={assetConfig.hero} alt="Commercial aircraft above soft clouds" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="container hero-content fade">
        <p className="eyebrow hero-eyebrow"><Translated value={{ en: copy.home.eyebrow, my: translations.my.pages.home.eyebrow }} /></p>
        <h1><Translated value={{ en: copy.home.title, my: translations.my.pages.home.title }} /></h1>
        <p className="hero-description"><Translated value={{ en: copy.home.description, my: translations.my.pages.home.description }} /></p>
        <div className="hero-actions">
          <Link href="#inquiry" className="button button-primary"><Translated value={{ en: 'Book your flight', my: 'လေယာဉ်ခရီးစဉ်မေးရန်' }} /><ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/destinations" className="button button-ghost"><Translated value={{ en: copy.home.explore, my: translations.my.pages.home.explore }} /></Link>
        </div>
      </div>
      <div className="hero-stamp" aria-hidden="true"><ShieldCheck size={17} /> Thoughtful travel planning</div>
    </section>

    <section id="inquiry" className="container inquiry-overlap"><Inquiry /></section>

    <section className="section container">
      <div className="section-heading split-heading">
        <div><p className="eyebrow"><Translated value={{ en: 'Go further', my: 'ပိုမိုဝေးဝေးသွားပါ' }} /></p><h2><Translated value={{ en: copy.home.destinations, my: translations.my.pages.home.destinations }} /></h2><p><Translated value={{ en: copy.home.destinationsDescription, my: translations.my.pages.home.destinationsDescription }} /></p></div>
        <Link className="inline-link" href="/destinations"><Translated value={{ en: 'View all destinations', my: 'ခရီးစဉ်နေရာအားလုံးကြည့်ရန်' }} /><ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
      <Cards kind="dest" limit={6} />
    </section>

    <section className="section section-white">
      <div className="container">
        <div className="section-heading"><p className="eyebrow"><Translated value={{ en: 'Why UNIVIA', my: 'UNIVIA ကိုရွေးချယ်ရန်' }} /></p><h2><Translated value={{ en: copy.home.reasons, my: translations.my.pages.home.reasons }} /></h2><p><Translated value={{ en: copy.home.reasonsDescription, my: translations.my.pages.home.reasonsDescription }} /></p></div>
        <div className="benefit-grid">{benefits.map((benefit) => { const Icon = benefitIcons[benefit.icon]; return <article className="benefit-card" key={benefit.id}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3><Translated value={benefit.title} /></h3><p><Translated value={benefit.description} /></p></article>; })}</div>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading split-heading"><div><p className="eyebrow"><Translated value={{ en: 'Considered support', my: 'စဉ်းစားပေးသော ကူညီမှု' }} /></p><h2><Translated value={{ en: copy.home.services, my: translations.my.pages.home.services }} /></h2><p><Translated value={{ en: copy.home.servicesDescription, my: translations.my.pages.home.servicesDescription }} /></p></div><Link className="inline-link" href="/services"><Translated value={{ en: 'See all services', my: 'ဝန်ဆောင်မှုအားလုံးကြည့်ရန်' }} /><ArrowRight size={15} aria-hidden="true" /></Link></div>
      <Cards kind="service" limit={6} />
    </section>

    <section className="promo-section container">
      <div className="promo-image"><Image src={promoContent.image} alt="Airplane wing seen above the clouds" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="promo-copy"><p className="eyebrow"><Translated value={{ en: copy.home.promoEyebrow, my: translations.my.pages.home.promoEyebrow }} /></p><h2><Translated value={promoContent.title} /></h2><p><Translated value={promoContent.description} /></p><div className="promo-placeholder"><Play size={18} aria-hidden="true" /><span><Translated value={{ en: 'Optional promotional video placeholder', my: 'ရွေးချယ်နိုင်သော ခရီးသွားဗီဒီယို နေရာယူစာသား' }} /></span></div></div>
    </section>

    <section className="section section-white">
      <div className="container narrow-section"><div className="section-heading"><p className="eyebrow"><Translated value={{ en: copy.home.testimonials, my: translations.my.pages.home.testimonials }} /></p><h2><Translated value={{ en: 'Feedback will be added with approval.', my: 'အတည်ပြုချက်ရရှိသောအခါ တုံ့ပြန်ချက်များ ထည့်သွင်းပါမည်။' }} /></h2><p><Translated value={{ en: copy.home.testimonialsDescription, my: translations.my.pages.home.testimonialsDescription }} /></p></div>
        {testimonials.map((testimonial) => <blockquote className="testimonial-placeholder" key={testimonial.id}><p>“<Translated value={testimonial.quote} />”</p><cite><Translated value={testimonial.attribution} /></cite></blockquote>)}
      </div>
    </section>

    <section className="section container"><div className="section-heading centered"><p className="eyebrow"><Translated value={{ en: copy.home.faq, my: translations.my.pages.home.faq }} /></p><h2><Translated value={{ en: 'Useful answers before you go.', my: 'မသွားမီ သိထားနိုင်သော အဖြေများ။' }} /></h2><p><Translated value={{ en: copy.home.faqDescription, my: translations.my.pages.home.faqDescription }} /></p></div><FAQAccordion items={faqs.slice(0, 3)} /></section>

    <section className="contact-cta"><div className="container contact-cta-inner"><div><p className="eyebrow"><Translated value={{ en: 'Your next step', my: 'သင်၏နောက်တစ်ဆင့်' }} /></p><h2><Translated value={{ en: copy.home.contactTitle, my: translations.my.pages.home.contactTitle }} /></h2><p><Translated value={{ en: copy.home.contactDescription, my: translations.my.pages.home.contactDescription }} /></p></div><Link href="/contact" className="button button-secondary"><Translated value={{ en: 'Contact UNIVIA', my: 'UNIVIA သို့ ဆက်သွယ်ရန်' }} /><ArrowRight size={17} aria-hidden="true" /></Link></div></section>
  </main>;
}
