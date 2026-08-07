import { enquiryServices, googleFormUrl } from '../../lib/data';

/**
 * Embeds a Google Form when `googleFormUrl` is set in lib/data.js.
 * Expected fields: Full Name, Company Name, Mobile Number, Email Address,
 * Service Interested In, Message.
 */
export default function GoogleFormEmbed({ title = 'Enquiry form' }) {
  if (googleFormUrl) {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-[var(--stroke)] bg-white shadow-[0_20px_60px_rgba(11,28,20,0.08)]">
        <iframe
          title={title}
          src={googleFormUrl}
          className="block w-full min-h-[720px] border-0 bg-white md:min-h-[840px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-dashed border-[rgba(184,155,76,0.55)] bg-[rgba(255,255,255,0.72)] p-6 md:p-10">
      {/* Replace this iframe with your Google Form Embed URL */}
      <p className="mb-2 font-[var(--font-display)] text-xl text-[var(--ink)]">{title}</p>
      <p className="mb-6 max-w-2xl text-[var(--muted)]">
        Google Form embed URL is not configured yet. Set{' '}
        <code className="rounded bg-[var(--mist)] px-1.5 py-0.5 text-[0.92em]">googleFormUrl</code> in{' '}
        <code className="rounded bg-[var(--mist)] px-1.5 py-0.5 text-[0.92em]">lib/data.js</code> to your
        form&apos;s embed link (usually ends with <code>/viewform?embedded=true</code>).
      </p>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--field)]">
        Form should collect
      </p>
      <ul className="mb-8 grid gap-2 text-[var(--ink)] sm:grid-cols-2">
        {[
          'Full Name',
          'Company Name',
          'Mobile Number',
          'Email Address',
          'Service Interested In',
          'Message',
        ].map((field) => (
          <li key={field} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--grain)]" aria-hidden="true" />
            {field}
          </li>
        ))}
      </ul>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--field)]">
        Suggested service options
      </p>
      <ul className="flex flex-wrap gap-2">
        {enquiryServices.map((service) => (
          <li
            key={service}
            className="rounded-full border border-[var(--stroke)] bg-white px-3 py-1.5 text-sm text-[var(--muted)]"
          >
            {service}
          </li>
        ))}
      </ul>
      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--stroke)] bg-[var(--mist)]">
        <div className="flex h-[280px] items-center justify-center px-6 text-center text-[var(--muted)] md:h-[360px]">
          <span>
            iframe placeholder — paste Google Form embed URL when ready
          </span>
        </div>
      </div>
    </div>
  );
}
