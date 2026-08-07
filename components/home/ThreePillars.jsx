import Link from 'next/link';
import Reveal from '../Reveal';
import { pillars } from '../../lib/platform';

export default function ThreePillars() {
  return (
    <section id="pillars" className="band pillars-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Three pillars</p>
          <h2>One digital home. Three living identities.</h2>
          <p className="section-deck">
            Institution, leadership, and movement — presented with equal dignity, connected by service
            to farmer and nation.
          </p>
        </Reveal>

        <div className="pillar-identity-grid">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 90} className="pillar-identity-card">
              <p className="kicker">{pillar.kicker}</p>
              <div className="pillar-identity-media">
                <img
                  src={pillar.logo}
                  alt={pillar.title}
                  width={pillar.id === 'krishnavirji' ? 120 : 72}
                  height={pillar.id === 'krishnavirji' ? 120 : 72}
                  className={pillar.id === 'krishnavirji' ? 'pillar-portrait' : ''}
                />
              </div>
              <p className="joint-short">{pillar.short}</p>
              <h3>{pillar.title}</h3>
              {pillar.localName ? <p className="pillar-local">{pillar.localName}</p> : null}
              <p>{pillar.lead}</p>
              <ul className="pillar-points">
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="text-link" href={pillar.href}>
                Explore →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
