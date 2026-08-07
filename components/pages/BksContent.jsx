'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import {
  branding,
  bks,
  heritageStory,
  kisanBhavan,
  links,
  profile,
} from '../../lib/data';
import { getGalleryCaption } from '../../lib/i18n-gallery';
import { useLanguage } from '../LanguageProvider';

export default function BksContent() {
  const { t, lang } = useLanguage();
  const p = t.pages?.bks || {};
  const copy = t.lists?.bksCopy || bks;
  const cards = t.kisanHome?.cards || [];

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/lamp-lighting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>
            {bks.name}
            <span className="hero-hi-sub"> {bks.nameHi}</span>
          </h1>
          <p className="page-lead">{copy.summary}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap bks-brand-panel">
          <Reveal className="bks-logo-card">
            <img src={branding.bksLogo} alt={branding.bksLogoAlt} width={180} height={180} />
            <img
              src={branding.bksLetterhead}
              alt="Bharatiya Krishak Samaj — official letterhead mark"
              className="bks-letterhead"
              width={220}
              height={312}
            />
            <p className="bks-logo-caption">{bks.nameHi}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">{p.brandKicker}</p>
            <h2>Bharatiya Krishak Samaj</h2>
            <p className="lede">{copy.formation1955}</p>
            <p className="mt-4">
              Also known as: {bks.alternateNames.join(' · ')}
            </p>
            <a
              className="btn btn-solid mt-6"
              href={links.bksOfficial}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.visitBks}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">{p.researchKicker}</p>
            <h2>{p.researchTitle}</h2>
            <p className="lede">{copy.namingNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">{p.visionKicker}</p>
            <h2>{p.visionTitle}</h2>
            <p>{copy.vision}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Legacy</p>
            <h2>A continuing national tradition</h2>
            <p>{copy.legacy}</p>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Major milestones</p>
            <h2>From 1955 founding tradition to today’s leadership</h2>
          </Reveal>
          <div className="heritage-rail">
            {bks.heritageTimeline.map((item, i) => (
              <Reveal key={item.when + item.title} className="heritage-card" delay={i * 50} as="article">
                <div className="heritage-year">{item.when}</div>
                <div className="heritage-body">
                  <h3>{item.title}</h3>
                  <p>{item.what}</p>
                  <p className="heritage-source">Source: {item.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stats-strip">
          <Reveal className="stat-block">
            <strong>1955</strong>
            <span>Founding year cited for Bharat Krishak Samaj</span>
          </Reveal>
          <Reveal className="stat-block" delay={60}>
            <strong>1959</strong>
            <span>World Agriculture Fair opens in New Delhi</span>
          </Reveal>
          <Reveal className="stat-block" delay={120}>
            <strong>Today</strong>
            <span>President: {profile.name}</span>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Philosophy</p>
            <h2>Why the organisation exists</h2>
            <p>{copy.philosophy}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Objectives</p>
            <ul className="issue-copy-list">
              {(copy.objectives || bks.objectives).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">National contribution</p>
            <h2>How organised farmer power served the country</h2>
          </Reveal>
          <ul className="contribution-grid">
            {(copy.nationalContribution || bks.nationalContribution).map((item, i) => (
              <Reveal key={item} as="li" delay={i * 60} className="contribution-item">
                <span>0{i + 1}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Today</p>
            <h2>Relevance in the present agri-ecosystem</h2>
            <p>{copy.today}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Forward</p>
            <h2>Strategic direction</h2>
            <p>{copy.future}</p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.kbKicker}</p>
            <h2>{t.kisanHome?.title || kisanBhavan.title}</h2>
            <p className="section-deck">{t.kisanHome?.intro || kisanBhavan.lead}</p>
          </Reveal>
          <div className="kisan-bhavan-grid">
            <Reveal as="article" className="kb-card">
              <h3>{cards[0]?.title || 'Why it was established'}</h3>
              <p>{cards[0]?.text || kisanBhavan.whyEstablished.text}</p>
              <span className="kb-status">{kisanBhavan.whyEstablished.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={60}>
              <h3>{cards[1]?.title || 'Historical significance'}</h3>
              <p>{cards[1]?.text || kisanBhavan.historicalSignificance.text}</p>
              <span className="kb-status">{kisanBhavan.historicalSignificance.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={120}>
              <h3>Foundation ceremony</h3>
              <p>{kisanBhavan.foundationCeremony.text}</p>
              <span className="kb-status">{kisanBhavan.foundationCeremony.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={180}>
              <h3>{cards[2]?.title || 'H. D. Deve Gowda'}</h3>
              <p>{cards[2]?.text || kisanBhavan.deveGowda.text}</p>
              <span className="kb-status">{kisanBhavan.deveGowda.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={220}>
              <h3>{cards[3]?.title || 'Krishan Bir Chaudhary’s role'}</h3>
              <p>{cards[3]?.text || kisanBhavan.roleOfKrishanBir.text}</p>
              <span className="kb-status">{kisanBhavan.roleOfKrishanBir.status}</span>
            </Reveal>
          </div>
          <div className="kb-photo-grid kb-photo-grid-live">
            {kisanBhavan.photos.map((photo) => {
              const caption = getGalleryCaption(lang, photo.src, photo.caption);
              return photo.src ? (
                <figure
                  key={photo.src}
                  className={`kb-photo-live is-${photo.orientation || 'landscape'}`}
                >
                  <img src={photo.src} alt={caption} loading="lazy" />
                  <figcaption>{caption}</figcaption>
                </figure>
              ) : (
                <div key={photo.caption} className="kb-photo-slot" aria-label={caption}>
                  <p className="kb-photo-caption">{caption}</p>
                  <p className="kb-photo-note">Asset pending — {photo.note}</p>
                </div>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <Link className="btn btn-solid" href="/heritage#kisan-bhavan">
              {p.fullStory}
            </Link>
            <Link className="btn btn-line btn-line-dark" href="/gallery" style={{ marginLeft: 12 }}>
              {p.galleryCta}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">{p.wbKicker}</p>
            <h2>{p.wbTitle}</h2>
            <p>{copy.westBengal}</p>
            <a
              className="text-link"
              href={links.bksOfficial}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {new URL(links.bksOfficial).hostname}
            </a>
          </Reveal>
          <aside className="quote-panel">
            <p className="quote-hi">बंगाल के लिए किसान की गरिमा, आत्मनिर्भर कृषि और व्यावहारिक ज्ञान।</p>
            <p className="quote-en">
              Farmer dignity, self-reliant agriculture, and practical knowledge for Bengal.
            </p>
          </aside>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.refsKicker}</p>
            <h2>{p.refsTitle}</h2>
          </Reveal>
          <ul className="source-list">
            {bks.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="archive-reco">
              Still welcome for enrichment: Krishak Samachar / Farmers’ Forum covers, World
              Agriculture Fair 1959 photographs, high-resolution Deshmukh portraits, and primary
              Kisan Bhavan ceremony albums.
            </p>
          </Reveal>
          <Reveal className="mt-4">
            <p className="section-deck">
              Storytelling chapters also live on the dedicated Heritage page ({heritageStory.title}).
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
