import Link from 'next/link';
import Reveal from '../Reveal';
import { services } from '../../lib/data';

export default function HomeServices() {
  return (
    <section id="services" className="band pillars-home scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Our Services</p>
          <h2>Areas of public work &amp; engagement</h2>
          <p className="section-deck">
            Policy advocacy, legal defence of farmers&apos; rights, media platforms, and organisation
            building — grounded in decades of institutional service.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 70}
              className="group border-t-2 border-[var(--grain)] bg-white/70 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mb-3 block font-[var(--font-display)] text-sm tracking-[0.12em] text-[var(--grain)]">
                0{i + 1}
              </span>
              <h3 className="mb-3 font-[var(--font-display)] text-2xl leading-tight text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mb-5 text-[var(--muted)]">{item.lead}</p>
              <Link className="text-link" href={item.href}>
                Learn more
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <a className="btn btn-solid" href="#contact">
            Fill Enquiry Form
          </a>
        </Reveal>
      </div>
    </section>
  );
}
