import JsonLd from '../../components/JsonLd';
import DonationForm from '../../components/donate/DonationForm';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.donate);

export default function DonatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Donate', path: '/donate' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/hands-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Donate</p>
          <h1>Donate Now</h1>
          <p className="page-lead">
            Support plantation, nurture, and community stewardship with a general contribution.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <Reveal>
            <DonationForm
              type="donate"
              heading="General donation"
              subheading="Your gift advances the canopy where it is needed most."
            />
            <p className="lede" style={{ marginTop: 24 }}>
              Want a specific tree count?{' '}
              <Link className="text-link" href="/plant">
                Plant a Tree
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
