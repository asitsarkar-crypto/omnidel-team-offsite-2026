'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import { faq } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeFaq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap narrow">
        <Reveal className="section-head">
          <p className="kicker">{t.faq.kicker}</p>
          <h2>{t.faq.title}</h2>
        </Reveal>
        <div className="grid gap-3">
          {faq.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Reveal key={item.q} delay={index * 40} as="div" className="border border-[var(--stroke)] bg-white/80">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-[var(--font-display)] text-lg text-[var(--ink)]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true" className="text-[var(--grain)]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-[var(--stroke)] px-5 py-4 text-[var(--muted)]"
                >
                  {item.a}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
