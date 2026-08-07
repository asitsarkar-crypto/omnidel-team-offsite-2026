import Link from 'next/link';
import Reveal from '../../components/Reveal';
import GoogleFormEmbed from '../../components/contact/GoogleFormEmbed';
import SocialIcons from '../../components/SocialIcons';
import { contact, featuredMedia, orgs, social } from '../../lib/data';
import { vatika } from '../../lib/vatika';
import { buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.contact);

export default function ContactPage() {
  const directory = [
    {
      id: 'email',
      group: 'Direct',
      label: 'Email',
      handle: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      id: 'email-bks',
      group: 'Direct',
      label: 'BKS West Bengal',
      handle: contact.emailSecondary,
      href: `mailto:${contact.emailSecondary}`,
    },
    ...contact.phones.map((p, i) => ({
      id: p,
      group: 'Direct',
      label: contact.phoneLabels?.[i] || 'Mobile',
      handle: `+91 ${p}`,
      href: `tel:+91${p}`,
    })),
    {
      id: 'whatsapp',
      group: 'Direct',
      label: 'WhatsApp',
      handle: `+91 ${contact.phones[0]}`,
      href: contact.whatsappUrl,
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
          style={{ backgroundImage: "url('/photos/activity/sapling-presentation.jpeg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Contact</p>
          <h1>Write to {vatika.name}</h1>
          <p className="page-lead">
            Plantation sponsorship, press, partnerships, and joint-initiative enquiries for the KY21C
            × BKS campaign — New Town, Kolkata.
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="btn btn-solid" href="/plant">
              Plant a Tree
            </Link>
            <Link className="btn btn-line" href="/donate">
              Donate Now
            </Link>
            <a className="btn btn-line" href="#enquiry">
              Enquiry form
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap contact-grid">
          <Reveal className="contact-card">
            <p className="kicker">Email</p>
            <a className="contact-strong" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="text-link mt-2 inline-block" href={`mailto:${contact.emailSecondary}`}>
              {contact.emailSecondary}
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={60}>
            <p className="kicker">Mobile / WhatsApp</p>
            <div className="contact-strong stack-phones">
              {contact.phones.map((p, i) => (
                <a key={p} href={`tel:+91${p}`}>
                  +91 {p}
                  {contact.phoneLabels?.[i] ? (
                    <span className="phone-label"> · {contact.phoneLabels[i]}</span>
                  ) : null}
                </a>
              ))}
            </div>
            <a
              className="text-link mt-2 inline-block"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={120}>
            <p className="kicker">Social</p>
            <SocialIcons items={social} />
            <p className="mt-3 text-sm text-[var(--muted)]">
              Instagram @karmyogvatika · YouTube KarmYog for 21st Century
            </p>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="band muted-band scroll-mt-[var(--nav-h)]">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Enquiry</p>
            <h2>Send a message</h2>
            <p className="section-deck">
              Share your name, organisation, mobile, email, and how you wish to participate —
              planting, sponsorship, press, or partnership.
            </p>
          </Reveal>
          <Reveal>
            <GoogleFormEmbed title="Contact enquiry form" />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Head office</p>
            <h2>{contact.city}</h2>
            <p className="office-label">{contact.officeLabel}</p>
            <p>{contact.office}</p>
            <p className="section-deck" style={{ marginTop: 10 }}>
              {contact.officeNote}
            </p>
            <a className="text-link" href={contact.mapLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Joint partners</p>
            <h2>KY21C × BKS West Bengal</h2>
            <p>
              This plantation platform is coordinated from the New Town desk shared with KY21C and
              Bharatiya Krishak Samaj — West Bengal.
            </p>
            <div className="hero-actions" style={{ marginTop: 16 }}>
              <a
                className="btn btn-line dark"
                href="https://bkswbengal.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                bkswbengal.org
              </a>
              <a
                className="btn btn-line dark"
                href="https://karmyog21c.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                karmyog21c.in
              </a>
            </div>
          </Reveal>
        </div>
        <div className="wrap mt-10 overflow-hidden rounded-2xl border border-[var(--stroke)]">
          <iframe
            title={`Google Map — ${contact.officeLabel}`}
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
            <p className="kicker">Directory</p>
            <h2>All public channels</h2>
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
