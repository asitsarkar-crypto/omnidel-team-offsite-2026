'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

export default function SeedSponsorBand() {
  const { t } = useLanguage();
  const c = t.campaign.seed;

  return (
    <section className="band seed-band" aria-labelledby="seed-title">
      <div className="wrap seed-panel">
        <Reveal>
          <p className="kicker light">{c.kicker}</p>
          <h2 id="seed-title">{c.headline}</h2>
          <p className="lede seed-lede">{c.body}</p>
          <p className="seed-meta">{c.meta}</p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="btn btn-solid" href="/plant">
              {c.ctaGrove}
            </Link>
            <Link className="btn btn-line" href="/sponsors">
              {c.ctaSponsors}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
