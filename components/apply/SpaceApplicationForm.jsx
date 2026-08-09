'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { contact } from '../../lib/data';
import {
  buildSpaceApplicationLetter,
  emptySpaceApplication,
  spaceApplication,
  spaceApplicationFields,
  validateSpaceApplication,
} from '../../lib/space-application';

function downloadBase64File(filename, base64, contentType) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  const blob = new Blob([bytes], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function openMailto({ to, subject, body }) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

export default function SpaceApplicationForm() {
  const router = useRouter();
  const [form, setForm] = useState(() => emptySpaceApplication());
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const letterPreview = useMemo(() => buildSpaceApplicationLetter(form), [form]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setServerError('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError('');
    const validated = validateSpaceApplication(form);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/space-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error || 'Unable to submit application. Please try again.');
        return;
      }

      if (data.docx?.base64) {
        downloadBase64File(
          data.docx.filename,
          data.docx.base64,
          data.docx.contentType ||
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }

      const mailBody = `${buildSpaceApplicationLetter(form)}

---
Reference: ${data.publicId}
Storage: ${data.storage}
Please find the signed Word document and photographs of the available spaces attached.
`;
      openMailto({
        to: data.mailto?.to || spaceApplication.recipientEmail,
        subject: data.mailto?.subject || `[Space Offer] ${form.organizationName}`,
        body: mailBody,
      });

      const q = new URLSearchParams({
        mode: 'space',
        name: form.applicantName,
        org: form.organizationName,
        id: data.publicId,
        storage: data.storage,
        email: data.email?.sent ? '1' : '0',
      });
      setTimeout(() => {
        router.push(`/thank-you?${q.toString()}`);
      }, 700);
    } catch (err) {
      console.error(err);
      setServerError('Network error while submitting. Please retry or use the Word download.');
    } finally {
      setSubmitting(false);
    }
  }

  async function onDownloadFilledWord() {
    setServerError('');
    const validated = validateSpaceApplication(form);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }
    try {
      const res = await fetch('/api/space-applications/docx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        setServerError('Could not generate Word document.');
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `space-plantation-application-${form.organizationName || 'filled'}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setServerError('Could not download Word document.');
    }
  }

  return (
    <form className="donation-form apply-form" onSubmit={onSubmit} noValidate>
      <div className="donation-form-head">
        <h2>Online application</h2>
        <p>
          Submit on the website — we save the record in the system, generate a <strong>Word (.docx)</strong>{' '}
          file for signing, and open email so you can return the signed copy with photographs to{' '}
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
              I will return the signed Word form with photographs of the available spaces to{' '}
              {spaceApplication.recipientEmail}. *
            </span>
          </span>
          {errors.photoAck ? <em className="field-error">{errors.photoAck}</em> : null}
        </label>
      </div>

      <details className="apply-preview">
        <summary>Preview formal application letter</summary>
        <pre>{letterPreview}</pre>
      </details>

      {serverError ? <p className="field-error">{serverError}</p> : null}

      <div className="hero-actions" style={{ marginTop: 22 }}>
        <button className="btn btn-solid" type="submit" disabled={submitting}>
          {submitting ? 'Saving…' : 'Submit & download Word'}
        </button>
        <button className="btn btn-line dark" type="button" onClick={onDownloadFilledWord}>
          Download filled Word
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
