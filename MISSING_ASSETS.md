# Missing assets & credentials — KarmYog Vatika

Tracked so delivery can continue with placeholders. Replace before production go-live.

## Content / legal
- [ ] Confirm price per tree (currently ₹150 from ₹15,000 ÷ 100)
- [ ] Mishraji full name, portrait, quote, public consent
- [ ] Approved “Kaam to Karm” final tagline
- [ ] Registered legal payee entity name, PAN, 12A/80G text
- [ ] Verified plantation village list, geo coordinates, species
- [ ] Kisan Bhavan / Deve Gowda primary documents (already placeholdered in heritage)

## Media
- [ ] Dedicated plantation hero photograph
- [ ] Campaign press articles / videos specific to Vatika sponsorship
- [ ] Sponsor logos beyond KY21C + BKS

## Infrastructure
- [ ] `NEXT_PUBLIC_SITE_URL` custom domain
- [ ] Supabase project + apply `supabase/migrations/001_init.sql`
- [ ] Razorpay KYC + `RAZORPAY_*` / `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- [ ] Webhook URL → `/api/webhooks/razorpay`
- [ ] Receipt email provider (e.g. Resend)

Until credentials exist, donation APIs run in **pledge mode** and impact APIs serve the curated launch snapshot.
