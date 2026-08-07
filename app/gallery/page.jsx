import Reveal from '../../components/Reveal';
import SocialIcons from '../../components/SocialIcons';
import { gallery, profile, social } from '../../lib/data';

export const metadata = {
  title: 'Gallery',
  description: `Photo gallery for ${profile.name} — ${gallery.length} project photographs.`,
};

const groupOrder = [
  'Kisan Bhavan',
  'Leadership',
  'Government',
  'Events',
  'Awards',
  'Media',
  'Documents',
  'Atmosphere',
  'Organisation',
];

export default function GalleryPage() {
  const groups = groupOrder
    .map((name) => ({
      name,
      items: gallery.filter((item) => item.group === name),
    }))
    .filter((g) => g.items.length > 0);

  const extras = gallery.filter((item) => !groupOrder.includes(item.group));
  if (extras.length) {
    groups.push({ name: 'Archive', items: extras });
  }

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-group.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Gallery</p>
          <h1>Project photograph archive</h1>
          <p className="page-lead">
            {gallery.length} photographs from the project library — leadership, Kisan Bhavan,
            government relations, awards, media, and documents.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.name} className="band">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="kicker">{group.name}</p>
              <h2>
                {group.items.length} photograph{group.items.length === 1 ? '' : 's'}
              </h2>
            </Reveal>
            <div className="gallery-grid">
              {group.items.map((item, i) => (
                <Reveal
                  key={item.src}
                  as="figure"
                  className={`gallery-card is-${item.orientation || 'landscape'}`}
                  delay={(i % 6) * 40}
                >
                  <div className="gallery-frame">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    {item.caption}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="note-panel">
            <p className="kicker">More</p>
            <h2>Follow for latest event photography</h2>
            <div className="mt-4">
              <SocialIcons items={social} className="social-icons-footer" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
