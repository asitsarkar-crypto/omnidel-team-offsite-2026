import Link from 'next/link';
import Reveal from '../../components/Reveal';
import JsonLd from '../../components/JsonLd';
import { branding, heritageStory, kisanBhavan, links, profile } from '../../lib/data';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.heritage);

export default function HeritagePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Heritage', path: '/heritage' },
        ])}
      />

      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/field-01.jpg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Historical storytelling</p>
          <h1>{heritageStory.title}</h1>
          <p className="page-lead">{heritageStory.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap story-intro">
          <Reveal className="story-logo">
            <img src={branding.bksLogo} alt={branding.bksLogoAlt} width={120} height={120} />
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Four chapters</p>
            <h2>Farmers’ Forum · Leadership · Kisan Bhavan · Foundation stone</h2>
            <p className="lede">
              Verified milestones are marked clearly. Chapters awaiting primary documents use
              explicit placeholders — nothing is invented.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <ol className="story-timeline">
            {heritageStory.chapters.map((chapter, i) => (
              <Reveal
                key={chapter.id}
                as="li"
                className={`story-chapter ${chapter.placeholder ? 'is-placeholder' : ''}`}
                delay={i * 70}
              >
                <div className="story-meta">
                  <span className="story-index">0{i + 1}</span>
                  <time>{chapter.when}</time>
                  {chapter.placeholder ? (
                    <span className="story-badge">Asset / confirmation pending</span>
                  ) : (
                    <span className="story-badge is-verified">Verified</span>
                  )}
                </div>
                <div className="story-body">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                  <p className="heritage-source">Source: {chapter.source}</p>
                  {chapter.image ? (
                    <figure className="story-figure">
                      <img src={chapter.image} alt={chapter.title} loading="lazy" />
                    </figure>
                  ) : (
                    <div
                      className="story-figure-placeholder"
                      role="img"
                      aria-label={`${chapter.title} photograph pending`}
                    >
                      <p>Photograph pending</p>
                      <span>Upload archival image to complete this chapter</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="kisan-bhavan" className="band kb-dossier-band scroll-mt-[calc(var(--nav-h)+var(--lang-bar-h))]">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Featured · Kisan Bhavan dossier</p>
            <h2>{kisanBhavan.title}</h2>
            <p className="section-deck">{kisanBhavan.lead}</p>
          </Reveal>

          <div className="kisan-bhavan-grid">
            <Reveal as="article" className="kb-card">
              <h3>Why established</h3>
              <p>{kisanBhavan.whyEstablished.text}</p>
              <span className="kb-status">Status: {kisanBhavan.whyEstablished.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={60}>
              <h3>Historical significance</h3>
              <p>{kisanBhavan.historicalSignificance.text}</p>
              <span className="kb-status">Status: {kisanBhavan.historicalSignificance.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={120}>
              <h3>Foundation ceremony</h3>
              <p>{kisanBhavan.foundationCeremony.text}</p>
              <span className="kb-status">Status: {kisanBhavan.foundationCeremony.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={180}>
              <h3>H. D. Deve Gowda</h3>
              <p>{kisanBhavan.deveGowda.text}</p>
              <span className="kb-status">Status: {kisanBhavan.deveGowda.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={220}>
              <h3>Krishan Bir Chaudhary’s role</h3>
              <p>{kisanBhavan.roleOfKrishanBir.text}</p>
              <span className="kb-status">Status: {kisanBhavan.roleOfKrishanBir.status}</span>
            </Reveal>
          </div>

          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <p className="kicker">Historical timeline</p>
            <h2>What we can place in sequence today</h2>
          </Reveal>
          <ol className="kb-timeline">
            {kisanBhavan.timeline.map((item, i) => (
              <Reveal key={item.title} as="li" className={`kb-timeline-item is-${item.status}`} delay={i * 50}>
                <time>{item.when}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.what}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <p className="kicker">Archival assets required</p>
            <h2>Photographs &amp; documents still needed</h2>
          </Reveal>
          <div className="kb-photo-grid">
            {kisanBhavan.photos.map((photo, i) => (
              <Reveal key={photo.caption} as="div" className="kb-photo-slot" delay={i * 40}>
                <p className="kb-photo-caption">{photo.caption}</p>
                <span className="kb-photo-note">{photo.note}</span>
              </Reveal>
            ))}
          </div>
          <ul className="kb-asset-list">
            {kisanBhavan.assetsRequired.map((asset) => (
              <li key={asset}>{asset}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap cta-panel story-cta">
          <Reveal>
            <p className="kicker light">Continue</p>
            <h2>Read organisation history or visit the BKS chapter site</h2>
            <div className="hero-actions" style={{ marginTop: 20 }}>
              <Link className="btn btn-solid" href="/bks">
                Organisation page
              </Link>
              <a
                className="btn btn-line"
                href={links.bksOfficial}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bharatiya Kisan Samaj (BKS)
              </a>
              <Link className="btn btn-line" href="/journey">
                {profile.name.split(' ')[0]}’s journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
