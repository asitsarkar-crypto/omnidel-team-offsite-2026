import Link from 'next/link';
import Reveal from '../../components/Reveal';
import JsonLd from '../../components/JsonLd';
import { featuredMedia, press, social, tvChannels } from '../../lib/data';
import { mediaSections, vatika } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.media);

export default function MediaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Media', path: '/media' },
        ])}
      />

      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-panel.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Media centre</p>
          <h1>News, press, videos &amp; articles</h1>
          <p className="page-lead">
            Coverage and storytelling for {vatika.name} — plus the institutional archive of Bharatiya
            Krishak Samaj leadership.
          </p>
        </div>
      </section>

      <section className="band" id="videos">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Videos</p>
            <h2>Watch the movement</h2>
          </Reveal>
          <div className="media-card-grid">
            {mediaSections.videos.map((item, i) => (
              <Reveal key={item.id} delay={i * 50} className={`media-card ${item.status === 'placeholder' ? 'is-placeholder' : ''}`}>
                <span className="media-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.outlet}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-link">
                    Open video →
                  </a>
                ) : (
                  <p className="note-inline">{item.note}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band" id="press">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Press &amp; news</p>
            <h2>Campaign desk &amp; institutional coverage</h2>
          </Reveal>
          <div className="media-card-grid">
            {mediaSections.press.map((item) => (
              <Reveal key={item.id} className="media-card is-placeholder">
                <span className="media-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>
                  {item.outlet}
                  {item.when ? ` · ${item.when}` : ''}
                </p>
                <p className="note-inline">{item.note}</p>
              </Reveal>
            ))}
          </div>
          <ul className="media-list" style={{ marginTop: 28 }}>
            {press.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 30}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <span className="media-type">{item.type}</span>
                    <span className="media-title">
                      {item.title}
                      <span className="media-meta">
                        {' '}
                        — {item.outlet}
                        {item.when ? `, ${item.when}` : ''}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="media-static">
                    <span className="media-type">{item.type}</span>
                    <span className="media-title">
                      {item.title}
                      <span className="media-meta">
                        {' '}
                        — {item.outlet}
                        {item.when ? `, ${item.when}` : ''}
                      </span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="articles">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Articles</p>
            <h2>Campaign reading</h2>
          </Reveal>
          <div className="media-card-grid">
            {mediaSections.articles.map((item, i) => (
              <Reveal key={item.id} delay={i * 50} className="media-card">
                <span className="media-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>
                  {item.outlet}
                  {item.when ? ` · ${item.when}` : ''}
                </p>
                <Link href={item.href} className="text-link">
                  Read →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Channels</p>
            <h2>Social &amp; web</h2>
          </Reveal>
          <div className="link-grid">
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

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Broadcast</p>
            <h2>National television</h2>
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
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="btn btn-solid" href="/gallery">
              Open gallery
            </Link>
            <Link className="btn btn-line dark" href="/plant">
              Plant a Tree
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
