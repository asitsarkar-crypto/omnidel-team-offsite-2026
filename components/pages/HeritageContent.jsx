'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import { branding, heritageStory, kisanBhavan, links, profile } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function HeritageContent() {
  const { t } = useLanguage();
  const p = t.pages?.heritage || {};
  const chapters = t.lists?.heritageChapters || heritageStory.chapters;
  const cards = t.kisanHome?.cards || [];

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/field-01.jpg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title || heritageStory.title}</h1>
          <p className="page-lead">{p.lead || heritageStory.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap story-intro">
          <Reveal className="story-logo">
            <img src={branding.bksLogo} alt={branding.bksLogoAlt} width={120} height={120} />
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">{p.chaptersKicker}</p>
            <h2>{p.chaptersTitle}</h2>
            <p className="lede">{p.chaptersLead}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <ol className="story-timeline">
            {heritageStory.chapters.map((chapter, i) => {
              const copy = chapters[i] || chapter;
              return (
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
                      <span className="story-badge">{p.pending}</span>
                    ) : (
                      <span className="story-badge is-verified">{p.verified}</span>
                    )}
                  </div>
                  <div className="story-body">
                    <h3>{copy.title}</h3>
                    <p>{copy.body}</p>
                    <p className="heritage-source">
                      {p.source}: {copy.source || chapter.source}
                    </p>
                    {chapter.image ? (
                      <figure className="story-figure">
                        <img src={chapter.image} alt={copy.title} loading="lazy" />
                      </figure>
                    ) : (
                      <div
                        className="story-figure-placeholder"
                        role="img"
                        aria-label={`${copy.title}`}
                      >
                        <p>Photograph pending</p>
                        <span>Upload archival image to complete this chapter</span>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="kisan-bhavan" className="band kb-dossier-band scroll-mt-[calc(var(--nav-h)+var(--lang-bar-h))]">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.dossierKicker}</p>
            <h2>{t.kisanHome?.title || kisanBhavan.title}</h2>
            <p className="section-deck">{t.kisanHome?.intro || kisanBhavan.lead}</p>
          </Reveal>

          <div className="kisan-bhavan-grid">
            <Reveal as="article" className="kb-card">
              <h3>{cards[0]?.title || 'Why established'}</h3>
              <p>{cards[0]?.text || kisanBhavan.whyEstablished.text}</p>
              <span className="kb-status">Status: {kisanBhavan.whyEstablished.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={60}>
              <h3>{cards[1]?.title || 'Historical significance'}</h3>
              <p>{cards[1]?.text || kisanBhavan.historicalSignificance.text}</p>
              <span className="kb-status">Status: {kisanBhavan.historicalSignificance.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={120}>
              <h3>Foundation ceremony</h3>
              <p>{kisanBhavan.foundationCeremony.text}</p>
              <span className="kb-status">Status: {kisanBhavan.foundationCeremony.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={180}>
              <h3>{cards[2]?.title || 'H. D. Deve Gowda'}</h3>
              <p>{cards[2]?.text || kisanBhavan.deveGowda.text}</p>
              <span className="kb-status">Status: {kisanBhavan.deveGowda.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={220}>
              <h3>{cards[3]?.title || 'Krishan Bir Chaudhary’s role'}</h3>
              <p>{cards[3]?.text || kisanBhavan.roleOfKrishanBir.text}</p>
              <span className="kb-status">Status: {kisanBhavan.roleOfKrishanBir.status}</span>
            </Reveal>
          </div>

          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <p className="kicker">{p.timelineKicker}</p>
            <h2>{p.timelineTitle}</h2>
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
            <p className="kicker">{p.photosKicker}</p>
            <h2>{p.photosTitle}</h2>
          </Reveal>
          <div className="kb-photo-grid kb-photo-grid-live">
            {kisanBhavan.photos.map((photo, i) =>
              photo.src ? (
                <Reveal
                  key={photo.src}
                  as="figure"
                  className={`kb-photo-live is-${photo.orientation || 'landscape'}`}
                  delay={i * 40}
                >
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </Reveal>
              ) : (
                <Reveal key={photo.caption} as="div" className="kb-photo-slot" delay={i * 40}>
                  <p className="kb-photo-caption">{photo.caption}</p>
                  <span className="kb-photo-note">{photo.note}</span>
                </Reveal>
              )
            )}
          </div>
          {kisanBhavan.assetsRequired?.length ? (
            <ul className="kb-asset-list">
              {kisanBhavan.assetsRequired.map((asset) => (
                <li key={asset}>{asset}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap cta-panel story-cta">
          <Reveal>
            <p className="kicker light">{p.continueKicker}</p>
            <h2>{p.continueTitle}</h2>
            <div className="hero-actions" style={{ marginTop: 20 }}>
              <Link className="btn btn-solid" href="/bks">
                {p.orgPage}
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
                {p.journeyCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
