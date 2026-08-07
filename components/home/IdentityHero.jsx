'use client';

import Link from 'next/link';
import { platform } from '../../lib/platform';
import { useLanguage } from '../LanguageProvider';

/**
 * Identity-first hero — brand + one headline + one support line + CTA group.
 * Plantation is invited, not the only identity.
 */
export default function IdentityHero() {
  const { t } = useLanguage();

  return (
    <section className="hero identity-hero" aria-label="Platform introduction">
      <div className="hero-layers" aria-hidden="true">
        <div
          className="hero-photo"
          style={{ backgroundImage: "url('/photos/field-01.jpg')" }}
        />
        <div className="hero-veil" />
        <div className="hero-grain" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </div>

      <div className="hero-content wrap">
        <p className="hero-kicker animate-rise">{platform.nameHi}</p>
        <p className="hero-brand animate-rise delay-1">{platform.name}</p>
        <h1 className="animate-rise delay-2">{platform.brandLine}</h1>
        <p className="hero-lead animate-rise delay-3">{platform.tagline}</p>
        <p className="hero-micro animate-rise delay-3">
          Bharatiya Krishak Samaj · Krishnavirji · KarmYog for the 21st Century
        </p>
        <div className="hero-actions animate-rise delay-4">
          <Link className="btn btn-solid" href="#pillars">
            Enter the story
          </Link>
          <Link className="btn btn-line" href="/heritage">
            Heritage
          </Link>
          <Link className="btn btn-line" href="/plant">
            {t.cta.getStarted}
          </Link>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>{t.scroll}</span>
        <i />
      </div>
    </section>
  );
}
