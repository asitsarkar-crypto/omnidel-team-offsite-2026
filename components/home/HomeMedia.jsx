'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { press } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

const HOME_PRESS_COUNT = 4;

export default function HomeMedia() {
  const { t } = useLanguage();
  const items = press.slice(0, HOME_PRESS_COUNT);

  return (
    <section id="media-home" className="band muted-band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{t.mediaHome?.kicker || t.nav.media}</p>
          <h2>{t.mediaHome?.title || 'Featured media & press'}</h2>
          <p className="section-deck">
            {t.mediaHome?.deck ||
              'Editorial platforms, national press, and public interviews carrying the farmer’s voice into policy rooms and living rooms.'}
          </p>
        </Reveal>

        <div className="media-home-grid">
          {items.map((item, i) => {
            const external = Boolean(item.href && /^https?:/i.test(item.href));
            const moreHref = item.href || '/media';

            return (
              <Reveal key={item.id || item.title} delay={i * 60} as="article" className="media-home-card">
                {item.image ? (
                  <div
                    className="media-home-thumb"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={item.titleEn || item.title}
                  />
                ) : (
                  <div className="media-home-thumb is-plain" aria-hidden="true">
                    <span>{item.type || 'Press'}</span>
                  </div>
                )}
                <div className="media-home-body">
                  <p className="media-home-meta">
                    <span>{item.outlet}</span>
                    {item.when ? <span aria-hidden="true"> · </span> : null}
                    {item.when ? <span>{item.when}</span> : null}
                  </p>
                  <h3>{item.titleEn || item.title}</h3>
                  <p>{item.summary || item.detail}</p>
                  {external ? (
                    <a
                      className="text-link"
                      href={moreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.readMoreLabel || t.cta.learnMore}
                    </a>
                  ) : (
                    <Link className="text-link" href={moreHref}>
                      {item.readMoreLabel || t.cta.learnMore}
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Link className="btn btn-solid" href="/media">
            {t.mediaHome?.cta || t.nav.media}
          </Link>
          <Link className="btn btn-line btn-line-dark" href="/gallery">
            {t.nav.gallery}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
