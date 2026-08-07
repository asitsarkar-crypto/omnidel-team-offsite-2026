import { NextResponse } from 'next/server';
import { verifyWebhookSignature } from '../../../../lib/payments/razorpay';
import { getSupabaseAdmin, memoryLogTransaction, supabaseConfigured } from '../../../../lib/supabase/server';

export async function POST(request) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-razorpay-signature');

  if (!verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ ok: false, error: 'Invalid webhook signature' }, { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const eventId = event?.id || null;
  const eventType = event?.event || 'unknown';
  const payment = event?.payload?.payment?.entity;
  const orderId = payment?.order_id || null;
  const paymentId = payment?.id || null;
  const amount = payment?.amount || 0;

  let status = 'received';
  if (eventType === 'payment.captured') status = 'paid';
  if (eventType === 'payment.failed') status = 'failed';
  if (eventType === 'refund.processed') status = 'refunded';

  const tx = {
    provider_event_id: eventId,
    provider_order_id: orderId,
    provider_payment_id: paymentId,
    amount_paise: amount,
    status,
    raw: event,
    created_at: new Date().toISOString(),
  };

  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      if (eventId) {
        const { data: existing } = await supabase
          .from('transactions')
          .select('id')
          .eq('provider_event_id', eventId)
          .maybeSingle();
        if (existing) {
          return NextResponse.json({ ok: true, deduped: true });
        }
      }

      let donationId = null;
      if (orderId) {
        const { data: donation } = await supabase
          .from('donations')
          .select('id')
          .eq('razorpay_order_id', orderId)
          .maybeSingle();
        donationId = donation?.id || null;
        if (donationId && ['paid', 'failed', 'refunded'].includes(status)) {
          await supabase
            .from('donations')
            .update({ status, updated_at: new Date().toISOString() })
            .eq('id', donationId);
        }
      }

      if (donationId) {
        await supabase.from('transactions').insert({
          donation_id: donationId,
          provider: 'razorpay',
          provider_payment_id: paymentId,
          provider_order_id: orderId,
          provider_event_id: eventId,
          amount_paise: amount,
          status,
          raw: event,
        });
      }
    } catch (err) {
      console.error('[webhooks/razorpay] Supabase error', err);
      memoryLogTransaction(tx);
    }
  } else {
    memoryLogTransaction(tx);
  }

  return NextResponse.json({ ok: true });
}
