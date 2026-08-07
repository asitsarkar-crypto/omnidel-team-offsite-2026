import Link from 'next/link';
import Reveal from '../Reveal';
import { formatInr, seedSponsor } from '../../lib/vatika';

export default function SeedSponsorBand() {
  return (
    <section className="band seed-band" aria-labelledby="seed-title">
      <div className="wrap seed-panel">
        <Reveal>
          <p className="kicker light">Seed sponsorship</p>
          <h2 id="seed-title">{seedSponsor.headline}</h2>
          <p className="lede seed-lede">{seedSponsor.body}</p>
          <p className="seed-meta">
            {formatInr(seedSponsor.amountInr)} · {seedSponsor.trees} trees
            {/* TODO(stakeholder): Add Mishraji portrait + consent before publishing photo. */}
          </p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="btn btn-solid" href="/plant">
              Sponsor the next grove
            </Link>
            <Link className="btn btn-line" href="/sponsors">
              Meet sponsors
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
