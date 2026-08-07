/**
 * Donation validation & amount helpers (server + client safe).
 */

import { pricing, treesToAmountInr } from './vatika';

export const DONATION_TYPES = ['plant', 'sponsor', 'donate'];

export function sanitizePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '').slice(0, 16);
}

export function validateDonationInput(raw) {
  const errors = {};
  const name = String(raw.name || '').trim();
  const email = String(raw.email || '').trim().toLowerCase();
  const phone = sanitizePhone(raw.phone);
  const message = String(raw.message || '').trim().slice(0, 1000);
  const paymentMethod = String(raw.paymentMethod || 'upi').trim();
  const type = DONATION_TYPES.includes(raw.type) ? raw.type : 'plant';

  let trees = Number.parseInt(raw.trees, 10);
  if (Number.isNaN(trees) || trees < 0) trees = 0;

  let amountInr = Number.parseInt(raw.amountInr, 10);
  if (Number.isNaN(amountInr) || amountInr < 0) amountInr = 0;

  if (type === 'plant' || type === 'sponsor') {
    if (trees < pricing.minTrees) errors.trees = `Minimum ${pricing.minTrees} tree.`;
    if (trees > pricing.maxTrees) errors.trees = `Maximum ${pricing.maxTrees} trees.`;
    amountInr = treesToAmountInr(trees);
  } else {
    if (amountInr < pricing.perTreeInr) {
      errors.amountInr = `Minimum donation is ₹${pricing.perTreeInr}.`;
    }
    // Infer trees from general donation for allocation bookkeeping
    trees = Math.floor(amountInr / pricing.perTreeInr);
  }

  if (name.length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email.';
  if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a valid 10-digit mobile number.';

  const allowedMethods = ['upi', 'card', 'netbanking', 'pledge'];
  if (!allowedMethods.includes(paymentMethod)) {
    errors.paymentMethod = 'Select a payment method.';
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    data: {
      type,
      name,
      email,
      phone,
      trees,
      amountInr,
      amountPaise: amountInr * 100,
      paymentMethod,
      message,
    },
  };
}
