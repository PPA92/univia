'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, useContext, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Compass,
  Globe2,
  Headphones,
  Mail,
  Menu,
  MessageCircle,
  Plane,
  Repeat2,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import { buildMailtoUrl, buildWhatsAppUrl, contactConfig, siteConfig } from './config';
import { destinations, faqs, services, type FAQItem, type LocalizedText } from './data';
import { getTranslations, languageLabels, type Language } from './i18n';

const languageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: 'en', setLanguage: () => undefined });

export function AppLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
}

function useAppLanguage() {
  return useContext(languageContext);
}

function text(value: LocalizedText, language: Language) {
  return value[language];
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppLanguage();
  const t = getTranslations(language);
  return (
    <div className="language-switcher" aria-label={t.navigation.language}>
      {(Object.keys(languageLabels) as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? 'language-option active' : 'language-option'}
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
        >
          {languageLabels[option]}
        </button>
      ))}
    </div>
  );
}

const navItems = [
  ['about', '/about'],
  ['airTickets', '/air-tickets'],
  ['destinations', '/destinations'],
  ['services', '/services'],
  ['faq', '/faq'],
] as const;

export function SiteHeader() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label={`${siteConfig.brandName} home`} onClick={closeMenu}>
          <Image src="/logo-light.svg" width={176} height={45} alt="UNIVIA" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">{t.navigation.home}</Link>
          {navItems.map(([label, href]) => <Link href={href} key={href}>{t.navigation[label]}</Link>)}
          <Link className="nav-cta" href="/contact">{t.navigation.contact}</Link>
          <LanguageSwitcher />
        </nav>
        <div className="mobile-actions">
          <LanguageSwitcher />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu}>{t.navigation.home}</Link>
          {navItems.map(([label, href]) => <Link href={href} key={href} onClick={closeMenu}>{t.navigation[label]}</Link>)}
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>{t.navigation.contact}</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src="/logo-dark.svg" width={176} height={45} alt="UNIVIA logo" />
          <p className="footer-tagline">{siteConfig.tagline}</p>
        </div>
        <div>
          <h2>{t.footer.explore}</h2>
          <div className="footer-links">
            <Link href="/destinations">{t.navigation.destinations}</Link>
            <Link href="/services">{t.navigation.services}</Link>
            <Link href="/faq">{t.navigation.faq}</Link>
          </div>
        </div>
        <div>
          <h2>{t.footer.contact}</h2>
          <div className="footer-contact">
            <a href={`https://wa.me/${contactConfig.whatsappNumber}`}><MessageCircle aria-hidden="true" /> {contactConfig.phoneDisplay}</a>
            <a href={`mailto:${contactConfig.email}`}><Mail aria-hidden="true" /> {contactConfig.email}</a>
          </div>
          <p>{t.footer.placeholder}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.copyright}</div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <AppLanguageProvider><SiteHeader />{children}<SiteFooter /></AppLanguageProvider>;
}

export function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  return <Link className={`button button-${variant}`} href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  globe: Globe2,
  repeat: Repeat2,
  users: Users,
  briefcase: BriefcaseBusiness,
  compass: Compass,
  calendar: CalendarDays,
  headphones: Headphones,
};

export function Cards({ kind }: { kind: 'dest' | 'service' }) {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  if (kind === 'dest') {
    return <div className="card-grid">{destinations.map((destination) => <article className="card image-card" key={destination.id}>
      <div className="card-image"><Image src={destination.image} alt={text(destination.alt, language)} fill sizes="(max-width: 768px) 100vw, 33vw" /></div>
      <div className="card-content"><p className="card-kicker">{text(destination.country, language)}</p><h3>{text(destination.city, language)}</h3><p>{text(destination.description, language)}</p><Link className="inline-link" href="/contact">{t.common.inquire} <ArrowRight size={15} aria-hidden="true" /></Link></div>
    </article>)}</div>;
  }
  return <div className="card-grid">{services.map((service) => { const Icon = iconMap[service.icon]; return <article className="card service-card" key={service.id}>
    {service.image ? <div className="card-image"><Image src={service.image} alt={text(service.title, language)} fill sizes="(max-width: 768px) 100vw, 33vw" /></div> : <div className="service-icon"><Icon aria-hidden="true" /></div>}
    <div className="card-content"><h3>{text(service.title, language)}</h3><p>{text(service.description, language)}</p><Link className="inline-link" href="/contact">{t.common.inquire} <ArrowRight size={15} aria-hidden="true" /></Link></div>
  </article>; })}</div>;
}

type InquiryField = 'from' | 'to' | 'departure' | 'return' | 'passengers' | 'class';

type InquiryErrors = Partial<Record<InquiryField, string>>;

export function Inquiry() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  const [trip, setTrip] = useState<'oneWay' | 'roundTrip'>('roundTrip');
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [resultUrl, setResultUrl] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const from = String(form.get('from') ?? '').trim();
    const to = String(form.get('to') ?? '').trim();
    const departure = String(form.get('departure') ?? '');
    const returnDate = String(form.get('return') ?? '');
    const passengers = Number(form.get('passengers'));
    const travelClass = String(form.get('class') ?? '');
    const nextErrors: InquiryErrors = {};
    if (!from || !to) nextErrors.from = t.inquiry.errors.route;
    if (from && to && from.toLowerCase() === to.toLowerCase()) nextErrors.to = t.inquiry.errors.sameRoute;
    if (!departure) nextErrors.departure = t.inquiry.errors.departure;
    if (trip === 'roundTrip' && !returnDate) nextErrors.return = t.inquiry.errors.returnRequired;
    if (trip === 'roundTrip' && returnDate && departure && returnDate < departure) nextErrors.return = t.inquiry.errors.returnBeforeDeparture;
    if (!Number.isInteger(passengers) || passengers < 1 || passengers > 9) nextErrors.passengers = t.inquiry.errors.passengers;
    if (!travelClass) nextErrors.class = t.inquiry.errors.travelClass;
    setErrors(nextErrors);
    setResultUrl('');
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      `${siteConfig.brandName} Flight Inquiry`,
      `Trip: ${trip === 'roundTrip' ? t.inquiry.roundTrip : t.inquiry.oneWay}`,
      `From: ${from}`,
      `To: ${to}`,
      `Departure: ${departure}`,
      `Return: ${trip === 'roundTrip' ? returnDate : 'N/A'}`,
      `Passengers: ${passengers}`,
      `Class: ${travelClass}`,
    ].join('\n');
    const url = buildWhatsAppUrl(message);
    setResultUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const fieldError = (field: InquiryField) => errors[field] ? <p className="field-error" id={`${field}-error`} role="alert">{errors[field]}</p> : null;
  return <form onSubmit={submit} className="inquiry-form card" noValidate>
    <div className="form-heading"><div><p className="eyebrow">{siteConfig.brandName}</p><h2>{t.inquiry.title}</h2></div><div className="trip-toggle" role="group" aria-label="Trip type">
      <button type="button" className={trip === 'oneWay' ? 'active' : ''} aria-pressed={trip === 'oneWay'} onClick={() => { setTrip('oneWay'); setErrors({}); }}>{t.inquiry.oneWay}</button>
      <button type="button" className={trip === 'roundTrip' ? 'active' : ''} aria-pressed={trip === 'roundTrip'} onClick={() => { setTrip('roundTrip'); setErrors({}); }}>{t.inquiry.roundTrip}</button>
    </div></div>
    <div className="form-grid">
      <div className="field"><label htmlFor="from">{t.inquiry.from}</label><input id="from" name="from" autoComplete="off" aria-invalid={Boolean(errors.from)} aria-describedby={errors.from ? 'from-error' : undefined} />{fieldError('from')}</div>
      <div className="field"><label htmlFor="to">{t.inquiry.to}</label><input id="to" name="to" autoComplete="off" aria-invalid={Boolean(errors.to)} aria-describedby={errors.to ? 'to-error' : undefined} />{fieldError('to')}</div>
      <div className="field"><label htmlFor="departure">{t.inquiry.departureDate}</label><input id="departure" name="departure" type="date" aria-invalid={Boolean(errors.departure)} aria-describedby={errors.departure ? 'departure-error' : undefined} />{fieldError('departure')}</div>
      <div className="field"><label htmlFor="return">{t.inquiry.returnDate} <span className="optional">({trip === 'oneWay' ? t.common.optional : t.common.required})</span></label><input id="return" name="return" type="date" disabled={trip === 'oneWay'} aria-invalid={Boolean(errors.return)} aria-describedby={errors.return ? 'return-error' : undefined} />{fieldError('return')}</div>
      <div className="field"><label htmlFor="passengers">{t.inquiry.passengers}</label><input id="passengers" name="passengers" type="number" min="1" max="9" defaultValue="1" aria-invalid={Boolean(errors.passengers)} aria-describedby={errors.passengers ? 'passengers-error' : undefined} />{fieldError('passengers')}</div>
      <div className="field"><label htmlFor="class">{t.inquiry.travelClass}</label><select id="class" name="class" defaultValue="Economy" aria-invalid={Boolean(errors.class)} aria-describedby={errors.class ? 'class-error' : undefined}><option value="Economy">{t.inquiry.economy}</option><option value="Premium Economy">{t.inquiry.premiumEconomy}</option><option value="Business">{t.inquiry.business}</option><option value="First Class">{t.inquiry.firstClass}</option></select>{fieldError('class')}</div>
    </div>
    <button className="button button-submit" type="submit"><MessageCircle size={18} aria-hidden="true" />{t.inquiry.submit}</button>
    {resultUrl && <p className="form-result"><a href={resultUrl} target="_blank" rel="noreferrer">{t.inquiry.generatedLink}</a></p>}
  </form>;
}

export function ContactInquiry() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  const [error, setError] = useState(false);
  const [links, setLinks] = useState<{ whatsapp: string; mailto: string } | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) { setError(true); setLinks(null); return; }
    const body = [`${siteConfig.brandName} Contact Inquiry`, `Name: ${name}`, `Email: ${email}`, `Message: ${message}`].join('\n');
    const whatsapp = buildWhatsAppUrl(body);
    setError(false);
    setLinks({ whatsapp, mailto: buildMailtoUrl(`${siteConfig.brandName} contact inquiry`, body) });
    window.open(whatsapp, '_blank', 'noopener,noreferrer');
  }
  return <form onSubmit={submit} className="contact-form card" noValidate>
    <div className="field"><label htmlFor="contact-name">{t.contact.name}</label><input id="contact-name" name="name" autoComplete="name" aria-invalid={error} /></div>
    <div className="field"><label htmlFor="contact-email">{t.contact.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" aria-invalid={error} /></div>
    <div className="field"><label htmlFor="contact-message">{t.contact.message}</label><textarea id="contact-message" name="message" rows={5} aria-invalid={error} /></div>
    {error && <p className="field-error" role="alert">{t.contact.validation}</p>}
    <button className="button button-submit" type="submit"><MessageCircle size={18} aria-hidden="true" />{t.contact.submit}</button>
    {links && <div className="form-result" role="status"><p>{t.contact.success}</p><div className="result-links"><a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" />WhatsApp</a><a href={links.mailto}><Mail size={16} aria-hidden="true" />{t.contact.mailtoAlternative}</a></div></div>}
  </form>;
}

export function FAQ() {
  const { language } = useAppLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  return <FAQAccordion items={faqs} language={language} openId={openId} onToggle={(id) => setOpenId((current) => current === id ? null : id)} />;
}

export function FAQAccordion({ items, language, openId, onToggle }: { items: FAQItem[]; language: Language; openId?: string | null; onToggle?: (id: string) => void }) {
  return <div className="faq-list">{items.map((item) => { const open = openId === item.id; return <div className="faq-item card" key={item.id}>
    <button type="button" className="faq-question" aria-expanded={open} aria-controls={`faq-answer-${item.id}`} onClick={() => onToggle?.(item.id)}><span>{text(item.question, language)}</span><ChevronDown className={open ? 'rotate' : ''} size={20} aria-hidden="true" /></button>
    <div id={`faq-answer-${item.id}`} className={open ? 'faq-answer open' : 'faq-answer'} hidden={!open}><p>{text(item.answer, language)}</p></div>
  </div>; })}</div>;
}
