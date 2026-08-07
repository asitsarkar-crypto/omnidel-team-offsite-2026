import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import { branding } from '../../lib/data';
import { vatika } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.initiative);

export default function InitiativePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Initiative', path: '/initiative' },
        ])}
      />
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/hands-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Joint Initiative</p>
          <h1>KY21C × Bharatiya Krishak Samaj</h1>
          <p className="page-lead">{vatika.purpose}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap joint-grid">
          {vatika.jointPartners.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 80} className="joint-card">
              <img src={partner.logo} alt={partner.name} width={88} height={88} />
              <p className="joint-short">{partner.short}</p>
              <h2>{partner.name}</h2>
              <p>{partner.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">Why together</p>
            <h2>Institutional heritage meets living practice</h2>
            <p className="lede">
              Bharatiya Krishak Samaj carries a farmer-organisation lineage from the 1955 Farmers’
              Forum tradition. KarmYog for the 21st Century brings the ethic of work-as-path into
              education, livelihood, and green practice. KarmYog Vatika is where those streams meet
              a public invitation to plant and sponsor trees.
            </p>
            <p className="lede">
              Distinct from commercial biophilic design services published elsewhere under related
              branding, this platform focuses on transparent tree sponsorship, impact storytelling,
              and heritage stewardship.
            </p>
            <div className="brand-row">
              <img src={branding.ky21cLogo} alt={branding.ky21cLogoAlt} width={64} height={64} />
              <img src={branding.bksLogo} alt={branding.bksLogoAlt} width={64} height={64} />
            </div>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link className="btn btn-solid" href="/heritage">
                Explore heritage
              </Link>
              <Link className="btn btn-line dark" href="/bks">
                About BKS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
