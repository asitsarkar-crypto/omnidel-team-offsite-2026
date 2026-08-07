import Link from 'next/link';
import { contact, nav, orgs, profile, social } from '../lib/data';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-hi">{profile.nameHi}</p>
          <p className="footer-tag">{profile.shortTitle}</p>
          <p className="footer-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="footer-phones">
            {contact.phones.map((p, i) => (
              <span key={p}>
                {i > 0 ? ' / ' : null}
                <a href={`tel:+91${p}`}>+91 {p}</a>
              </span>
            ))}
            <span aria-hidden="true"> · </span>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
          <p className="mt-3 text-sm text-[rgba(232,217,168,0.85)]">
            Office: {contact.office}
          </p>
          <p className="text-sm text-[rgba(232,217,168,0.75)]">Residence: {contact.residence}</p>
        </div>

        <div className="footer-cols">
          <div>
            <p className="footer-label">Explore</p>
            <ul>
              {nav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <ul>
              {social.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
              {orgs.map((o) => (
                <li key={o.href}>
                  <a href={o.href} target="_blank" rel="noopener noreferrer">
                    {o.label.includes('West Bengal') ? 'BKS West Bengal' : o.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact / Enquiry</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap mt-10 mb-8 overflow-hidden rounded-2xl border border-[rgba(232,217,168,0.2)]">
        <iframe
          title={`Google Map — ${contact.office}`}
          src={contact.mapEmbedUrl}
          className="block h-[240px] w-full border-0 md:h-[300px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="wrap footer-bottom">
        <p>
          {profile.name} · {profile.qualifications} · Bharatiya Krishak Samaj
        </p>
        <p className="mt-2 text-sm opacity-70">
          <a href={contact.mapLink} target="_blank" rel="noopener noreferrer">
            View office on Google Maps
          </a>
        </p>
      </div>
    </footer>
  );
}
