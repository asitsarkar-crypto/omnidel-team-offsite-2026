import Link from 'next/link';
import { buildMetadata, pageSeo } from '../../lib/seo';
import { formatInr } from '../../lib/vatika';

export const metadata = buildMetadata(pageSeo.thankYou);

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const mode = params?.mode || 'pledge';
  const isSpace = mode === 'space';

  if (isSpace) {
    const name = params?.name || 'Friend';
    const org = params?.org || '';
    const id = params?.id || '—';
    const storage = params?.storage || 'json-memory';
    const emailSent = params?.email === '1';
    const storageLabel =
      storage === 'database'
        ? 'Postgres database (Supabase)'
        : 'JSON memory store (configure Supabase for durable DB capture)';
    return (
      <section className="band">
        <div className="wrap narrow thank-panel">
          <p className="kicker">Space offer received</p>
          <h1>Thank you for offering plantation space</h1>
          <p className="lede">
            {name}
            {org ? ` (${org})` : ''}, your Plants Donation space application is recorded.
          </p>
          <dl className="thank-dl">
            <div>
              <dt>Reference</dt>
              <dd>{id}</dd>
            </div>
            <div>
              <dt>Storage</dt>
              <dd>{storageLabel}</dd>
            </div>
            <div>
              <dt>Word / email</dt>
              <dd>
                {emailSent
                  ? 'System email sent with Word attachment (Resend).'
                  : 'Word file downloaded — attach the signed copy + photos in your email return.'}
              </dd>
            </div>
          </dl>
          <p className="lede soft">
            Next step: sign the Word document (or print/PDF), attach clear photographs of each plot, and
            email <a href="mailto:reachus@ky21c.org">reachus@ky21c.org</a>.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="btn btn-solid" href={`/api/space-applications/docx?id=${encodeURIComponent(id)}`}>
              Re-download Word form
            </a>
            <Link className="btn btn-line dark" href="/apply/print">
              Print hard-copy form
            </Link>
            <Link className="btn btn-line dark" href="/apply">
              Back to Apply
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const id = params?.id || '—';
  const trees = params?.trees || '0';
  const amount = Number(params?.amount || 0);
  const payment = params?.payment || '';

  return (
    <section className="band">
      <div className="wrap narrow thank-panel">
        <p className="kicker">Acknowledgement</p>
        <h1>Thank you for planting with us</h1>
        <p className="lede">
          Your contribution to BKS KY21C Plantation Drive is recorded. A receipt trail is prepared when the
          payment gateway and legal entity details are fully configured.
        </p>
        <dl className="thank-dl">
          <div>
            <dt>Reference</dt>
            <dd>{id}</dd>
          </div>
          <div>
            <dt>Trees</dt>
            <dd>{trees}</dd>
          </div>
          <div>
            <dt>Amount</dt>
            <dd>{formatInr(amount)}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>{mode === 'razorpay' ? 'Razorpay checkout' : 'Pledge / pending settlement'}</dd>
          </div>
          {payment ? (
            <div>
              <dt>Payment ID</dt>
              <dd>{payment}</dd>
            </div>
          ) : null}
        </dl>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <Link className="btn btn-solid" href="/impact">
            View impact
          </Link>
          <Link className="btn btn-line dark" href="/apply">
            Offer plantation space
          </Link>
          <Link className="btn btn-line dark" href="/">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
