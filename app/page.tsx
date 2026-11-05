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
  const myCopy = translations.my.pages;
  return <main>
    <section className="hero hero-home">
      <Image src={assetConfig.hero} alt="Commercial aircraft above soft clouds" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="container hero-content fade">
        <p className="eyebrow hero-eyebrow"><Translated value={{ en: copy.home.eyebrow, my: myCopy.home.eyebrow }} /></p>
        <h1><Translated value={{ en: copy.home.title, my: myCopy.home.title }} /></h1>
        <p className="hero-description"><Translated value={{ en: copy.home.description, my: myCopy.home.description }} /></p>
        <div className="hero-actions">
          <Link href="#inquiry" className="button button-primary"><Translated value={{ en: copy.home.bookFlight, my: myCopy.home.bookFlight }} /><ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/destinations" className="button button-ghost"><Translated value={{ en: copy.home.explore, my: myCopy.home.explore }} /></Link>
        </div>
      </div>
      <div className="hero-stamp" aria-hidden="true"><ShieldCheck size={17} /> <Translated value={{ en: copy.home.heroStamp, my: myCopy.home.heroStamp }} /></div>
    </section>

    <section id="inquiry" className="container inquiry-overlap"><Inquiry /></section>

    <section className="section container">
      <div className="section-heading split-heading">
        <div><p className="eyebrow"><Translated value={{ en: copy.home.destinationsEyebrow, my: myCopy.home.destinationsEyebrow }} /></p><h2><Translated value={{ en: copy.home.destinations, my: myCopy.home.destinations }} /></h2><p><Translated value={{ en: copy.home.destinationsDescription, my: myCopy.home.destinationsDescription }} /></p></div>
        <Link className="inline-link" href="/destinations"><Translated value={{ en: copy.home.viewAllDestinations, my: myCopy.home.viewAllDestinations }} /><ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
      <Cards kind="dest" limit={6} />
    </section>

    <section className="section section-white">
      <div className="container">
        <div className="section-heading"><p className="eyebrow"><Translated value={{ en: copy.home.reasonsEyebrow, my: myCopy.home.reasonsEyebrow }} /></p><h2><Translated value={{ en: copy.home.reasons, my: myCopy.home.reasons }} /></h2><p><Translated value={{ en: copy.home.reasonsDescription, my: myCopy.home.reasonsDescription }} /></p></div>
        <div className="benefit-grid">{benefits.map((benefit) => { const Icon = benefitIcons[benefit.icon]; return <article className="benefit-card" key={benefit.id}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3><Translated value={benefit.title} /></h3><p><Translated value={benefit.description} /></p></article>; })}</div>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading split-heading"><div><p className="eyebrow"><Translated value={{ en: copy.home.servicesEyebrow, my: myCopy.home.servicesEyebrow }} /></p><h2><Translated value={{ en: copy.home.services, my: myCopy.home.services }} /></h2><p><Translated value={{ en: copy.home.servicesDescription, my: myCopy.home.servicesDescription }} /></p></div><Link className="inline-link" href="/services"><Translated value={{ en: copy.home.viewAllServices, my: myCopy.home.viewAllServices }} /><ArrowRight size={15} aria-hidden="true" /></Link></div>
      <Cards kind="service" limit={6} />
    </section>

    <section className="promo-section container">
      <div className="promo-image"><Image src={promoContent.image} alt="Airplane wing seen above the clouds" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="promo-copy"><p className="eyebrow"><Translated value={{ en: copy.home.promoEyebrow, my: myCopy.home.promoEyebrow }} /></p><h2><Translated value={promoContent.title} /></h2><p><Translated value={promoContent.description} /></p><div className="promo-placeholder"><Play size={18} aria-hidden="true" /><span><Translated value={{ en: copy.home.videoPlaceholder, my: myCopy.home.videoPlaceholder }} /></span></div></div>
    </section>

    <section className="section section-white">
      <div className="container narrow-section"><div className="section-heading"><p className="eyebrow"><Translated value={{ en: copy.home.testimonials, my: myCopy.home.testimonials }} /></p><h2><Translated value={{ en: copy.home.testimonialsTitle, my: myCopy.home.testimonialsTitle }} /></h2><p><Translated value={{ en: copy.home.testimonialsDescription, my: myCopy.home.testimonialsDescription }} /></p></div>
        {testimonials.map((testimonial) => <blockquote className="testimonial-placeholder" key={testimonial.id}><p>“<Translated value={testimonial.quote} />”</p><cite><Translated value={testimonial.attribution} /></cite></blockquote>)}
      </div>
    </section>

    <section className="section container"><div className="section-heading centered"><p className="eyebrow"><Translated value={{ en: copy.home.faq, my: myCopy.home.faq }} /></p><h2><Translated value={{ en: copy.home.faqTitle, my: myCopy.home.faqTitle }} /></h2><p><Translated value={{ en: copy.home.faqDescription, my: myCopy.home.faqDescription }} /></p></div><FAQAccordion items={faqs.slice(0, 3)} /></section>

    <section className="contact-cta"><div className="container contact-cta-inner"><div><p className="eyebrow"><Translated value={{ en: copy.home.contactEyebrow, my: myCopy.home.contactEyebrow }} /></p><h2><Translated value={{ en: copy.home.contactTitle, my: myCopy.home.contactTitle }} /></h2><p><Translated value={{ en: copy.home.contactDescription, my: myCopy.home.contactDescription }} /></p></div><Link href="/contact" className="button button-secondary"><Translated value={{ en: copy.home.contactCta, my: myCopy.home.contactCta }} /><ArrowRight size={17} aria-hidden="true" /></Link></div></section>
  </main>;
}
