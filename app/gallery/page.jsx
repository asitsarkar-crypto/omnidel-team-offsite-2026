import Reveal from '../../components/Reveal';
import { gallery, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Gallery',
  description: `Photo gallery for ${profile.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-group.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Public moments and agrarian context</h1>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <Reveal key={item.src} as="figure" className="gallery-card" delay={(i % 3) * 70}>
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  {item.caption}
                  {item.group ? ` · ${item.group}` : ''}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal className="note-panel">
            <p className="kicker">More</p>
            <h2>Follow for latest event photography</h2>
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
