'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

export default function HomeDonateBand() {
  const { t } = useLanguage();
  const c = t.campaign.donate;

  return (
    <section className="band" aria-labelledby="donate-module-title">
      <div className="wrap cta-split">
        <Reveal>
          <p className="kicker">{c.kicker}</p>
          <h2 id="donate-module-title">{c.title}</h2>
          <p className="section-deck">{c.deck}</p>
          <div className="hero-actions" style={{ marginTop: 18 }}>
            <Link className="btn btn-solid" href="/plant">
              {t.cta.getStarted}
            </Link>
            <Link className="btn btn-line dark" href="/donate">
              {t.cta.donateNow}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
