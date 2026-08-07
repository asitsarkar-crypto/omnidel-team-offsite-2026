import Link from 'next/link';
import Reveal from '../Reveal';
import { platform, storyChapters } from '../../lib/platform';

export default function PlatformPromise() {
  return (
    <section className="band muted-band" aria-labelledby="promise-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Why this platform</p>
          <h2 id="promise-title">Not a brochure. A long-term digital identity.</h2>
          <p className="section-deck">{platform.purpose}</p>
        </Reveal>
        <div className="promise-grid">
          {storyChapters.map((chapter, i) => (
            <Reveal key={chapter.id} delay={i * 70} className="promise-card">
              <h3>{chapter.title}</h3>
              <p>{chapter.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <ul className="promise-list">
            {platform.promise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="btn btn-line dark" href="/about">
              Meet Krishnavirji
            </Link>
            <Link className="btn btn-line dark" href="/bks">
              Know BKS
            </Link>
            <Link className="btn btn-line dark" href="/initiative">
              Know KarmYog
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
