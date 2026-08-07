import JointInitiative from '../components/home/JointInitiative';
import ImpactCounters from '../components/home/ImpactCounters';
import MissionTeaser from '../components/home/MissionTeaser';
import SeedSponsorBand from '../components/home/SeedSponsorBand';
import VatikaHero from '../components/home/VatikaHero';
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
      <VatikaHero />

      <section className="proof-band" aria-label="Partners">
        <div className="wrap proof-row">
          <span>Joint Initiative · KY21C × BKS</span>
          <span>Kaam to Karm</span>
          <span>Tree Plantation &amp; Sponsorship</span>
          <span>First 100 Trees — Seed Sponsored</span>
        </div>
      </section>

      <JointInitiative />
      <ImpactCounters />
      <SeedSponsorBand />
      <MissionTeaser />

      <section className="band muted-band" aria-labelledby="plant-cta-title">
        <div className="wrap cta-split">
          <Reveal>
            <p className="kicker">Participate</p>
            <h2 id="plant-cta-title">Plant a tree. Sponsor a grove. Fund the canopy.</h2>
            <p className="section-deck">
              Transparent contribution flows with acknowledgement architecture — Razorpay-ready when
              credentials are configured.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-solid" href="/plant">
                Plant a Tree
              </Link>
              <Link className="btn btn-line dark" href="/donate">
                Donate Now
              </Link>
              <Link className="btn btn-line dark" href="/locations">
                View locations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band" aria-labelledby="gallery-teaser-title">
        <div className="wrap">
          <Reveal className="section-head row-head">
            <div>
              <p className="kicker">Gallery</p>
              <h2 id="gallery-teaser-title">Land, seed, and stewardship</h2>
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

      <FaqAccordion items={vatikaFaq} />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
