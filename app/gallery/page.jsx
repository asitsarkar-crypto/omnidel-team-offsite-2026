import Reveal from '../../components/Reveal';
import { gallery, social } from '../../lib/data';
import { galleryFromMahacharya, mahacharya } from '../../lib/mahacharya';
import { vatika } from '../../lib/vatika';
import { buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.gallery);

const SECTIONS = [
  {
    id: 'ky21c',
    kicker: 'KY21C leadership',
    title: 'Mahacharya & the living practice',
    deck: 'Curated frames of Mahacharya Sourabh J. Sarkar — founder of KY21C and State President of BKS West Bengal — chosen for story, not volume.',
    groups: ['KY21C Leadership'],
  },
  {
    id: 'bks-wb',
    kicker: 'BKS West Bengal',
    title: 'Appointment & institutional trust',
    deck: 'Official moments from the 30 June 2026 West Bengal mandate — sourced from bkswbengal.org.',
    groups: ['BKS West Bengal'],
  },
  {
    id: 'activity',
    kicker: 'Activity',
    title: 'Planting begins with trust',
    deck: 'Sapling presentation and documentation — the campaign’s early public record.',
    groups: ['Activity'],
  },
  {
    id: 'bks-archive',
    kicker: 'National archive',
    title: 'Bharatiya Krishak Samaj stewardship',
    deck: 'Leadership and atmosphere from the national BKS story that this campaign stands with.',
    groups: ['Leadership', 'Events', 'Awards', 'Atmosphere'],
  },
];

export default function GalleryPage() {
  const curated = [...galleryFromMahacharya(), ...gallery];

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/activity/sapling-presentation.jpeg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Land, leadership, and living canopy</h1>
          <p className="page-lead">
            Editorial photography for {vatika.name} — KY21C leadership, BKS West Bengal appointment,
            and national stewardship. Selected with intent.
          </p>
        </div>
      </section>

      {SECTIONS.map((section) => {
        const items = curated.filter((item) => section.groups.includes(item.group));
        if (!items.length) return null;
        return (
          <section key={section.id} className="band" id={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="wrap">
              <Reveal className="section-head">
                <p className="kicker">{section.kicker}</p>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                <p className="section-deck">{section.deck}</p>
              </Reveal>
              <div className="gallery-grid">
                {items.map((item, i) => (
                  <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <figcaption>
                      {item.caption}
                      {item.detail ? <span className="gallery-detail">{item.detail}</span> : null}
                      {item.group ? <span className="gallery-group">{item.group}</span> : null}
                    </figcaption>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="note-panel">
            <p className="kicker">Sources</p>
            <h2>Official archives &amp; social</h2>
            <p className="section-deck">
              Appointment photography and leadership portrait courtesy of{' '}
              <a href={mahacharya.links.bksWestBengal} target="_blank" rel="noopener noreferrer">
                Bharatiya Krishak Samaj — West Bengal
              </a>
              . Field plough stills of Mahacharya at work will join the Activity section when
              stakeholder files are attached.
            </p>
            <div className="social-row dense">
              {social.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
