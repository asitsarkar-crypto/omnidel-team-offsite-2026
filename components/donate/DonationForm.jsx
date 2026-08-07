'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateDonationInput } from '../../lib/donations';
import { formatInr, paymentMethods, pricing, treesToAmountInr } from '../../lib/vatika';

const initial = {
  name: '',
  email: '',
  phone: '',
  trees: 1,
  amountInr: pricing.perTreeInr,
  paymentMethod: 'upi',
  message: '',
};

export default function DonationForm({
  type = 'plant',
  heading = 'Plant a Tree',
  subheading = 'Choose trees, share your details, and complete a secure contribution.',
}) {
  const router = useRouter();
  const [form, setForm] = useState({ ...initial, type });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(null);

  const amountPreview = useMemo(() => {
    if (type === 'donate') return Number(form.amountInr) || 0;
    return treesToAmountInr(form.trees);
  }, [form.amountInr, form.trees, type]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setServerError('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError('');
    setSuccess(null);

    const payload = {
      ...form,
      type,
      trees: type === 'donate' ? 0 : Number(form.trees),
      amountInr: type === 'donate' ? Number(form.amountInr) : treesToAmountInr(form.trees),
    };

    const validated = validateDonationInput(payload);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/donations/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated.data),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setServerError(data.error || 'Unable to submit. Please try again.');
        if (data.errors) setErrors(data.errors);
        return;
      }

      if (data.mode === 'razorpay' && data.razorpay && typeof window !== 'undefined') {
        await openRazorpayCheckout(data, validated.data);
        return;
      }

      setSuccess(data);
      const q = new URLSearchParams({
        id: data.donation.publicId,
        trees: String(data.donation.trees),
        amount: String(data.donation.amountInr),
        mode: data.mode,
      });
      router.push(`/thank-you?${q.toString()}`);
    } catch (err) {
      console.error(err);
      setServerError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  async function openRazorpayCheckout(orderPayload, donor) {
    // Load Razorpay checkout script on demand
    await loadRazorpayScript();
    if (!window.Razorpay) {
      setServerError('Payment widget failed to load. Your pledge can still be recorded.');
      return;
    }

    const rzp = new window.Razorpay({
      key: orderPayload.razorpay.key,
      amount: orderPayload.razorpay.amount,
      currency: orderPayload.razorpay.currency,
      name: 'BKS KY21C Plantation Drive',
      description: `${donor.trees || 0} tree sponsorship`,
      order_id: orderPayload.razorpay.orderId,
      prefill: {
        name: donor.name,
        email: donor.email,
        contact: donor.phone,
      },
      handler: async (response) => {
        await fetch('/api/donations/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...response,
            publicId: orderPayload.donation.publicId,
          }),
        });
        const q = new URLSearchParams({
          id: orderPayload.donation.publicId,
          trees: String(orderPayload.donation.trees),
          amount: String(orderPayload.donation.amountInr),
          mode: 'razorpay',
          payment: response.razorpay_payment_id || '',
        });
        router.push(`/thank-you?${q.toString()}`);
      },
      theme: { color: '#1f4d38' },
    });
    rzp.open();
  }

  return (
    <form className="donation-form" onSubmit={onSubmit} noValidate>
      <div className="donation-form-head">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <p className="donation-rate">
          Campaign rate: {formatInr(pricing.perTreeInr)} / tree
          {/* TODO(stakeholder): Confirm pricing before enabling live Razorpay settlement. */}
        </p>
      </div>

      {type !== 'donate' ? (
        <fieldset className="donation-fieldset">
          <legend>Number of trees</legend>
          <div className="tree-presets">
            {pricing.suggestedTrees.map((n) => (
              <button
                key={n}
                type="button"
                className={`preset-chip ${Number(form.trees) === n ? 'is-active' : ''}`}
                onClick={() => update('trees', n)}
              >
                {n}
              </button>
            ))}
          </div>
          <label className="field">
            <span>Trees</span>
            <input
              type="number"
              min={pricing.minTrees}
              max={pricing.maxTrees}
              value={form.trees}
              onChange={(e) => update('trees', e.target.value)}
              aria-invalid={Boolean(errors.trees)}
            />
            {errors.trees ? <em className="field-error">{errors.trees}</em> : null}
          </label>
        </fieldset>
      ) : (
        <fieldset className="donation-fieldset">
          <legend>Donation amount</legend>
          <div className="tree-presets">
            {pricing.donationPresetsInr.map((n) => (
              <button
                key={n}
                type="button"
                className={`preset-chip ${Number(form.amountInr) === n ? 'is-active' : ''}`}
                onClick={() => update('amountInr', n)}
              >
                {formatInr(n)}
              </button>
            ))}
          </div>
          <label className="field">
            <span>Amount (INR)</span>
            <input
              type="number"
              min={pricing.perTreeInr}
              value={form.amountInr}
              onChange={(e) => update('amountInr', e.target.value)}
              aria-invalid={Boolean(errors.amountInr)}
            />
            {errors.amountInr ? <em className="field-error">{errors.amountInr}</em> : null}
          </label>
        </fieldset>
      )}

      <div className="donation-amount-preview" aria-live="polite">
        Contribution total: <strong>{formatInr(amountPreview)}</strong>
      </div>

      <div className="donation-fields">
        <label className="field">
          <span>Full name</span>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            required
          />
          {errors.name ? <em className="field-error">{errors.name}</em> : null}
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            required
          />
          {errors.email ? <em className="field-error">{errors.email}</em> : null}
        </label>
        <label className="field">
          <span>Phone</span>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            required
          />
          {errors.phone ? <em className="field-error">{errors.phone}</em> : null}
        </label>
      </div>

      <fieldset className="donation-fieldset">
        <legend>Payment method</legend>
        <div className="pay-methods">
          {paymentMethods.map((method) => (
            <label key={method.id} className={`pay-option ${form.paymentMethod === method.id ? 'is-active' : ''}`}>
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={form.paymentMethod === method.id}
                onChange={() => update('paymentMethod', method.id)}
              />
              <span>
                <strong>{method.label}</strong>
                <small>{method.detail}</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field">
        <span>Message (optional)</span>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          maxLength={1000}
          placeholder="Dedication, organisation name, or note"
        />
      </label>

      {serverError ? (
        <p className="form-banner is-error" role="alert">
          {serverError}
        </p>
      ) : null}
      {success ? (
        <p className="form-banner is-ok" role="status">
          Recorded: {success.donation.publicId}
        </p>
      ) : null}

      <p className="donation-legal">
        {/* TODO(legal): Publish entity name + 80G text when registrations are confirmed. */}
        Receipts and 80G eligibility will reflect the registered receiving entity once published.
        Razorpay settles live payments when credentials are configured; otherwise your pledge is
        recorded for follow-up.
      </p>

      <button className="btn btn-solid" type="submit" disabled={submitting}>
        {submitting ? 'Processing…' : type === 'donate' ? 'Donate Now' : 'Continue'}
      </button>
    </form>
  );
}

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if (window.Razorpay) return resolve(true);
    const existing = document.querySelector('script[data-razorpay]');
    if (existing) {
      existing.addEventListener('load', () => resolve(true));
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.dataset.razorpay = 'true';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
