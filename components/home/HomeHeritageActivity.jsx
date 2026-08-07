'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { photosForPlacement } from '../../lib/mahacharya';
import { useLanguage } from '../LanguageProvider';

export default function HomeHeritageActivity() {
  const { t } = useLanguage();
  const c = t.campaign;
  const activityGallery = photosForPlacement('home').slice(0, 6);

  return (
    <>
      <section className="band" aria-labelledby="heritage-brief-title">
        <div className="wrap cta-split">
          <Reveal>
            <p className="kicker">{c.heritage.kicker}</p>
            <h2 id="heritage-brief-title">{c.heritage.title}</h2>
            <p className="section-deck">{c.heritage.deck}</p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-solid" href="/heritage">
                {c.heritage.ctaHeritage}
              </Link>
              <Link className="btn btn-line dark" href="/bks">
                {c.heritage.ctaBks}
              </Link>
              <Link className="btn btn-line dark" href="/about">
                {c.heritage.ctaLeader}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" aria-labelledby="activity-title">
        <div className="wrap">
          <Reveal className="section-head row-head">
            <div>
              <p className="kicker">{c.activity.kicker}</p>
              <h2 id="activity-title">{c.activity.title}</h2>
              <p className="section-deck">{c.activity.deck}</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-line dark" href="/gallery">
                {t.nav.gallery}
              </Link>
              <Link className="btn btn-line dark" href="/locations">
                {t.nav.locations}
              </Link>
              <Link className="btn btn-line dark" href="/impact">
                {t.nav.impact}
              </Link>
            </div>
          </Reveal>
          <div className="home-gallery-grid activity-grid">
            {activityGallery.map((item, i) => (
              <Reveal key={item.src} delay={i * 40} className="home-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <p>{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
