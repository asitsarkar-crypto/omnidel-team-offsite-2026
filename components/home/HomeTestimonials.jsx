'use client';

import Reveal from '../Reveal';
import { tvChannels } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeTestimonials() {
  const { t } = useLanguage();
  const quote = t.testimonials?.quote;
  const socialProof = t.testimonials?.socialProof || [];

  return (
    <section id="testimonials" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.testimonials.kicker}</p>
          <h2>{t.testimonials.title}</h2>
        </Reveal>

        {quote ? (
          <Reveal as="blockquote" className="mx-auto mb-12 max-w-3xl border-l-4 border-[var(--grain)] pl-6 md:pl-10">
            <p className="font-[var(--font-display)] text-2xl leading-snug text-[var(--ink)] md:text-3xl">
              “{quote.quote}”
            </p>
            <footer className="mt-6 text-[var(--muted)]">
              <cite className="not-italic font-semibold text-[var(--field)]">{quote.attribution}</cite>
              <span className="block text-sm">{quote.context}</span>
            </footer>
          </Reveal>
        ) : null}

        <div className="grid gap-6 md:grid-cols-3">
          {socialProof.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} as="article">
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--ink)]">{item.title}</h3>
              <p className="text-[var(--muted)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--field)]">
            {t.testimonials.tvLabel}
          </p>
          <p className="text-[var(--muted)]">{tvChannels.join(' · ')}</p>
        </Reveal>
      </div>
    </section>
  );
}
