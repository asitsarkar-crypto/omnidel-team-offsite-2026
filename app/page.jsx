import IdentityHero from '../components/home/IdentityHero';
import ThreePillars from '../components/home/ThreePillars';
import PlatformPromise from '../components/home/PlatformPromise';
import ParticipateChapter from '../components/home/ParticipateChapter';
import HomeTestimonialsVatika from '../components/home/HomeTestimonialsVatika';
import HomeContact from '../components/home/HomeContact';
import HomeStickyCta from '../components/home/HomeStickyCta';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import { gallery } from '../lib/data';
import { vatikaFaq } from '../lib/vatika';
import { buildMetadata, faqJsonLd, pageSeo } from '../lib/seo';

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  const galleryPreview = gallery.filter((g) => g.group === 'Atmosphere').slice(0, 4);

  return (
    <>
      <JsonLd data={faqJsonLd(vatikaFaq)} />
      <IdentityHero />

      <section className="proof-band" aria-label="Identities">
        <div className="wrap proof-row">
          <span>Bharatiya Krishak Samaj</span>
          <span>Krishnavirji</span>
          <span>KarmYog for the 21st Century</span>
          <span>Trust · Heritage · Service</span>
        </div>
      </section>

      <ThreePillars />
      <PlatformPromise />

      <section className="band" aria-labelledby="heritage-teaser-title">
        <div className="wrap cta-split">
          <Reveal>
            <p className="kicker">Heritage</p>
            <h2 id="heritage-teaser-title">Farmers’ Forum to living canopy</h2>
            <p className="section-deck">
              Verified milestones and honest placeholders — Kisan Bhavan and foundation-stone chapters
              await primary archive, never invented for spectacle.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-solid" href="/heritage">
                Read the heritage story
              </Link>
              <Link className="btn btn-line dark" href="/journey">
                Leadership journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeTestimonialsVatika />
      <ParticipateChapter />

      <section className="band" aria-labelledby="gallery-teaser-title">
        <div className="wrap">
          <Reveal className="section-head row-head">
            <div>
              <p className="kicker">Gallery</p>
              <h2 id="gallery-teaser-title">Land, leadership, atmosphere</h2>
            </div>
            <Link className="btn btn-line dark" href="/gallery">
              Open gallery
            </Link>
          </Reveal>
          <div className="home-gallery-grid">
            {galleryPreview.map((item, i) => (
              <Reveal key={item.src} delay={i * 50} className="home-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <p>{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        items={vatikaFaq}
        kicker="FAQ"
        title="Clear answers about identity, trust, and participation"
      />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
