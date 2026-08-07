'use client';

import Link from 'next/link';
import { contact, profile } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-layers" aria-hidden="true">
        <div
          className="hero-photo"
          style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }}
        />
        <div className="hero-veil" />
        <div className="hero-grain" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </div>

      <div className="hero-content wrap">
        <p className="hero-kicker animate-rise">{t.hero.nameLocal}</p>
        <p className="hero-brand animate-rise delay-1">{profile.name}</p>
        <h1 className="animate-rise delay-2">{t.hero.brandLine}</h1>
        <p className="hero-lead animate-rise delay-3">{t.hero.tagline}</p>
        <p className="hero-micro animate-rise delay-3">
          {t.hero.shortTitle} · {profile.qualifications}
        </p>
        <div className="hero-actions animate-rise delay-4">
          <a className="btn btn-solid" href="#services">
            {t.cta.getStarted}
          </a>
          <a className="btn btn-line" href="#contact">
            {t.cta.contactUs}
          </a>
          <a
            className="btn btn-line"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cta.whatsapp}
          </a>
        </div>
        <p className="animate-rise delay-4 mt-4">
          <Link className="text-link" href="/journey" style={{ color: 'rgba(255,248,220,0.9)' }}>
            {t.cta.exploreJourney}
          </Link>
        </p>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>{t.scroll}</span>
        <i />
      </div>
    </section>
  );
}
