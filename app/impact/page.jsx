import JsonLd from '../../components/JsonLd';
import ImpactCounters from '../../components/home/ImpactCounters';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { campaigns } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.impact);

export default function ImpactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Impact', path: '/impact' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/field-02.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Impact dashboard</p>
          <h1>What we measure, we nurture</h1>
          <p className="page-lead">
            Public counters for trees, sponsors, funds, carbon, villages, and campaigns. Live database
            aggregates activate when Supabase credentials are connected.
          </p>
        </div>
      </section>

      <ImpactCounters compact />

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Campaigns</p>
            <h2>Active plantation drives</h2>
          </Reveal>
          <div className="campaign-list">
            {campaigns.map((c) => (
              <Reveal key={c.slug} className="campaign-card">
                <p className="kicker">{c.status}</p>
                <h3>{c.name}</h3>
                <p>{c.summary}</p>
                <p className="campaign-meta">
                  Goal {c.goalTrees} · Sponsored intent {c.sponsoredTrees} · Planted {c.plantedTrees}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="btn btn-solid" href="/plant">
              Plant a Tree
            </Link>
            <Link className="btn btn-line dark" href="/locations">
              Locations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
