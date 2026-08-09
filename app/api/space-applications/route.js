import { NextResponse } from 'next/server';
import { contact } from '../../../lib/data';
import {
  buildSpaceApplicationDocxBuffer,
  spaceApplicationDocxFilename,
} from '../../../lib/space-application-docx';
import { buildSpaceApplicationLetter, spaceApplication } from '../../../lib/space-application';
import {
  emailSpaceApplicationDocx,
  resendConfigured,
  saveSpaceApplication,
} from '../../../lib/space-applications-store';

export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const saved = await saveSpaceApplication(body);
  if (!saved.ok) {
    return NextResponse.json(
      { ok: false, errors: saved.errors, error: saved.error || 'Validation failed' },
      { status: 400 }
    );
  }

  const { publicId, storage, record, warning } = saved;
  const docxBuffer = await buildSpaceApplicationDocxBuffer(record, { publicId });
  const filename = spaceApplicationDocxFilename(record);
  const letter = buildSpaceApplicationLetter(record);

  let email = { sent: false, skipped: true };
  if (resendConfigured()) {
    const result = await emailSpaceApplicationDocx({
      to: spaceApplication.recipientEmail,
      cc: record.email,
      subject: `[Space Offer ${publicId}] ${record.organizationName} — ${record.applicantName}`,
      text: `${letter}\n\n---\nReference: ${publicId}\nStorage: ${storage}\nPlease reply with signed Word/PDF and space photographs if not attached.`,
      filename,
      docxBuffer,
    });
    email = {
      sent: Boolean(result.ok),
      skipped: Boolean(result.skipped),
      id: result.id || null,
      error: result.error || null,
    };
  }

  return NextResponse.json({
    ok: true,
    publicId,
    storage,
    warning: warning || null,
    email,
    mailto: {
      to: spaceApplication.recipientEmail,
      subject: `[Space Offer ${publicId}] ${record.organizationName} — ${record.applicantName}`,
    },
    desk: {
      email: contact.email,
      whatsapp: contact.whatsappUrl,
    },
    docx: {
      filename,
      contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      base64: Buffer.from(docxBuffer).toString('base64'),
    },
    message:
      storage === 'database'
        ? 'Application saved to the database. Download the Word document, sign it, and return by email with photographs.'
        : 'Application captured in JSON memory (Supabase not yet active). Download the Word document, sign it, and email it to the Plants Donation desk with photographs.',
  });
}
