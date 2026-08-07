'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { branding, kisanBhavan } from '../../lib/data';

export default function HomeKisanBhavan() {
  const photos = (kisanBhavan.photos || []).filter((p) => p.status === 'available' && p.src);

  return (
    <section
      id="kisan-bhavan"
      className="band kb-feature-band scroll-mt-[calc(var(--nav-h)+var(--lang-bar-h))]"
      aria-labelledby="kisan-bhavan-heading"
    >
      <div className="wrap">
        <Reveal className="section-head kb-feature-head">
          <p className="kicker">{kisanBhavan.kicker}</p>
          <h2 id="kisan-bhavan-heading">{kisanBhavan.title}</h2>
          <p className="section-deck">{kisanBhavan.featuredIntro}</p>
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
            <p className="kb-feature-note">
              Archival ceremony photographs from the project library document the 26 December 1996
              inauguration — including the plaque naming H. D. Deve Gowda and Dr. Krishan Bir
              Chaudhary.
            </p>
          </Reveal>

          <div className="kb-feature-points">
            <Reveal as="article" className="kb-feature-card">
              <h3>Why it was established</h3>
              <p>{kisanBhavan.whyEstablished.text}</p>
            </Reveal>
            <Reveal as="article" className="kb-feature-card" delay={60}>
              <h3>Historical significance</h3>
              <p>{kisanBhavan.historicalSignificance.text}</p>
            </Reveal>
            <Reveal as="article" className="kb-feature-card" delay={120}>
              <h3>Foundation stone &amp; H. D. Deve Gowda</h3>
              <p>{kisanBhavan.deveGowda.text}</p>
            </Reveal>
            <Reveal as="article" className="kb-feature-card" delay={180}>
              <h3>Krishan Bir Chaudhary’s role</h3>
              <p>{kisanBhavan.roleOfKrishanBir.text}</p>
            </Reveal>
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
            Read the full Kisan Bhavan story
          </Link>
          <Link className="btn btn-line btn-line-dark" href="/gallery">
            Open photo gallery
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
