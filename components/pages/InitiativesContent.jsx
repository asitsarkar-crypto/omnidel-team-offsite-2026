'use client';

import Reveal from '../Reveal';
import { initiatives } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function InitiativesContent() {
  const { t } = useLanguage();
  const p = t.pages?.initiatives || {};
  const items = t.lists?.initiatives || initiatives;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/hands-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
        </div>
      </section>

      <section className="band">
        <div className="wrap initiative-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} as="article" className="initiative-card" delay={i * 50}>
              <span className="pillar-index">0{i + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
