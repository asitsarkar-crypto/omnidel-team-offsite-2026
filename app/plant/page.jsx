import JsonLd from '../../components/JsonLd';
import DonationForm from '../../components/donate/DonationForm';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { formatInr, pricing } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.plant);

export default function PlantPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Plant a Tree', path: '/plant' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/soil-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Plant &amp; sponsor</p>
          <h1>Plant a Tree</h1>
          <p className="page-lead">
            Sponsor trees at {formatInr(pricing.perTreeInr)} each. Choose a count, share your details,
            and complete a secure contribution.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap plant-layout">
          <Reveal className="plant-aside">
            <p className="kicker">Packages</p>
            <h2>Find your scale</h2>
            <ul className="package-list">
              {pricing.packages.map((pkg) => (
                <li key={pkg.id} className={pkg.featured ? 'is-featured' : ''}>
                  <strong>{pkg.name}</strong>
                  <span>
                    {pkg.trees} trees · {formatInr(pkg.trees * pricing.perTreeInr)}
                  </span>
                  <em>{pkg.label}</em>
                </li>
              ))}
            </ul>
            <p className="lede">
              Prefer a general gift without choosing tree count?{' '}
              <Link className="text-link" href="/donate">
                Donate Now
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={80}>
            <DonationForm
              type="plant"
              heading="Sponsor trees"
              subheading="Name, email, phone, trees, payment method, and an optional message."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
