'use client';

import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

export default function HomeWhyUs() {
  const { t } = useLanguage();
  const whyItems = t.why?.items || [];
  const awards = t.awardsShort || [];
  const ribbon = t.proofRibbon || [];

  return (
    <section id="why-us" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.why.kicker}</p>
          <h2>{t.why.title}</h2>
          <p className="section-deck">{t.why.deck}</p>
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-3">
          {ribbon.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-2 text-sm text-[var(--field)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="why-grid">
          {whyItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} as="article">
              <h3 className="mb-2 font-[var(--font-display)] text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="text-[var(--muted)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="award-rail mt-12">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 60} as="article">
              <p className="text-sm text-[var(--grain)]">{award.when}</p>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--ink)]">{award.title}</h3>
              <p className="text-sm text-[var(--muted)]">{award.by}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
