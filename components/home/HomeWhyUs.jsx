'use client';

import Reveal from '../Reveal';
import { awards, proofRibbon, whyChoose } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeWhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.why.kicker}</p>
          <h2>{t.why.title}</h2>
          <p className="section-deck">{t.why.deck}</p>
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-3">
          {proofRibbon.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-2 text-sm text-[var(--field)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} as="article">
              <h3 className="mb-2 font-[var(--font-display)] text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="text-[var(--muted)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 60} as="article" className="border-l-2 border-[var(--grain)] pl-4">
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
