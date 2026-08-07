'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import GoogleFormEmbed from '../contact/GoogleFormEmbed';
import SocialIcons from '../SocialIcons';
import { contact, social } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeContact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p className="section-deck">{t.contact.deck}</p>
        </Reveal>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <Reveal as="div">
            <p className="kicker">{t.contact.email}</p>
            <a className="contact-strong" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </Reveal>
          <Reveal delay={60} as="div">
            <p className="kicker">{t.contact.phone}</p>
            <div className="stack-phones contact-strong">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`}>
                  +91 {p}
                </a>
              ))}
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t.cta.whatsapp}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} as="div">
            <p className="kicker">{t.contact.office}</p>
            <p className="text-[var(--ink)]">{contact.office}</p>
            <a
              className="text-link mt-2 inline-block"
              href={contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cta.openMaps}
            </a>
          </Reveal>
        </div>

        <Reveal className="mb-10">
          <p className="kicker">Social</p>
          <SocialIcons items={social} />
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-3">
          <Link className="btn btn-solid" href="/plant">
            {t.cta.getStarted}
          </Link>
          <Link className="btn btn-line btn-line-dark" href="/donate">
            {t.cta.donateNow || 'Donate Now'}
          </Link>
          <a className="btn btn-line btn-line-dark" href="#enquiry-form">
            {t.cta.fillForm}
          </a>
          <a
            className="btn btn-line btn-line-dark"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cta.whatsapp}
          </a>
        </div>

        <Reveal id="enquiry-form">
          <GoogleFormEmbed title={t.contact.enquiry} />
        </Reveal>
      </div>
    </section>
  );
}
