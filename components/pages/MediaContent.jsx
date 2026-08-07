'use client';

import Reveal from '../Reveal';
import SocialIcons from '../SocialIcons';
import {
  featuredMedia,
  mediaFeatures,
  press,
  profile,
  social,
  tvChannels,
} from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function MediaContent() {
  const { t } = useLanguage();
  const p = t.pages?.media || {};
  const featured = mediaFeatures[0] || press.find((item) => item.featured);
  const otherPress = press.filter((item) => !item.featured);

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-panel.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">{p.lead}</p>
        </div>
      </section>

      {featured ? (
        <section className="band press-feature-band">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="kicker">{p.featuredKicker}</p>
              <h2>{p.featuredTitle}</h2>
            </Reveal>

            <Reveal className="press-feature">
              <figure className="press-feature-thumb">
                <img
                  src={featured.image}
                  alt={`${featured.outlet} — ${featured.title}`}
                  loading="lazy"
                />
                <figcaption>
                  {featured.outlet} · {featured.when}
                </figcaption>
              </figure>
              <div className="press-feature-copy">
                <p className="press-outlet">{featured.outlet}</p>
                <p className="press-date">
                  {featured.when}
                  {featured.section ? ` · ${featured.section}` : ''}
                </p>
                <h3 className="press-headline">{featured.title}</h3>
                {featured.titleEn ? <p className="press-headline-en">{featured.titleEn}</p> : null}
                <p className="press-summary">{featured.summary}</p>
                {featured.detail ? <p className="press-detail">{featured.detail}</p> : null}
                {featured.href ? (
                  <a
                    className="btn btn-solid"
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featured.readMoreLabel || p.readMore}
                  </a>
                ) : (
                  <a className="btn btn-solid" href={featured.image}>
                    {featured.readMoreLabel || p.viewClipping}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.pressKicker}</p>
            <h2>{p.pressTitle}</h2>
          </Reveal>
          <div className="press-grid">
            {otherPress.map((item, i) => (
              <Reveal key={`${item.outlet}-${item.title}`} as="article" className="press-card" delay={i * 40}>
                <span className="press-card-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p className="press-card-meta">
                  {item.outlet}
                  {item.when ? ` · ${item.when}` : ''}
                </p>
                {item.summary ? <p className="press-card-summary">{item.summary}</p> : null}
                {item.href ? (
                  <a
                    className="text-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.readMore}
                  </a>
                ) : (
                  <span className="press-card-static">{p.archiveEntry}</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.channelsKicker}</p>
            <h2>{p.channelsTitle}</h2>
          </Reveal>
          <Reveal>
            <SocialIcons items={social} />
          </Reveal>
          <div className="link-grid" style={{ marginTop: 28 }}>
            {social.map((s, i) => (
              <Reveal
                key={s.id}
                as="a"
                className="link-card"
                delay={i * 50}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-label">{s.label}</span>
                <strong>{s.handle}</strong>
                <span className="link-go">Open</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.broadcastKicker}</p>
            <h2>{p.broadcastTitle}</h2>
            <p className="section-deck">
              {profile.name}
            </p>
          </Reveal>
          <div className="chip-row">
            {tvChannels.map((ch) => (
              <span className="chip" key={ch}>
                {ch}
              </span>
            ))}
          </div>
          <ul className="media-list" style={{ marginTop: 28 }}>
            {featuredMedia.map((item, i) => (
              <Reveal key={item.href} as="li" delay={i * 40}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="media-type">{item.type}</span>
                  <span className="media-title">{item.label}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
