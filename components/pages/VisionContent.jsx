'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { vision } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function VisionContent() {
  const { t } = useLanguage();
  const p = t.pages?.vision || {};
  const v = t.lists?.vision || vision;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/field-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{v.statement}</h1>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">{p.missionKicker}</p>
            <h2>{p.missionTitle}</h2>
            <p className="lede">{v.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.valuesKicker}</p>
            <h2>{p.valuesTitle}</h2>
          </Reveal>
          <div className="chip-row large">
            {(v.values || []).map((value) => (
              <span className="chip" key={value}>
                {value}
              </span>
            ))}
          </div>
          <Reveal>
            <Link className="text-link" href="/initiatives">
              {p.initiativesLink}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
