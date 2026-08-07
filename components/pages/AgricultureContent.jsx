'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { pillars } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function AgricultureContent() {
  const { t } = useLanguage();
  const p = t.pages?.agriculture || {};
  const copy = t.lists?.agricultureCopy || {};
  const pillarItems = t.lists?.pillars || pillars;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/crops-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">{copy.lead}</p>
        </div>
      </section>

      <section className="band" id="sustainable">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">{p.sustainableKicker}</p>
            <h2>{p.sustainableTitle}</h2>
            <p>{copy.sustainableBody}</p>
          </Reveal>
          <Reveal delay={80}>
            <img className="section-photo" src="/photos/soil-01.jpg" alt="" />
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" id="traditional">
        <div className="wrap split reverse-split">
          <Reveal>
            <img className="section-photo" src="/photos/seeds-01.jpg" alt="" />
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">{p.traditionalKicker}</p>
            <h2>{p.traditionalTitle}</h2>
            <p>{copy.traditionalBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="band" id="innovation">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{copy.innovationKicker}</p>
            <h2>{copy.innovationTitle}</h2>
            <p className="section-deck">{copy.innovationDeck}</p>
          </Reveal>
          <div className="pillar-grid">
            {pillars.map((base, i) => {
              const text = pillarItems[i] || base;
              return (
                <Reveal key={base.slug} className="pillar-card" delay={i * 60} as="article">
                  <div className="pillar-visual" style={{ backgroundImage: `url('${base.image}')` }} />
                  <div className="pillar-body">
                    <h3>{text.title}</h3>
                    <p>{text.lead}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Link className="text-link" href="/initiatives">
            {copy.initiativesLink}
          </Link>
        </div>
      </section>
    </>
  );
}
