'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

/** Leadership & Recognition — merges proof, why, awards, benefits. */
export default function HomeLeadership() {
  const { t } = useLanguage();
  const ribbon = t.proofRibbon || [];
  const whyItems = t.why?.items || [];
  const awards = t.awardsShort || [];
  const benefits = t.benefits?.items || [];
  const processSteps = t.process?.steps || [];

  return (
    <section id="leadership" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.leadership?.kicker || 'Leadership & recognition'}</p>
          <h2>{t.leadership?.title || 'Why his word carries weight'}</h2>
          <p className="section-deck">
            {t.leadership?.deck || t.why?.deck}
          </p>
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-3" aria-label={t.aria?.proof || 'Credentials'}>
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
            <Reveal key={item.title} delay={i * 70} as="article">
              <h3 className="mb-2 font-[var(--font-display)] text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="text-[var(--muted)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        {benefits.length ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} as="article" className="bg-white/60 p-6 md:p-8">
                <h3 className="mb-3 font-[var(--font-display)] text-xl text-[var(--ink)] md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)]">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="award-rail mt-12">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 50} as="article">
              <p className="text-sm text-[var(--grain)]">{award.when}</p>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--ink)]">{award.title}</h3>
              <p className="text-sm text-[var(--muted)]">{award.by}</p>
            </Reveal>
          ))}
        </div>

        {processSteps.length ? (
          <div className="mt-14">
            <Reveal className="section-head mb-8">
              <p className="kicker">{t.process?.kicker || 'Engagement'}</p>
              <h3 className="font-[var(--font-display)] text-2xl text-[var(--ink)] md:text-3xl">
                {t.process?.title || 'From enquiry to public follow-through'}
              </h3>
              <p className="section-deck">{t.process?.deck}</p>
            </Reveal>
            <ol className="process-steps">
              {processSteps.map((step, i) => (
                <Reveal key={step.title || step.step} delay={i * 60} as="li" className="process-step">
                  <span className="process-step-num mb-3 block font-[var(--font-display)] text-4xl text-[var(--grain)]">
                    {step.step || `0${i + 1}`}
                  </span>
                  <h4 className="mb-2 font-[var(--font-display)] text-xl text-[var(--ink)]">{step.title}</h4>
                  <p className="text-[var(--muted)]">{step.detail}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-8">
              <Link className="btn btn-solid" href="#contact">
                {t.cta.contactUs}
              </Link>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
