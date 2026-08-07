import Reveal from '../../components/Reveal';
import { gallery, social } from '../../lib/data';
import { vatika } from '../../lib/vatika';
import { buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.gallery);

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/field-01.jpg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Land, leadership, and living canopy</h1>
          <p className="page-lead">
            Atmosphere and public moments supporting {vatika.name} and Bharatiya Krishak Samaj
            stewardship.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>
                  {item.caption}
                  {item.group ? ` · ${item.group}` : ''}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal className="note-panel">
            <p className="kicker">More</p>
            <h2>Follow for latest photography</h2>
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
