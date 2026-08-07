import Link from 'next/link';
import Reveal from '../Reveal';
import { vatika } from '../../lib/vatika';

export default function JointInitiative() {
  return (
    <section className="band joint-band" aria-labelledby="joint-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Joint Initiative</p>
          <h2 id="joint-title">Two institutions. One living commitment.</h2>
          <p className="section-deck">{vatika.purpose}</p>
        </Reveal>

        <div className="joint-grid">
          {vatika.jointPartners.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 80} className="joint-card">
              <img src={partner.logo} alt={partner.name} width={72} height={72} />
              <p className="joint-short">{partner.short}</p>
              <h3>{partner.name}</h3>
              <p>{partner.role}</p>
              {partner.href.startsWith('http') ? (
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className="text-link">
                  Visit organisation →
                </a>
              ) : (
                <Link href={partner.href} className="text-link">
                  Learn more →
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
