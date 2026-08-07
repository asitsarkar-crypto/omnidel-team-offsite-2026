'use client';

import Link from 'next/link';
import { seedSponsor, vatika } from '../../lib/vatika';
import { useLanguage } from '../LanguageProvider';

export default function VatikaHero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-label="BKS KY21C Plantation Drive">
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
        <p className="hero-kicker animate-rise">{t.hero.nameLocal}</p>
        <p className="hero-brand animate-rise delay-1">{vatika.name}</p>
        <h1 className="animate-rise delay-2">{t.hero.brandLine}</h1>
        <p className="hero-lead animate-rise delay-3">{t.hero.tagline}</p>
        <p className="hero-micro animate-rise delay-3">{t.hero.shortTitle}</p>
        <p className="hero-seed animate-rise delay-3">{seedSponsor.headline}</p>
        <div className="hero-actions animate-rise delay-4">
          <Link className="btn btn-solid" href="/plant">
            {t.cta.getStarted}
          </Link>
          <Link className="btn btn-line" href="/donate">
            {t.cta.donateNow || 'Donate Now'}
          </Link>
          <Link className="btn btn-line" href="/mission">
            {t.cta.learnMore}
          </Link>
        </div>
        <p className="animate-rise delay-4 mt-4">
          <Link className="text-link" href="/heritage" style={{ color: 'rgba(255,248,220,0.9)' }}>
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
