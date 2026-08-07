import Link from 'next/link';
import Reveal from '../Reveal';
import { profile, roles } from '../../lib/data';

export default function HomeAbout() {
  return (
    <section id="about" className="band intro-band scroll-mt-[var(--nav-h)]">
      <div className="wrap split portrait-split">
        <Reveal className="intro-portrait" as="figure">
          <img
            src="/photos/events/gadkari-meeting.png"
            alt="Krishan Bir Chaudhary with Union Minister Nitin Gadkari"
            loading="lazy"
            width={720}
            height={900}
          />
          <figcaption>With Union Minister Nitin Gadkari</figcaption>
        </Reveal>
        <Reveal delay={120}>
          <p className="kicker">About</p>
          <h2>Farmer-statesman of Indian agriculture.</h2>
          <p className="lede">{profile.summary}</p>
          <p>
            Editor of <strong>Kisan Ki Awaaz</strong> · Author of{' '}
            <em>Development Misplaced</em> (Penguin, 2014) · Born {profile.dob}.
          </p>
          <ul className="mt-6 grid gap-3">
            {roles.slice(0, 3).map((role) => (
              <li key={`${role.title}-${role.org}`} className="border-l-2 border-[var(--grain)] pl-4">
                <strong className="block text-[var(--ink)]">
                  {role.title} — {role.org}
                </strong>
                <span className="text-sm text-[var(--muted)]">{role.years}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn btn-solid" href="/about">
              Full biography
            </Link>
            <a className="text-link" href="#why-us">
              Why work with him
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
