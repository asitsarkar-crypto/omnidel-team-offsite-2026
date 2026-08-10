'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { useLanguage } from '../LanguageProvider';

export default function HomeAbout() {
  const { t } = useLanguage();
  const roleItems = t.lists?.roles || [];

  return (
    <section id="about" className="band intro-band scroll-mt-[var(--nav-h)]">
      <div className="wrap split portrait-split">
        <Reveal className="intro-portrait" as="figure">
          <img
            src="/photos/events/gadkari-meeting.png"
            alt={t.about.photoCaption}
            loading="lazy"
            width={720}
            height={900}
          />
          <figcaption>{t.about.photoCaption}</figcaption>
        </Reveal>
        <Reveal delay={120}>
          <p className="kicker">{t.about.kicker}</p>
          <h2>{t.about.title}</h2>
          <p className="lede">{t.about.summary}</p>
          <p>{t.about.meta}</p>
          <ul className="mt-6 grid gap-3">
            {roleItems.slice(0, 3).map((role) => (
              <li key={`${role.title}-${role.org}`} className="vip-rule">
                <strong className="block text-[var(--ink)]">
                  {role.title} — {role.org}
                </strong>
                <span className="text-sm text-[var(--muted)]">{role.years}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn btn-solid" href="/about">
              {t.cta.fullBio}
            </Link>
            <a className="text-link" href="#leadership">
              {t.cta.whyHim}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
