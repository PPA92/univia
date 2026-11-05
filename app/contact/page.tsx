import { Mail, MessageCircle } from 'lucide-react';
import { ContactInquiry } from '../components';
import { contactConfig } from '../config';

export default function Contact() {
  return <main className="container py-20">
    <p className="eyebrow">CONTACT UNIVIA</p>
    <h1 className="text-5xl font-bold text-navy mt-3">Let’s start a conversation.</h1>
    <div className="grid md:grid-cols-2 gap-12 mt-12">
      <div>
        <p className="text-slate-600">Contact channels below are configurable placeholders. Replace them before launch.</p>
        <div className="card p-6 mt-8 space-y-4">
          <p><b><MessageCircle className="inline mr-2 text-blue" size={18} aria-hidden="true" />WhatsApp</b><br/>{contactConfig.phoneDisplay}</p>
          <p><b><Mail className="inline mr-2 text-blue" size={18} aria-hidden="true" />Email</b><br/><a className="text-blue" href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a></p>
          <p><b>Business hours</b><br/>{contactConfig.businessHours}</p>
        </div>
      </div>
      <ContactInquiry />
    </div>
  </main>;
}
