'use client';

import Link from 'next/link';
import { contact, enquiryServices, googleFormUrl } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

/**
 * Embeds a Google Form when `googleFormUrl` is set.
 * When unset, shows a compact contact path — never a giant empty iframe box.
 */
export default function GoogleFormEmbed({ title }) {
  const { t } = useLanguage();
  const heading = title || t.contact.enquiry;
  const c = t.campaign;

  if (googleFormUrl) {
    return (
      <div className="enquiry-panel enquiry-panel-live">
        <h3 className="enquiry-title">{heading}</h3>
        <iframe
          title={heading}
          src={googleFormUrl}
          className="enquiry-iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="enquiry-panel">
      <h3 className="enquiry-title">{heading}</h3>
      <p className="enquiry-lead">{c.enquiryLead}</p>

      <div className="enquiry-actions">
        <Link className="btn btn-solid" href="/plant">
          {t.cta.getStarted}
        </Link>
        <Link className="btn btn-line dark" href="/donate">
          {t.cta.donateNow}
        </Link>
        <a className="btn btn-line dark" href={`mailto:${contact.email}`}>
          {t.contact.email}
        </a>
        <a
          className="btn btn-line dark"
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.cta.whatsapp}
        </a>
      </div>

      <h4 className="enquiry-subhead">{c.enquiryInclude}</h4>
      <ul className="enquiry-fields">
        {['Full Name', 'Organisation', 'Mobile Number', 'Email Address', 'Interest', 'Message'].map(
          (field) => (
            <li key={field}>{field}</li>
          )
        )}
      </ul>

      <h4 className="enquiry-subhead">{c.enquiryWays}</h4>
      <ul className="enquiry-tags">
        {enquiryServices.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
