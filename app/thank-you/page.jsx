import Link from 'next/link';
import { buildMetadata, pageSeo } from '../../lib/seo';
import { formatInr } from '../../lib/vatika';

export const metadata = buildMetadata(pageSeo.thankYou);

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const id = params?.id || '—';
  const trees = params?.trees || '0';
  const amount = Number(params?.amount || 0);
  const mode = params?.mode || 'pledge';
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
          <Link className="btn btn-line dark" href="/">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
