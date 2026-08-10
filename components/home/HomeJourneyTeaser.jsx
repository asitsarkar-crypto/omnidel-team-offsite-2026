'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { journey } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

const HOME_MILESTONES = 5;

export default function HomeJourneyTeaser() {
  const { t } = useLanguage();
  const list = t.lists?.journey || journey;
  const items = list.slice(0, HOME_MILESTONES);

  return (
    <section id="journey-home" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.journeyHome?.kicker || t.nav.journey}</p>
          <h2>{t.journeyHome?.title || 'A lifetime in service of the annadata'}</h2>
          <p className="section-deck">
            {t.journeyHome?.deck ||
              'From institutional chairmanships and parliamentary testimony to global trade fora — milestones that shaped Indian farmer advocacy.'}
          </p>
        </Reveal>

        <ol className="journey-teaser-rail">
          {items.map((item, i) => (
            <Reveal key={`${item.when}-${item.title}`} delay={i * 55} as="li" className="journey-teaser-item">
              <p className="journey-teaser-when">{item.when}</p>
              <h3>{item.title}</h3>
              <p>{item.what}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <Link className="btn btn-solid" href="/journey">
            {t.journeyHome?.cta || t.cta.exploreJourney}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
