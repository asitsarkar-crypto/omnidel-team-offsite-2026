'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { branding, kisanBhavan } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeKisanBhavan() {
  const { t } = useLanguage();
  const k = t.kisanHome || {};
  const photos = (kisanBhavan.photos || []).filter((p) => p.status === 'available' && p.src);
  const cards = k.cards || [];

  return (
    <section
      id="kisan-bhavan"
      className="band kb-feature-band scroll-mt-[calc(var(--nav-h)+var(--lang-bar-h))]"
      aria-labelledby="kisan-bhavan-heading"
    >
      <div className="wrap">
        <Reveal className="section-head kb-feature-head">
          <p className="kicker">{k.kicker}</p>
          <h2 id="kisan-bhavan-heading">{k.title}</h2>
          <p className="section-deck">{k.intro}</p>
        </Reveal>

        <div className="kb-feature-layout">
          <Reveal className="kb-feature-brand">
            <img
              src={branding.bksLogo}
              alt={branding.bksLogoAlt}
              width={160}
              height={160}
              className="kb-feature-seal"
            />
            <p className="kb-feature-note">{k.note}</p>
          </Reveal>

          <div className="kb-feature-points">
            {cards.map((card, i) => (
              <Reveal key={card.title} as="article" className="kb-feature-card" delay={i * 60}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {photos.length ? (
          <div className="kb-photo-grid kb-photo-grid-live" style={{ marginTop: 36 }}>
            {photos.map((photo, i) => (
              <Reveal
                key={photo.src}
                as="figure"
                className={`kb-photo-live is-${photo.orientation || 'landscape'}`}
                delay={i * 50}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal className="kb-feature-cta" delay={80}>
          <Link className="btn btn-solid" href="/heritage#kisan-bhavan">
            {k.ctaStory}
          </Link>
          <Link className="btn btn-line btn-line-dark" href="/gallery">
            {k.ctaGallery}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
