import Link from 'next/link';
import Reveal from './Reveal';
import { mahacharya, mahacharyaPhotos, mahacharyaVideos } from '../lib/mahacharya';

/**
 * Editorial presence for Mahacharya — KY21C pillar of the joint initiative.
 * Portrait + appointment context + one video window. Not a photo dump.
 */
export default function MahacharyaPresence() {
  const appointment = mahacharyaPhotos.partnership[0];
  const speaking = mahacharyaPhotos.leadership[1];

  return (
    <section className="band mahacharya-band" aria-labelledby="mahacharya-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">KY21C leadership</p>
          <h2 id="mahacharya-title">{mahacharya.displayName}</h2>
          <p className="section-deck">{mahacharya.roles.join(' · ')}</p>
        </Reveal>

        <div className="mahacharya-editorial">
          <Reveal as="figure" className="mahacharya-portrait">
            <img
              src={mahacharya.portrait.src}
              alt={mahacharya.portrait.alt}
              width={520}
              height={520}
            />
            <figcaption>
              {mahacharya.portrait.caption}
              <span>{mahacharya.portrait.credit}</span>
            </figcaption>
          </Reveal>

          <Reveal delay={60} className="mahacharya-copy">
            <blockquote className="mahacharya-quote">
              <p>“{mahacharya.quote}”</p>
            </blockquote>
            <p className="lede">{mahacharya.lead}</p>
            {mahacharya.body.map((para) => (
              <p key={para.slice(0, 32)} className="lede soft">
                {para}
              </p>
            ))}
            <p className="appointment-note">
              <strong>Appointment.</strong> {mahacharya.appointment.dateLabel},{' '}
              {mahacharya.appointment.place} — {mahacharya.appointment.summary}
            </p>
            <div className="hero-actions" style={{ marginTop: 22 }}>
              <a
                className="btn btn-solid"
                href={mahacharya.links.leadership}
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile on BKS West Bengal
              </a>
              <Link className="btn btn-line dark" href="/gallery">
                See curated gallery
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mahacharya-moments">
          <Reveal as="figure" className="mahacharya-moment">
            <img src={appointment.src} alt={appointment.alt} loading="lazy" />
            <figcaption>
              <strong>{appointment.caption}</strong>
              <span>{appointment.detail}</span>
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="mahacharya-moment" delay={70}>
            <img src={speaking.src} alt={speaking.alt} loading="lazy" />
            <figcaption>
              <strong>{speaking.caption}</strong>
              <span>{speaking.detail}</span>
            </figcaption>
          </Reveal>
        </div>

        <Reveal className="mahacharya-video-head" delay={40}>
          <p className="kicker">Watch</p>
          <h3>Field plough &amp; teaching films</h3>
          <p className="section-deck">
            Land preparation with Mahacharya, plus KY21C films featured on{' '}
            <a href={mahacharya.links.leadership} target="_blank" rel="noopener noreferrer">
              bkswbengal.org/leadership
            </a>
            .
          </p>
        </Reveal>
        <div className="mahacharya-video-grid">
          {mahacharyaVideos.map((video, i) => (
            <Reveal key={video.id} delay={i * 60} className="mahacharya-video">
              <div className="video-frame">
                {video.src ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    title={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    src={video.embedSrc}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
              <h4>{video.title}</h4>
              <p>{video.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
