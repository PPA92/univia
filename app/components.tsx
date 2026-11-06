'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, MessageCircle, Mail, X } from 'lucide-react';
import { assetConfig, buildMailtoUrl, buildWhatsAppUrl, contactConfig, isEmailConfigured, isWhatsAppConfigured, siteConfig } from './config';
import { destinations, faqs, services, type FAQItem } from './data';
import { getTranslations, languageLabels, type Language, type LocalizedText } from './i18n';

type PhotoLike = { id: string; url: string; subject: string };
const languageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: 'en', setLanguage: () => undefined });

export function AppLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const pathname = usePathname();
  const t = getTranslations(language);
  useEffect(() => {
    document.documentElement.lang = language === 'my' ? 'my' : 'en';
    const route = t.metadata.routes[pathname] ?? t.metadata.routes['/'];
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', t.metadata.locale);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', route.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', route.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', route.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', route.description);
  }, [language, pathname, t]);
  return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
}
function useAppLanguage() { return useContext(languageContext); }
function text(value: LocalizedText, language: Language) { return value[language]; }
export function Translated({ value }: { value: LocalizedText }) { const { language } = useAppLanguage(); return <>{text(value, language)}</>; }

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppLanguage();
  const t = getTranslations(language);
  return <div className="language-switcher" aria-label={t.navigation.language}>{(Object.keys(languageLabels) as Language[]).map((option) => <button key={option} type="button" className={language === option ? 'language-option is-active' : 'language-option'} aria-pressed={language === option} onClick={() => setLanguage(option)}>{languageLabels[option]}</button>)}</div>;
}

const navItems = [['about', '/about'], ['airTickets', '/air-tickets'], ['destinations', '/destinations'], ['services', '/services'], ['faq', '/faq']] as const;
export function SiteHeader() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const isCurrent = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  return <header className="site-header nav">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="wrap header-inner">
      <Link href="/" className="brand-link" aria-label={`${siteConfig.brandName} home`} onClick={closeMenu}><Image src="/brand/univia-full-on-light.svg" width={144} height={40} alt="UNIVIA" priority /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/" aria-current={isCurrent('/') ? 'page' : undefined}>{t.navigation.home}</Link>{navItems.map(([label, href]) => <Link href={href} key={href} aria-current={isCurrent(href) ? 'page' : undefined}>{t.navigation[label]}</Link>)}<Link className="nav-primary" href="/air-tickets">{t.common.sendInquiry}<ArrowUpRight size={16} aria-hidden="true" /></Link><LanguageSwitcher /></nav>
      <div className="mobile-actions"><LanguageSwitcher /><Link className="nav-primary nav-primary--mobile" href="/air-tickets">{t.common.sendInquiry}</Link><button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div>
    </div>
    {menuOpen && <div id="mobile-navigation" className="mobile-nav"><nav aria-label="Mobile navigation"><Link href="/" aria-current={isCurrent('/') ? 'page' : undefined} onClick={closeMenu}>{t.navigation.home}</Link>{navItems.map(([label, href]) => <Link href={href} key={href} aria-current={isCurrent(href) ? 'page' : undefined} onClick={closeMenu}>{t.navigation[label]}</Link>)}<Link href="/contact" aria-current={isCurrent('/contact') ? 'page' : undefined} onClick={closeMenu}>{t.navigation.contact}</Link></nav></div>}
  </header>;
}

export function SiteFooter() {
  const { language } = useAppLanguage();
  const t = getTranslations(language);
  return <footer className="site-footer closing"><div className="wrap footer-close"><div><p className="eyebrow">{siteConfig.brandName}</p><h2>{t.pages.home.close}</h2><p>{t.pages.home.closeDescription}</p></div><ButtonLink href="/air-tickets">{t.common.sendInquiry}</ButtonLink></div><div className="wrap footer-directory"><div className="footer-brand"><Image src="/brand/univia-full-on-dark.svg" width={132} height={38} alt="UNIVIA" /><p>{siteConfig.legalName}</p></div><div><p className="footer-label">{t.footer.explore}</p><div className="footer-links"><Link href="/about">{t.navigation.about}</Link><Link href="/destinations">{t.navigation.destinations}</Link><Link href="/services">{t.navigation.services}</Link><Link href="/faq">{t.navigation.faq}</Link></div></div><div><p className="footer-label">{t.footer.contact}</p><Link href="/contact">{t.navigation.contact}</Link><details className="credits"><summary>{t.common.credits}</summary><a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></details></div></div><div className="wrap footer-legal"><span>© {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.copyright}</span><span>Photography is configured as stand-in material until UNIVIA-owned photography is supplied.</span></div></footer>;
}
export function SiteShell({ children }: { children: ReactNode }) { return <AppLanguageProvider><SiteHeader />{children}<SiteFooter /><PhoneAction /></AppLanguageProvider>; }
function PhoneAction() { const { language } = useAppLanguage(); return <nav className="phone-actionbar" aria-label="Quick action"><Link href="/air-tickets">{getTranslations(language).common.sendInquiry}<ArrowUpRight size={17} aria-hidden="true" /></Link></nav>; }
export function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) { return <Link className={`button button-${variant}`} href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>; }

function Photo({ photo, alt, priority = false, sizes = '(max-width: 639px) 100vw, 50vw' }: { photo: PhotoLike; alt: string; priority?: boolean; sizes?: string }) { return <Image src={photo.url} alt={alt} width={1600} height={1000} priority={priority} sizes={sizes} className="photo" data-source="library-stand-in" data-subject={photo.subject} />; }
export function PhotoFrame({ photo, alt, href, priority = false, className = '' }: { photo: PhotoLike; alt: string; href?: string; priority?: boolean; className?: string }) { const image = <div className={`photo-frame ${className}`}><Photo photo={photo} alt={alt} priority={priority} sizes={className.includes('hero-photo') ? '100vw' : className.includes('service-photo') ? '(max-width: 960px) 100vw, 260px' : '(max-width: 960px) 100vw, 50vw'} /></div>; return href ? <Link className="photo-link" href={href}>{image}</Link> : image; }

export function DestinationList({ limit }: { limit?: number }) { const { language } = useAppLanguage(); const t = getTranslations(language); return <div className="destination-list">{destinations.slice(0, limit).map((item) => <article className="destination-row" id={item.id} key={item.id}><PhotoFrame photo={item.image} alt={text(item.alt, language)} href={`/air-tickets?destination=${encodeURIComponent(item.city.en)}`} /><div className="destination-copy"><p className="eyebrow">{text(item.country, language)}</p><h3>{language === 'en' ? `${item.city.en} route` : `${item.city.my} ခရီးစဉ်`}</h3><p>{text(item.description, language)}</p><Link className="button button-secondary" href={`/air-tickets?destination=${encodeURIComponent(item.city.en)}`}>{t.common.sendInquiry}<ArrowUpRight size={15} aria-hidden="true" /></Link></div></article>)}</div>; }
export function ServiceList({ limit }: { limit?: number }) { const { language } = useAppLanguage(); return <div className="service-list">{services.slice(0, limit).map((item, index) => <article className="service-row" key={item.id}><span className="service-index">0{index + 1}</span><div><h3>{text(item.title, language)}</h3><p>{text(item.description, language)}</p></div>{item.image && <PhotoFrame photo={item.image} alt={text(item.title, language)} className="service-photo" />}</article>)}</div>; }

export function Inquiry() {
  const { language } = useAppLanguage(); const t = getTranslations(language); const [trip, setTrip] = useState<'oneWay' | 'roundTrip'>('roundTrip'); const [destination, setDestination] = useState(''); const [errors, setErrors] = useState<Partial<Record<'from' | 'to' | 'departure' | 'return' | 'passengers' | 'class', string>>>({}); const [configurationError, setConfigurationError] = useState(false); const [resultUrl, setResultUrl] = useState('');
  useEffect(() => { const selected = new URLSearchParams(window.location.search).get('destination'); if (selected) setDestination(selected); }, []);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = new FormData(event.currentTarget); const from = String(form.get('from') ?? '').trim(); const to = String(form.get('to') ?? '').trim(); const departure = String(form.get('departure') ?? ''); const returnDate = String(form.get('return') ?? ''); const passengers = Number(form.get('passengers')); const travelClass = String(form.get('class') ?? ''); const next: typeof errors = {}; if (!from) next.from = t.inquiry.errors.route; if (!to) next.to = t.inquiry.errors.route; if (from && to && from.toLowerCase() === to.toLowerCase()) next.to = t.inquiry.errors.sameRoute; if (!departure) next.departure = t.inquiry.errors.departure; if (trip === 'roundTrip' && !returnDate) next.return = t.inquiry.errors.returnRequired; if (trip === 'roundTrip' && returnDate && departure && returnDate < departure) next.return = t.inquiry.errors.returnBeforeDeparture; if (!Number.isInteger(passengers) || passengers < 1 || passengers > 9) next.passengers = t.inquiry.errors.passengers; if (!travelClass) next.class = t.inquiry.errors.travelClass; setErrors(next); setResultUrl(''); setConfigurationError(false); if (Object.keys(next).length) return; if (!isWhatsAppConfigured()) { setConfigurationError(true); return; } const message = [`${siteConfig.brandName} Flight Inquiry`, `Trip: ${trip === 'roundTrip' ? t.inquiry.roundTrip : t.inquiry.oneWay}`, `From: ${from}`, `To: ${to}`, `Departure: ${departure}`, `Return: ${trip === 'roundTrip' ? returnDate : 'N/A'}`, `Passengers: ${passengers}`, `Class: ${travelClass}`].join('\n'); const url = buildWhatsAppUrl(message); setResultUrl(url); window.open(url, '_blank', 'noopener,noreferrer'); }
  const fieldError = (field: keyof typeof errors) => errors[field] ? <p className="field-error" id={`${field}-error`} role="alert">{errors[field]}</p> : null;
  return <form onSubmit={submit} className="inquiry-form" noValidate><div className="form-heading"><div><p className="eyebrow">{siteConfig.brandName}</p></div><div className="trip-toggle" role="group" aria-label="Trip type"><button type="button" className={trip === 'oneWay' ? 'is-active' : ''} aria-pressed={trip === 'oneWay'} onClick={() => setTrip('oneWay')}>{t.inquiry.oneWay}</button><button type="button" className={trip === 'roundTrip' ? 'is-active' : ''} aria-pressed={trip === 'roundTrip'} onClick={() => setTrip('roundTrip')}>{t.inquiry.roundTrip}</button></div></div><div className="form-grid"><div className="field"><label htmlFor="from">{t.inquiry.from}</label><input id="from" name="from" autoComplete="off" aria-invalid={Boolean(errors.from)} aria-describedby={errors.from ? 'from-error' : undefined} />{fieldError('from')}</div><div className="field"><label htmlFor="to">{t.inquiry.to}</label><input id="to" name="to" value={destination} onChange={(event) => setDestination(event.target.value)} autoComplete="off" aria-invalid={Boolean(errors.to)} aria-describedby={errors.to ? 'to-error' : undefined} />{fieldError('to')}</div><div className="field"><label htmlFor="departure">{t.inquiry.departureDate}</label><input id="departure" name="departure" type="date" aria-invalid={Boolean(errors.departure)} aria-describedby={errors.departure ? 'departure-error' : undefined} />{fieldError('departure')}</div><div className="field"><label htmlFor="return">{t.inquiry.returnDate} <span className="optional">({trip === 'oneWay' ? t.common.optional : t.common.required})</span></label><input id="return" name="return" type="date" disabled={trip === 'oneWay'} aria-invalid={Boolean(errors.return)} aria-describedby={errors.return ? 'return-error' : undefined} />{fieldError('return')}</div><div className="field"><label htmlFor="passengers">{t.inquiry.passengers}</label><input id="passengers" name="passengers" type="number" min="1" max="9" defaultValue="1" aria-invalid={Boolean(errors.passengers)} aria-describedby={errors.passengers ? 'passengers-error' : undefined} />{fieldError('passengers')}</div><div className="field"><label htmlFor="class">{t.inquiry.travelClass}</label><select id="class" name="class" defaultValue="Economy" aria-invalid={Boolean(errors.class)} aria-describedby={errors.class ? 'class-error' : undefined}><option value="Economy">{t.inquiry.economy}</option><option value="Premium Economy">{t.inquiry.premiumEconomy}</option><option value="Business">{t.inquiry.business}</option><option value="First Class">{t.inquiry.firstClass}</option></select>{fieldError('class')}</div></div><button className="button button-submit" type="submit"><MessageCircle size={18} aria-hidden="true" />{t.inquiry.submit}</button>{configurationError && <p className="field-error" role="alert">{t.inquiry.errors.whatsappUnavailable}</p>}{resultUrl && <p className="form-result"><a href={resultUrl} target="_blank" rel="noreferrer">{t.inquiry.generatedLink}</a></p>}</form>;
}

type ContactField = 'name' | 'email' | 'message';
export function ContactInquiry() { const { language } = useAppLanguage(); const t = getTranslations(language); const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({}); const [configurationError, setConfigurationError] = useState(false); const [links, setLinks] = useState<{ whatsapp?: string; mailto?: string } | null>(null); function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get('name') ?? '').trim(); const email = String(form.get('email') ?? '').trim(); const message = String(form.get('message') ?? '').trim(); const next: Partial<Record<ContactField, string>> = {}; if (!name) next.name = t.contact.errors.name; if (!/^\S+@\S+\.\S+$/.test(email)) next.email = t.contact.errors.email; if (!message) next.message = t.contact.errors.message; setErrors(next); setLinks(null); setConfigurationError(false); if (Object.keys(next).length) return; const body = [`${siteConfig.brandName} Contact Inquiry`, `Name: ${name}`, `Email: ${email}`, `Message: ${message}`].join('\n'); const whatsapp = buildWhatsAppUrl(body); const mailto = buildMailtoUrl(`${siteConfig.brandName} contact inquiry`, body); if (!whatsapp && !mailto) { setConfigurationError(true); return; } setLinks({ whatsapp: whatsapp || undefined, mailto: mailto || undefined }); } const error = (field: ContactField) => errors[field] ? <p className="field-error" id={`contact-${field}-error`} role="alert">{errors[field]}</p> : null; return <form onSubmit={submit} className="contact-form" noValidate><div className="field"><label htmlFor="contact-name">{t.contact.name}</label><input id="contact-name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />{error('name')}</div><div className="field"><label htmlFor="contact-email">{t.contact.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />{error('email')}</div><div className="field"><label htmlFor="contact-message">{t.contact.message}</label><textarea id="contact-message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />{error('message')}</div>{configurationError && <p className="field-error" role="alert">{t.contact.errors.configuration}</p>}<button className="button button-submit" type="submit"><MessageCircle size={18} aria-hidden="true" />{t.contact.submit}</button>{links && <div className="form-result" role="status"><p>{t.contact.success}</p><div className="result-links">{links.whatsapp && <a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" />{t.common.sendWhatsApp}</a>}{links.mailto && <a href={links.mailto}><Mail size={16} aria-hidden="true" />{t.common.sendEmail}</a>}</div></div>}</form>; }

export function FAQ() { return <FAQAccordion items={faqs} />; }
export function FAQAccordion({ items }: { items: FAQItem[]; language?: Language; openId?: string | null; onToggle?: (id: string) => void }) { const { language } = useAppLanguage(); return <div className="faq-list">{items.map((item) => <article className="faq-item" key={item.id}><h3>{text(item.question, language)}</h3><p>{text(item.answer, language)}</p></article>)}</div>; }

export function ContactDetails() { const { language } = useAppLanguage(); const t = getTranslations(language); const values = [[t.pages.contact.whatsapp, contactConfig.phoneDisplay, isWhatsAppConfigured() ? buildWhatsAppUrl(`${siteConfig.brandName} contact`) : ''], [t.pages.contact.email, contactConfig.email, isEmailConfigured() ? `mailto:${contactConfig.email}` : ''], [t.pages.contact.address, contactConfig.officeAddress, ''], [t.pages.contact.hours, contactConfig.businessHours, '']]; return <div className="contact-details">{values.filter(([, value]) => value.trim()).map(([label, value, href]) => <p key={label}><strong>{label}</strong>{href ? <a href={href}>{value}</a> : <span>{value}</span>}</p>)}{values.every(([, value]) => !value.trim()) && <p className="muted-note">{t.pages.contact.inquiryNote}</p>}</div>; }

export const inquiryImage = assetConfig.inquiry;
