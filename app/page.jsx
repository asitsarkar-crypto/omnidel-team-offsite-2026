import CampaignHero from '../components/home/CampaignHero';
import JointInitiative from '../components/home/JointInitiative';
import ImpactCounters from '../components/home/ImpactCounters';
import SeedSponsorBand from '../components/home/SeedSponsorBand';
import ParticipateChapter from '../components/home/ParticipateChapter';
import HomeTestimonialsVatika from '../components/home/HomeTestimonialsVatika';
import HomeContact from '../components/home/HomeContact';
import HomeStickyCta from '../components/home/HomeStickyCta';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import { photosForPlacement } from '../lib/mahacharya';
import { vatikaFaq } from '../lib/vatika';
import { buildMetadata, faqJsonLd, pageSeo } from '../lib/seo';

export const metadata = buildMetadata(pageSeo.home);

/**
 * Home follows the Poke brief:
 * 1 Hero / Campaign Overview
 * 2 Heritage & Legacy
 * 3 Activity & Impact Showcase
 * 4 Plant a Tree / Donate
 * 5 Impact Counter
 *
 * Standalone deploy only — never merge/overwrite the original BKS live site.
 */
export default function HomePage() {
  /** Prefer curated KY21C / BKS-WB activity frames over a random national dump. */
  const activityGallery = photosForPlacement('home').slice(0, 6);

  return (
    <>
      <JsonLd data={faqJsonLd(vatikaFaq)} />
      <CampaignHero />

      <section className="proof-band" aria-label="Partners">
        <div className="wrap proof-row">
          <span>KarmYog for the 21st Century</span>
          <span>Bharatiya Krishak Samaj</span>
          <span>Kaam to Karm</span>
          <span>First 100 Trees — ₹15,000 seed sponsorship</span>
        </div>
      </section>

      {/* Brief: joint initiative + mission */}
      <JointInitiative />
      <SeedSponsorBand />

      {/* Brief: Impact Counter */}
      <ImpactCounters />

      {/* Brief: Heritage & Legacy */}
      <section className="band" aria-labelledby="heritage-brief-title">
        <div className="wrap cta-split">
          <Reveal>
            <p className="kicker">Heritage &amp; Legacy</p>
            <h2 id="heritage-brief-title">Institutional roots, living work</h2>
            <p className="section-deck">
              Honouring Bharatiya Krishak Samaj’s farmer-organisation lineage — including the Kisan
              Bhavan milestone — alongside KarmYog’s vocational and agricultural service. Verified
              chapters are published; archival gaps stay clearly marked as placeholders.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-solid" href="/heritage">
                Heritage &amp; Kisan Bhavan
              </Link>
              <Link className="btn btn-line dark" href="/bks">
                About BKS
              </Link>
              <Link className="btn btn-line dark" href="/about">
                Krishnavirji
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brief: Activity & Impact Showcase */}
      <section className="band muted-band" aria-labelledby="activity-title">
        <div className="wrap">
          <Reveal className="section-head row-head">
            <div>
              <p className="kicker">Activity &amp; Impact</p>
              <h2 id="activity-title">Plantation locations, growth, ecological care</h2>
              <p className="section-deck">
                Appointment, sapling presentation, and field milestones — curated from BKS West
                Bengal and KY21C. Location and species lists publish as partners confirm sites.
              </p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-line dark" href="/gallery">
                Gallery
              </Link>
              <Link className="btn btn-line dark" href="/locations">
                Locations
              </Link>
              <Link className="btn btn-line dark" href="/impact">
                Impact
              </Link>
            </div>
          </Reveal>
          <div className="home-gallery-grid activity-grid">
            {activityGallery.map((item, i) => (
              <Reveal key={item.src} delay={i * 40} className="home-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <p>{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brief: Plant a Tree / Donate Now */}
      <ParticipateChapter />

      <section className="band" aria-labelledby="donate-module-title">
        <div className="wrap cta-split">
          <Reveal>
            <p className="kicker">Plant a Tree · Donate Now</p>
            <h2 id="donate-module-title">Support the canopy</h2>
            <p className="section-deck">
              Simple sponsor form — Name, Email, Phone, Trees / Amount. Razorpay / UPI ready when
              credentials are configured; otherwise pledges are recorded with acknowledgement.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-solid" href="/plant">
                Plant a Tree
              </Link>
              <Link className="btn btn-line dark" href="/donate">
                Donate Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeTestimonialsVatika />
      <FaqAccordion items={vatikaFaq} />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
