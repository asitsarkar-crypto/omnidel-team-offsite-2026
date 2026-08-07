import Link from 'next/link';
import Reveal from '../Reveal';
import { mission } from '../../lib/vatika';

export default function MissionTeaser() {
  return (
    <section className="band" aria-labelledby="mission-teaser-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{mission.kicker}</p>
          <h2 id="mission-teaser-title">{mission.title}</h2>
          <p className="section-deck">{mission.lead}</p>
        </Reveal>
        <div className="pillar-grid">
          {mission.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60} className="pillar-item">
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link className="btn btn-line dark" href="/mission">
            Read the full mission
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
