'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { services } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeServices() {
  const { t } = useLanguage();
  const items = t.services.items;

  return (
    <section id="services" className="band pillars-home scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.services.kicker}</p>
          <h2>{t.services.title}</h2>
          <p className="section-deck">{t.services.deck}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const copy = items[i] || item;
            return (
              <Reveal
                key={item.title}
                as="article"
                delay={i * 70}
                className="group border-t-2 border-[var(--grain)] bg-white/70 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-3 block font-[var(--font-display)] text-sm tracking-[0.12em] text-[var(--grain)]">
                  0{i + 1}
                </span>
                <h3 className="mb-3 font-[var(--font-display)] text-2xl leading-tight text-[var(--ink)]">
                  {copy.title}
                </h3>
                <p className="mb-5 text-[var(--muted)]">{copy.lead}</p>
                <Link className="text-link" href={item.href}>
                  {t.cta.learnMore}
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <a className="btn btn-solid" href="#contact">
            {t.cta.fillForm}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
