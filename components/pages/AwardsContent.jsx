'use client';

import Reveal from '../Reveal';
import { awards } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function AwardsContent() {
  const { t } = useLanguage();
  const p = t.pages?.awards || {};
  const items = t.lists?.awards || awards;

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-award.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">{p.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap award-grid">
          {items.map((item, i) => {
            const image = awards[i]?.image || item.image;
            return (
              <Reveal key={item.title} as="article" className="award-card" delay={i * 70}>
                <img src={image} alt="" />
                <div>
                  <p className="kicker">{item.when}</p>
                  <h2>{item.title}</h2>
                  <p className="lede">{item.by}</p>
                  <p>{item.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
