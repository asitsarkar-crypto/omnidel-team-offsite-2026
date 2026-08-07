'use client';

import Link from 'next/link';
import Reveal from '../Reveal';
import SocialIcons from '../SocialIcons';
import { awards, contact, profile, roles, social, tvChannels } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function AboutContent() {
  const { t } = useLanguage();
  const p = t.pages?.about || {};
  const translatedRoles = t.lists?.roles || roles;
  const translatedAwards = t.lists?.awards || awards;

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/portrait-speaking.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title || profile.name}</h1>
          <p className="page-lead">{p.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-photo-row">
          <Reveal as="figure" className="about-shot">
            <img src="/photos/events/gadkari-meeting.png" alt={p.captGadkari} />
            <figcaption>{p.captGadkari}</figcaption>
          </Reveal>
          <Reveal as="figure" className="about-shot" delay={80}>
            <img src="/photos/events/shikhar-award.png" alt={p.captShikhar} />
            <figcaption>{p.captShikhar}</figcaption>
          </Reveal>
        </div>
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">{p.bioKicker}</p>
            <h2>{p.bioTitle}</h2>
            <p className="lede">{p.bio1}</p>
            <p>{p.bio2}</p>
            <p>
              {t.contact?.email || 'Email'}:{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {' · '}
              <a href={contact.web} target="_blank" rel="noopener noreferrer">
                {contact.webLabel}
              </a>
            </p>
            <div className="mt-4">
              <SocialIcons items={social} />
            </div>
            <Link className="text-link" href="/journey">
              {p.journeyLink}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band muted-band" id="roles">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.rolesKicker}</p>
            <h2>{p.rolesTitle}</h2>
          </Reveal>
          <ul className="role-list">
            {translatedRoles.map((role, i) => (
              <Reveal key={`${role.title}-${role.org}-${i}`} as="li" delay={i * 40}>
                <span className="role-title">
                  {role.years ? `${role.years}` : role.title}
                </span>
                <span className="role-org">
                  {role.title} — {role.org}
                </span>
                <span className="role-note">{role.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="recognition">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.recognitionKicker}</p>
            <h2>{p.recognitionTitle}</h2>
          </Reveal>
          <div className="about-award-grid">
            {translatedAwards.map((award, i) => (
              <Reveal key={award.title} as="article" className="about-award-card" delay={i * 50}>
                <p className="kicker">{award.when}</p>
                <h3>{award.title}</h3>
                <p>{award.by}</p>
                <p className="role-note">{award.detail}</p>
                <Link className="text-link" href="/awards">
                  {p.awardsLink}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band" id="travel">
        <div className="wrap narrow">
          <Reveal>
            <p className="kicker">{p.travelKicker}</p>
            <h2>{p.travelTitle}</h2>
            <p className="lede">{p.travelLead}</p>
            <p className="travel-line">{profile.travel}</p>
            <Link className="text-link" href="/journey">
              {p.travelLink}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.mediaKicker}</p>
            <h2>{p.mediaTitle}</h2>
          </Reveal>
          <div className="chip-row">
            {tvChannels.map((ch) => (
              <span className="chip" key={ch}>
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
