import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import { mission } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.mission);

export default function MissionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Mission', path: '/mission' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/seeds-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{mission.kicker}</p>
          <h1>{mission.title}</h1>
          <p className="page-lead">{mission.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="pillar-grid">
            {mission.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 60} className="pillar-item">
                <h2>{pillar.title}</h2>
                <p>{pillar.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">SDG alignment</p>
            <h2>Global goals, local canopy</h2>
            <p className="section-deck">
              Content alignment for communication — not a formal UN partnership claim.
            </p>
          </Reveal>
          <ul className="sdg-list">
            {mission.sdgs.map((sdg) => (
              <li key={sdg.code}>
                <strong>SDG {sdg.code}</strong> {sdg.name}
              </li>
            ))}
          </ul>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="btn btn-solid" href="/plant">
              Plant a Tree
            </Link>
            <Link className="btn btn-line dark" href="/initiative">
              Joint initiative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
