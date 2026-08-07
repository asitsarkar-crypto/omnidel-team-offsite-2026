'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { vatika } from '../../lib/vatika';
import { useLanguage } from '../LanguageProvider';

export default function JointInitiative() {
  const { t } = useLanguage();
  const c = t.campaign.joint;

  return (
    <section className="band joint-band" aria-labelledby="joint-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{c.kicker}</p>
          <h2 id="joint-title">{c.title}</h2>
          <p className="section-deck">{c.purpose}</p>
        </Reveal>

        <div className="joint-grid">
          {vatika.jointPartners.map((partner, i) => {
            const copy = c.partners[partner.id] || {
              name: partner.name,
              role: partner.role,
            };
            return (
              <Reveal key={partner.id} delay={i * 80} className="joint-card">
                <img src={partner.logo} alt={copy.name} width={72} height={72} />
                <p className="joint-short">{partner.short}</p>
                <h3>{copy.name}</h3>
                <p>{copy.role}</p>
                {partner.href.startsWith('http') ? (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {c.visit}
                  </a>
                ) : (
                  <Link href={partner.href} className="text-link">
                    {c.learn}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
