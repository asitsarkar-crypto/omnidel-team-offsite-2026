import Link from 'next/link';
import { contact, profile } from '../../lib/data';

export default function HomeHero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-layers" aria-hidden="true">
        <div
          className="hero-photo"
          style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }}
        />
        <div className="hero-veil" />
        <div className="hero-grain" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </div>

      <div className="hero-content wrap">
        <p className="hero-kicker animate-rise">{profile.nameHi}</p>
        <p className="hero-brand animate-rise delay-1">{profile.name}</p>
        <h1 className="animate-rise delay-2">{profile.brandLine}</h1>
        <p className="hero-lead animate-rise delay-3">{profile.tagline}</p>
        <p className="hero-micro animate-rise delay-3">
          {profile.shortTitle} · {profile.qualifications}
        </p>
        <div className="hero-actions animate-rise delay-4">
          <a className="btn btn-solid" href="#services">
            Get Started
          </a>
          <a className="btn btn-line" href="#contact">
            Contact Us
          </a>
          <a
            className="btn btn-line"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Consultation
          </a>
        </div>
        <p className="animate-rise delay-4 mt-4">
          <Link className="text-link" href="/journey" style={{ color: 'rgba(255,248,220,0.9)' }}>
            Or explore the full journey →
          </Link>
        </p>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
