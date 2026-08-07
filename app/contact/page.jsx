import Reveal from '../../components/Reveal';
import GoogleFormEmbed from '../../components/contact/GoogleFormEmbed';
import SocialIcons from '../../components/SocialIcons';
import { contact, featuredMedia, orgs, profile, social } from '../../lib/data';
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
    ...contact.phones.map((p) => ({
      id: p,
      group: 'Direct',
      label: 'Mobile',
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
          <p className="kicker light">Contact</p>
          <h1>Write, call, or fill the enquiry form</h1>
          <p className="page-lead">
            Official contact for {profile.name} — press, invitations, and farmer organisation
            correspondence.
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <a className="btn btn-solid" href="#enquiry">
              Fill Enquiry Form
            </a>
            <a
              className="btn btn-line"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
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
          </Reveal>
          <Reveal className="contact-card" delay={60}>
            <p className="kicker">Mobile</p>
            <div className="contact-strong stack-phones">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`}>
                  +91 {p}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="contact-card" delay={120}>
            <p className="kicker">WhatsApp</p>
            <a
              className="contact-strong"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="band muted-band scroll-mt-[var(--nav-h)]">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Enquiry</p>
            <h2>Google Form</h2>
            <p className="section-deck">
              Share your name, organisation, mobile, email, service interest, and message.
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
            <p className="kicker">Office</p>
            <h2>New Delhi</h2>
            <p>{contact.office}</p>
            <a className="text-link" href={contact.mapLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Residence</p>
            <h2>Ghaziabad</h2>
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
            <p className="kicker">Social</p>
            <h2>Follow on social platforms</h2>
          </Reveal>
          <Reveal>
            <SocialIcons items={social} />
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
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
