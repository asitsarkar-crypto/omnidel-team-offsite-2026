import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { formatInr, seedSponsor, vatika } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.sponsors);

export default function SponsorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Sponsors', path: '/sponsors' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/crops-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Sponsors</p>
          <h1>Those who plant first</h1>
          <p className="page-lead">Seed sponsors and institutional partners of BKS KY21C Plantation Drive.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="sponsor-feature">
            <p className="kicker">Seed sponsor</p>
            <h2>{seedSponsor.displayName}</h2>
            <p className="lede">{seedSponsor.body}</p>
            <p className="campaign-meta">
              {formatInr(seedSponsor.amountInr)} for {seedSponsor.trees} trees
            </p>
            <p className="note-inline">
              {/* TODO(stakeholder): Full name, portrait, and consent pending. */}
              Public profile details will be expanded with consent and approved assets.
            </p>
          </Reveal>

          <Reveal className="section-head" style={{ marginTop: 48 }}>
            <p className="kicker">Institutional partners</p>
            <h2>Joint initiative lockup</h2>
          </Reveal>
          <div className="joint-grid">
            {vatika.jointPartners.map((partner) => (
              <div key={partner.id} className="joint-card">
                <img src={partner.logo} alt={partner.name} width={72} height={72} />
                <h3>{partner.name}</h3>
                <p>{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="hero-actions" style={{ marginTop: 32 }}>
            <Link className="btn btn-solid" href="/plant">
              Become a sponsor
            </Link>
            <Link className="btn btn-line dark" href="/contact">
              Corporate enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
