'use client';

import Reveal from '../Reveal';
import SocialIcons from '../SocialIcons';
import { contact, featuredMedia, orgs, social } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function ContactContent() {
  const { t } = useLanguage();
  const p = t.pages?.contact || {};

  const directory = [
    {
      id: 'email',
      group: 'Direct',
      label: p.email || 'Email',
      handle: contact.email,
      href: `mailto:${contact.email}`,
    },
    ...contact.phones.map((phone) => ({
      id: phone,
      group: 'Direct',
      label: p.mobile || 'Mobile',
      handle: `+91 ${phone}`,
      href: `tel:+91${phone}`,
    })),
    {
      id: 'whatsapp',
      group: 'Direct',
      label: p.whatsapp || 'WhatsApp',
      handle: `+91 ${contact.phones[0]}`,
      href: contact.whatsappUrl,
    },
    {
      id: 'web',
      group: 'Direct',
      label: 'Website',
      handle: contact.webLabel,
      href: contact.web,
    },
    ...social.map((s) => ({ ...s, group: 'Social' })),
    ...orgs.map((o) => ({
      id: o.href,
      label: o.label,
      handle: o.detail,
      href: o.href,
      group: 'Organisation',
    })),
    ...featuredMedia.map((m) => ({
      id: m.href,
      label: m.type,
      handle: m.label,
      href: m.href,
      group: 'Coverage',
    })),
  ];

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">{p.lead}</p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <a className="btn btn-solid" href={`mailto:${contact.email}`}>
              {p.email}
            </a>
            <a
              className="btn btn-line"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap contact-grid">
          <Reveal className="contact-card">
            <p className="kicker">{p.email}</p>
            <a className="contact-strong" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={60}>
            <p className="kicker">{p.mobile}</p>
            <div className="contact-strong stack-phones">
              {contact.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`}>
                  +91 {phone}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="contact-card" delay={120}>
            <p className="kicker">{p.whatsapp}</p>
            <a
              className="contact-strong"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.whatsappMsg}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">{p.officeKicker}</p>
            <h2>{p.officeTitle}</h2>
            <p>{contact.office}</p>
            <a className="text-link" href={contact.mapLink} target="_blank" rel="noopener noreferrer">
              {p.openMaps}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">{p.residenceKicker}</p>
            <h2>{p.residenceTitle}</h2>
            <p>{contact.residence}</p>
          </Reveal>
        </div>
        <div className="wrap mt-10 overflow-hidden rounded-2xl border border-[var(--stroke)]">
          <iframe
            title={`Google Map — ${contact.office}`}
            src={contact.mapEmbedUrl}
            className="block h-[280px] w-full border-0 md:h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.socialKicker}</p>
            <h2>{p.socialTitle}</h2>
          </Reveal>
          <Reveal>
            <SocialIcons items={social} />
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.dirKicker}</p>
            <h2>{p.dirTitle}</h2>
          </Reveal>
          <div className="directory">
            {directory.map((item, i) => (
              <Reveal
                key={item.id}
                as="a"
                className="directory-row"
                delay={(i % 6) * 40}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="dir-group">{item.group}</span>
                <span className="dir-label">{item.label}</span>
                <span className="dir-handle">{item.handle}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
