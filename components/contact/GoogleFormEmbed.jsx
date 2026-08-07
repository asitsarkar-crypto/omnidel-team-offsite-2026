import Link from 'next/link';
import { contact, enquiryServices, googleFormUrl } from '../../lib/data';

/**
 * Embeds a Google Form when `googleFormUrl` is set in lib/data.js.
 * When unset, shows a compact contact path — never a giant empty iframe box.
 */
export default function GoogleFormEmbed({ title = 'Enquiry form' }) {
  if (googleFormUrl) {
    return (
      <div className="enquiry-panel enquiry-panel-live">
        <h3 className="enquiry-title">{title}</h3>
        <iframe
          title={title}
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
      <h3 className="enquiry-title">{title}</h3>
      <p className="enquiry-lead">
        Share your name, organisation, mobile, email, and how you wish to take part — planting,
        sponsorship, press, or partnership. Reach us directly while the embedded form is prepared.
      </p>

      <div className="enquiry-actions">
        <Link className="btn btn-solid" href="/plant">
          Plant a Tree
        </Link>
        <Link className="btn btn-line dark" href="/donate">
          Donate Now
        </Link>
        <a className="btn btn-line dark" href={`mailto:${contact.email}`}>
          Email us
        </a>
        <a
          className="btn btn-line dark"
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <h4 className="enquiry-subhead">What to include</h4>
      <ul className="enquiry-fields">
        {['Full Name', 'Organisation', 'Mobile Number', 'Email Address', 'Interest', 'Message'].map(
          (field) => (
            <li key={field}>{field}</li>
          )
        )}
      </ul>

      <h4 className="enquiry-subhead">Ways to participate</h4>
      <ul className="enquiry-tags">
        {enquiryServices.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
