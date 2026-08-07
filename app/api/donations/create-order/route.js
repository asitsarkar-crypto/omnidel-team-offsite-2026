import { NextResponse } from 'next/server';
import { validateDonationInput } from '../../../../lib/donations';
import { createRazorpayOrder, getRazorpayPublicKey, razorpayConfigured } from '../../../../lib/payments/razorpay';
import { getSupabaseAdmin, memoryLogDonation, supabaseConfigured } from '../../../../lib/supabase/server';

function publicId() {
  return `KV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const validated = validateDonationInput(body);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, errors: validated.errors }, { status: 400 });
  }

  const { data } = validated;
  const id = publicId();
  const receipt = id.slice(0, 40);

  let razorpay = { mode: 'pledge', order: null };
  try {
    if (data.paymentMethod !== 'pledge' && razorpayConfigured()) {
      razorpay = await createRazorpayOrder({
        amountPaise: data.amountPaise,
        receipt,
        notes: {
          public_id: id,
          donor_email: data.email,
          trees: String(data.trees),
          type: data.type,
        },
      });
    }
  } catch (err) {
    console.error('[donations/create-order] Razorpay error', err);
    return NextResponse.json(
      { ok: false, error: 'Unable to start payment. Please try pledge mode or retry shortly.' },
      { status: 502 },
    );
  }

  const status = razorpay.mode === 'razorpay' ? 'awaiting_payment' : 'pending';
  const record = {
    public_id: id,
    ...data,
    status,
    razorpay_order_id: razorpay.order?.id || null,
    created_at: new Date().toISOString(),
  };

  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      const { data: donorRow, error: donorErr } = await supabase
        .from('donors')
        .upsert(
          { full_name: data.name, email: data.email, phone: data.phone },
          { onConflict: 'email' },
        )
        .select('id')
        .single();
      if (donorErr) throw donorErr;

      const { error: donationErr } = await supabase.from('donations').insert({
        public_id: id,
        donor_id: donorRow.id,
        donation_type: data.type,
        trees: data.trees,
        amount_paise: data.amountPaise,
        payment_method: data.paymentMethod,
        message: data.message,
        status,
        razorpay_order_id: razorpay.order?.id || null,
      });
      if (donationErr) throw donationErr;
    } catch (err) {
      console.error('[donations/create-order] Supabase error — falling back to memory', err);
      memoryLogDonation(record);
    }
  } else {
    memoryLogDonation(record);
  }

  return NextResponse.json({
    ok: true,
    mode: razorpay.mode,
    donation: {
      publicId: id,
      trees: data.trees,
      amountInr: data.amountInr,
      status,
    },
    razorpay:
      razorpay.mode === 'razorpay'
        ? {
            key: getRazorpayPublicKey(),
            orderId: razorpay.order.id,
            amount: razorpay.order.amount,
            currency: razorpay.order.currency,
          }
        : null,
    message:
      razorpay.mode === 'razorpay'
        ? 'Order created. Complete payment in the checkout window.'
        : 'Pledge recorded. Live Razorpay settlement activates when credentials are configured.',
  });
}
