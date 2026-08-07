'use client';

import Link from 'next/link';
import { seedSponsor, vatika } from '../../lib/vatika';
import { useLanguage } from '../LanguageProvider';

/**
 * Brief §2 — Hero / Campaign Overview
 * Joint KY21C × BKS · Kaam to Karm · Mishraji anchor sponsorship
 */
export default function CampaignHero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-label="KarmYog Vatika campaign">
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
        <p className="hero-kicker animate-rise">Joint Initiative · KY21C × BKS</p>
        <p className="hero-brand animate-rise delay-1">{vatika.name}</p>
        <h1 className="animate-rise delay-2">Kaam to Karm — plant trust, grow a greener India.</h1>
        <p className="hero-lead animate-rise delay-3">
          Tree Plantation &amp; Sponsorship Platform — a collaborative effort of KarmYog for the 21st
          Century and Bharatiya Krishak Samaj.
        </p>
        <p className="hero-seed animate-rise delay-3">{seedSponsor.headline}</p>
        <div className="hero-actions animate-rise delay-4">
          <Link className="btn btn-solid" href="/plant">
            Plant a Tree
          </Link>
          <Link className="btn btn-line" href="/donate">
            Donate Now
          </Link>
          <Link className="btn btn-line" href="/heritage">
            Heritage
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
