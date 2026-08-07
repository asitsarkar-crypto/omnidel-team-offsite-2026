'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import { faq } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeFaq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="band faq-band scroll-mt-[calc(var(--nav-h)+var(--lang-bar-h))]">
      <div className="wrap faq-wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.faq.kicker}</p>
          <h2>{t.faq.title}</h2>
        </Reveal>
        <div className="faq-list" role="list">
          {faq.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Reveal
                key={item.q}
                delay={index * 40}
                as="div"
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                role="listitem"
              >
                <h3 className="faq-question">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="faq-answer"
                >
                  <p>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
