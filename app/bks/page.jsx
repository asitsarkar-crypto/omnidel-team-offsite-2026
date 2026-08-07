import Link from 'next/link';
import Reveal from '../../components/Reveal';
import JsonLd from '../../components/JsonLd';
import {
  branding,
  bks,
  heritageStory,
  kisanBhavan,
  links,
  profile,
} from '../../lib/data';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.bks);

export default function BksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Bharatiya Krishak Samaj', path: '/bks' },
        ])}
      />

      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/lamp-lighting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Organisation</p>
          <h1>
            {bks.name}
            <span className="hero-hi-sub"> {bks.nameHi}</span>
          </h1>
          <p className="page-lead">{bks.summary}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap bks-brand-panel">
          <Reveal className="bks-logo-card">
            <img src={branding.bksLogo} alt={branding.bksLogoAlt} width={180} height={180} />
            <p className="bks-logo-caption">{bks.nameHi}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Official identity</p>
            <h2>Bharatiya Krishak Samaj</h2>
            <p className="lede">{bks.formation1955}</p>
            <p className="mt-4">
              Also known as: {bks.alternateNames.join(' · ')}
            </p>
            <a
              className="btn btn-solid mt-6"
              href={links.bksOfficial}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Bharatiya Kisan Samaj (BKS)
            </a>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Research note</p>
            <h2>Names, continuity, and accurate history</h2>
            <p className="lede">{bks.namingNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Vision</p>
            <h2>What the organisation stands for</h2>
            <p>{bks.vision}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Legacy</p>
            <h2>A continuing national tradition</h2>
            <p>{bks.legacy}</p>
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
            <p>{bks.philosophy}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Objectives</p>
            <ul className="issue-copy-list">
              {bks.objectives.map((o) => (
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
            {bks.nationalContribution.map((item, i) => (
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
            <p>{bks.today}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">Forward</p>
            <h2>Strategic direction</h2>
            <p>{bks.future}</p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Kisan Bhavan</p>
            <h2>{kisanBhavan.title}</h2>
            <p className="section-deck">{kisanBhavan.lead}</p>
          </Reveal>
          <div className="kisan-bhavan-grid">
            <Reveal as="article" className="kb-card">
              <h3>Why it was established</h3>
              <p>{kisanBhavan.whyEstablished.text}</p>
              <span className="kb-status">{kisanBhavan.whyEstablished.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={60}>
              <h3>Historical significance</h3>
              <p>{kisanBhavan.historicalSignificance.text}</p>
              <span className="kb-status">{kisanBhavan.historicalSignificance.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={120}>
              <h3>Foundation ceremony</h3>
              <p>{kisanBhavan.foundationCeremony.text}</p>
              <span className="kb-status is-placeholder">{kisanBhavan.foundationCeremony.status}</span>
            </Reveal>
            <Reveal as="article" className="kb-card" delay={180}>
              <h3>H. D. Deve Gowda</h3>
              <p>{kisanBhavan.deveGowda.text}</p>
              <span className="kb-status is-placeholder">{kisanBhavan.deveGowda.status}</span>
            </Reveal>
          </div>
          <div className="kb-photo-grid">
            {kisanBhavan.photos.map((photo) => (
              <div key={photo.caption} className="kb-photo-slot" aria-label={photo.caption}>
                <p className="kb-photo-caption">{photo.caption}</p>
                <p className="kb-photo-note">Asset pending — {photo.note}</p>
              </div>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link className="text-link" href="/heritage">
              Open full heritage storytelling →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">West Bengal</p>
            <h2>State chapter — dignity, self-reliance, practical knowledge</h2>
            <p>{bks.westBengal}</p>
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
            <p className="kicker">References</p>
            <h2>Authoritative sources used on this page</h2>
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
