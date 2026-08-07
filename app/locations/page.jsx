import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { locations } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.locations);

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/field-02.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Plantation locations</p>
          <h1>Where trees will take root</h1>
          <p className="page-lead">
            Sites publish as village and district details are confirmed with field partners.
            Placeholders mark planning stages — nothing invented.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap location-grid">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 70} className="location-card">
              <p className="kicker">{loc.status}</p>
              <h2>{loc.name}</h2>
              <p className="location-region">
                {loc.region} · {loc.state}
              </p>
              <p>{loc.detail}</p>
              <p className="campaign-meta">Planned trees: {loc.treesPlanned}</p>
              <p className="campaign-meta">Species: {loc.species.join(', ')}</p>
            </Reveal>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 32 }}>
          <Link className="btn btn-solid" href="/plant">
            Sponsor trees for these sites
          </Link>
        </div>
      </section>
    </>
  );
}
