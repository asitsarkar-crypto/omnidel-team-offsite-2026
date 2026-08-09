/**
 * Persist space-offer applications.
 * Prefer Supabase Postgres when credentials exist; otherwise JSON memory store
 * (same pattern as donations — not durable across cold starts).
 */

import {
  getSupabaseAdmin,
  memoryGetSpaceApplication,
  memoryLogSpaceApplication,
  supabaseConfigured,
} from './supabase/server';
import { validateSpaceApplication } from './space-application';

export function spaceApplicationPublicId() {
  return `SA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function normalizeSpaceApplicationPayload(raw) {
  const validated = validateSpaceApplication(raw);
  if (!validated.ok) return validated;

  const data = {
    applicantName: String(raw.applicantName || '').trim(),
    organizationName: String(raw.organizationName || '').trim(),
    numberOfLocations: Number.parseInt(raw.numberOfLocations, 10) || 0,
    locations: String(raw.locations || '').trim(),
    approximateArea: String(raw.approximateArea || '').trim(),
    plantationCapacity: String(raw.plantationCapacity || '').trim(),
    mobile: String(raw.mobile || '').replace(/\D/g, '').slice(-12),
    email: String(raw.email || '').trim().toLowerCase(),
    applicationDate: String(raw.applicationDate || '').trim(),
    notes: String(raw.notes || '').trim().slice(0, 2000),
    permissionConsent: Boolean(raw.permissionConsent),
    photoAck: Boolean(raw.photoAck),
  };

  return { ok: true, errors: {}, data };
}

/**
 * @returns {Promise<{ ok: true, publicId: string, storage: 'database' | 'json-memory', record: object } | { ok: false, errors?: object, error?: string }>}
 */
export async function saveSpaceApplication(raw) {
  const normalized = normalizeSpaceApplicationPayload(raw);
  if (!normalized.ok) {
    return { ok: false, errors: normalized.errors };
  }

  const { data } = normalized;
  const publicId = spaceApplicationPublicId();
  const createdAt = new Date().toISOString();
  const record = {
    public_id: publicId,
    ...data,
    status: 'submitted',
    created_at: createdAt,
  };

  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      const { error } = await supabase.from('space_applications').insert({
        public_id: publicId,
        applicant_name: data.applicantName,
        organization_name: data.organizationName,
        number_of_locations: data.numberOfLocations,
        locations: data.locations,
        approximate_area: data.approximateArea,
        plantation_capacity: data.plantationCapacity,
        mobile: data.mobile,
        email: data.email,
        application_date: data.applicationDate || null,
        notes: data.notes || null,
        permission_consent: data.permissionConsent,
        photo_ack: data.photoAck,
        status: 'submitted',
        payload: data,
      });
      if (error) throw error;
      return { ok: true, publicId, storage: 'database', record };
    } catch (err) {
      console.error('[space-applications] Supabase insert failed — JSON memory fallback', err);
      memoryLogSpaceApplication(record);
      return {
        ok: true,
        publicId,
        storage: 'json-memory',
        record,
        warning: 'Database write failed; captured in server JSON memory until Supabase migration is applied.',
      };
    }
  }

  memoryLogSpaceApplication(record);
  return {
    ok: true,
    publicId,
    storage: 'json-memory',
    record,
    warning:
      'Supabase is not configured. Application captured in ephemeral JSON memory (same pledge mode as donations). Apply supabase/migrations/002_space_applications.sql and set SUPABASE_* env for durable DB storage.',
  };
}

export async function getSpaceApplicationByPublicId(publicId) {
  if (!publicId) return null;

  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      const { data, error } = await supabase
        .from('space_applications')
        .select('*')
        .eq('public_id', publicId)
        .maybeSingle();
      if (error) throw error;
      if (data) {
        return {
          public_id: data.public_id,
          applicantName: data.applicant_name,
          organizationName: data.organization_name,
          numberOfLocations: data.number_of_locations,
          locations: data.locations,
          approximateArea: data.approximate_area,
          plantationCapacity: data.plantation_capacity,
          mobile: data.mobile,
          email: data.email,
          applicationDate: data.application_date,
          notes: data.notes,
          status: data.status,
          storage: 'database',
        };
      }
    } catch (err) {
      console.error('[space-applications] Supabase read failed', err);
    }
  }

  const mem = memoryGetSpaceApplication(publicId);
  return mem ? { ...mem, storage: 'json-memory' } : null;
}

export function resendConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RECEIPT_FROM_EMAIL);
}

/**
 * Email Word application to desk (+ optional applicant copy) via Resend when configured.
 */
export async function emailSpaceApplicationDocx({
  to,
  cc,
  subject,
  text,
  filename,
  docxBuffer,
}) {
  if (!resendConfigured()) {
    return { ok: false, skipped: true, reason: 'RESEND_API_KEY / RECEIPT_FROM_EMAIL not set' };
  }

  const content = Buffer.from(docxBuffer).toString('base64');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RECEIPT_FROM_EMAIL,
      to: Array.isArray(to) ? to : [to],
      cc: cc ? (Array.isArray(cc) ? cc : [cc]) : undefined,
      subject,
      text,
      attachments: [{ filename, content }],
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('[space-applications] Resend error', body);
    return { ok: false, skipped: false, error: body.message || 'Email send failed' };
  }
  return { ok: true, id: body.id };
}
