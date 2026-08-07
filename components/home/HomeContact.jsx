import Reveal from '../Reveal';
import GoogleFormEmbed from '../contact/GoogleFormEmbed';
import { contact } from '../../lib/data';

export default function HomeContact() {
  return (
    <section id="contact" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Contact</p>
          <h2>Write, call, or fill the enquiry form</h2>
          <p className="section-deck">
            Press, invitations, farmer organisation correspondence, and consultation requests.
          </p>
        </Reveal>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <Reveal as="div">
            <p className="kicker">Email</p>
            <a className="contact-strong" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </Reveal>
          <Reveal delay={60} as="div">
            <p className="kicker">Phone / WhatsApp</p>
            <div className="stack-phones contact-strong">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`}>
                  +91 {p}
                </a>
              ))}
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} as="div">
            <p className="kicker">Office</p>
            <p className="text-[var(--ink)]">{contact.office}</p>
            <a className="text-link mt-2 inline-block" href={contact.mapLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Reveal>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <a className="btn btn-solid" href="#enquiry-form">
            Fill Enquiry Form
          </a>
          <a
            className="btn btn-line btn-line-dark"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Consultation
          </a>
          <a className="btn btn-line btn-line-dark" href={`mailto:${contact.email}`}>
            Contact Us
          </a>
        </div>

        <Reveal id="enquiry-form">
          <GoogleFormEmbed title="Enquiry form" />
        </Reveal>
      </div>
    </section>
  );
}
