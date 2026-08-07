'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { branding, kisanBhavan } from '../../lib/data';

export default function HomeKisanBhavan() {
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
              Archival photographs of the foundation ceremony are still required — placeholders
              below identify exactly what to upload.
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

        <Reveal className="kb-feature-cta" delay={80}>
          <Link className="btn btn-solid" href="/heritage#kisan-bhavan">
            Read the full Kisan Bhavan story
          </Link>
          <Link className="btn btn-line btn-line-dark" href="/heritage">
            Heritage storytelling
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
