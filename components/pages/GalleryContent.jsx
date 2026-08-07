'use client';

import Reveal from '../Reveal';
import SocialIcons from '../SocialIcons';
import { gallery, social } from '../../lib/data';
import { getGalleryCaption } from '../../lib/i18n-gallery';
import { useLanguage } from '../LanguageProvider';

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

export default function GalleryContent() {
  const { t, lang } = useLanguage();
  const p = t.pages?.gallery || {};
  const groupLabels = p.groups || {};

  const groups = groupOrder
    .map((name) => ({
      name,
      label: groupLabels[name] || name,
      items: gallery.filter((item) => item.group === name),
    }))
    .filter((g) => g.items.length > 0);

  const extras = gallery.filter((item) => !groupOrder.includes(item.group));
  if (extras.length) {
    groups.push({ name: 'Archive', label: groupLabels.Archive || 'Archive', items: extras });
  }

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/shikhar-group.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">
            {gallery.length} {p.leadPrefix}
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.name} className="band">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="kicker">{group.label}</p>
              <h2>
                {group.items.length} {group.items.length === 1 ? p.photo : p.photos}
              </h2>
            </Reveal>
            <div className="gallery-grid">
              {group.items.map((item, i) => {
                const caption = getGalleryCaption(lang, item.src, item.caption);
                return (
                  <Reveal
                    key={item.src}
                    as="figure"
                    className={`gallery-card is-${item.orientation || 'landscape'}`}
                    delay={(i % 6) * 40}
                  >
                    <div className="gallery-frame">
                      <img src={item.src} alt={caption} loading="lazy" />
                    </div>
                    <figcaption>{caption}</figcaption>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="note-panel">
            <p className="kicker">{p.moreKicker}</p>
            <h2>{p.moreTitle}</h2>
            <div className="mt-4">
              <SocialIcons items={social} className="social-icons-footer" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
