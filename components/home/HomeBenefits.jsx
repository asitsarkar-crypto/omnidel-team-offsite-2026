'use client';

import Reveal from '../Reveal';
import { benefits, vision } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeBenefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.benefits.kicker}</p>
          <h2>{t.benefits.title}</h2>
          <p className="section-deck">{vision.statement}</p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} as="article" className="bg-white/60 p-6 md:p-8">
              <h3 className="mb-3 font-[var(--font-display)] text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="text-[var(--muted)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
