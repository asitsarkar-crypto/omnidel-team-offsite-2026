import { NextResponse } from 'next/server';
import { verifyPaymentSignature } from '../../../../lib/payments/razorpay';
import { getSupabaseAdmin, memoryLogTransaction, supabaseConfigured } from '../../../../lib/supabase/server';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, publicId } = body || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ ok: false, error: 'Missing payment fields' }, { status: 400 });
  }

  const valid = verifyPaymentSignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  });

  if (!valid) {
    return NextResponse.json({ ok: false, error: 'Invalid payment signature' }, { status: 400 });
  }

  // UX confirmation only — webhook remains source of truth for ledger status.
  const tx = {
    public_id: publicId || null,
    provider_order_id: razorpay_order_id,
    provider_payment_id: razorpay_payment_id,
    status: 'signature_verified',
    created_at: new Date().toISOString(),
  };

  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      if (publicId) {
        await supabase
          .from('donations')
          .update({ status: 'paid', updated_at: new Date().toISOString() })
          .eq('public_id', publicId)
          .eq('razorpay_order_id', razorpay_order_id);
      }
    } catch (err) {
      console.error('[donations/verify] Supabase error', err);
      memoryLogTransaction(tx);
    }
  } else {
    memoryLogTransaction(tx);
  }

  return NextResponse.json({
    ok: true,
    verified: true,
    note: 'Client verification succeeded. Final settlement is confirmed via Razorpay webhook.',
  });
}
