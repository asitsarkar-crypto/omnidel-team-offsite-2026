'use client';

import Reveal from '../Reveal';
import { processSteps } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeProcess() {
  const { t } = useLanguage();

  return (
    <section id="process" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.process.kicker}</p>
          <h2>{t.process.title}</h2>
          <p className="section-deck">{t.process.deck}</p>
        </Reveal>
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} as="li" delay={i * 80} className="relative">
              <span className="mb-3 block font-[var(--font-display)] text-4xl text-[var(--grain)]">
                {step.step}
              </span>
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--ink)]">{step.title}</h3>
              <p className="text-[var(--muted)]">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
