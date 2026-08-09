'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { contact } from '../../lib/data';
import {
  buildSpaceApplicationFilename,
  buildSpaceApplicationLetter,
  buildSpaceApplicationMailto,
  emptySpaceApplication,
  spaceApplication,
  spaceApplicationFields,
  validateSpaceApplication,
} from '../../lib/space-application';

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function SpaceApplicationForm() {
  const router = useRouter();
  const [form, setForm] = useState(() => emptySpaceApplication());
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const letterPreview = useMemo(() => buildSpaceApplicationLetter(form), [form]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const validated = validateSpaceApplication(form);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }

    setSubmitting(true);
    try {
      const letter = buildSpaceApplicationLetter(form);
      downloadTextFile(buildSpaceApplicationFilename(form), letter);
      window.location.href = buildSpaceApplicationMailto(form);
      const q = new URLSearchParams({
        mode: 'space',
        name: form.applicantName,
        org: form.organizationName,
      });
      setTimeout(() => {
        router.push(`/thank-you?${q.toString()}`);
      }, 600);
    } finally {
      setSubmitting(false);
    }
  }

  function onDownloadFilled() {
    const validated = validateSpaceApplication(form);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }
    downloadTextFile(buildSpaceApplicationFilename(form), buildSpaceApplicationLetter(form));
  }

  return (
    <form className="donation-form apply-form" onSubmit={onSubmit} noValidate>
      <div className="donation-form-head">
        <h2>Online application</h2>
        <p>
          Fill this form on the website. On submit we download your filled application and open your
          email to send it to{' '}
          <a href={`mailto:${spaceApplication.recipientEmail}`}>{spaceApplication.recipientEmail}</a>.
        </p>
      </div>

      <div className="donation-fields apply-fields">
        {spaceApplicationFields.map((field) => (
          <label key={field.id} className={`field ${field.type === 'textarea' ? 'field-wide' : ''}`}>
            <span>
              {field.label}
              {field.required ? ' *' : ''}
            </span>
            {field.type === 'textarea' ? (
              <textarea
                rows={4}
                value={form[field.id]}
                placeholder={field.placeholder}
                onChange={(e) => update(field.id, e.target.value)}
                aria-invalid={Boolean(errors[field.id])}
              />
            ) : (
              <input
                type={field.type}
                value={form[field.id]}
                placeholder={field.placeholder}
                min={field.min}
                onChange={(e) => update(field.id, e.target.value)}
                aria-invalid={Boolean(errors[field.id])}
              />
            )}
            {errors[field.id] ? <em className="field-error">{errors[field.id]}</em> : null}
          </label>
        ))}

        <label className="field field-check">
          <span className="check-row">
            <input
              type="checkbox"
              checked={form.permissionConsent}
              onChange={(e) => update('permissionConsent', e.target.checked)}
            />
            <span>
              I am willing to provide the necessary permission and cooperation for plantation at these
              locations. *
            </span>
          </span>
          {errors.permissionConsent ? (
            <em className="field-error">{errors.permissionConsent}</em>
          ) : null}
        </label>

        <label className="field field-check">
          <span className="check-row">
            <input
              type="checkbox"
              checked={form.photoAck}
              onChange={(e) => update('photoAck', e.target.checked)}
            />
            <span>
              I will email photographs of the available spaces to {spaceApplication.recipientEmail}{' '}
              (attach images in your email reply). *
            </span>
          </span>
          {errors.photoAck ? <em className="field-error">{errors.photoAck}</em> : null}
        </label>
      </div>

      <details className="apply-preview">
        <summary>Preview formal application letter</summary>
        <pre>{letterPreview}</pre>
      </details>

      <div className="hero-actions" style={{ marginTop: 22 }}>
        <button className="btn btn-solid" type="submit" disabled={submitting}>
          {submitting ? 'Preparing…' : 'Submit application'}
        </button>
        <button className="btn btn-line dark" type="button" onClick={onDownloadFilled}>
          Download filled form
        </button>
        <a
          className="btn btn-line dark"
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp team
        </a>
      </div>
    </form>
  );
}
