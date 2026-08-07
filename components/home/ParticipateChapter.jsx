'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

/** Participation chapter — ready to evolve; does not own the first viewport. */
export default function ParticipateChapter() {
  const { t } = useLanguage();
  const c = t.campaign.participate;

  return (
    <section className="band participate-band" aria-labelledby="participate-title">
      <div className="wrap participate-panel">
        <Reveal>
          <p className="kicker light">{c.kicker}</p>
          <h2 id="participate-title">{c.title}</h2>
          <p className="lede seed-lede">{c.lead}</p>
          <p className="seed-meta">
            {c.metaPrefix} {t.campaign.seed.headline}
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <Link className="btn btn-solid" href="/plant">
              {t.cta.getStarted}
            </Link>
            <Link className="btn btn-line" href="/donate">
              {t.cta.donateNow}
            </Link>
            <Link className="btn btn-line" href="/impact">
              {t.cta.viewImpact}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
