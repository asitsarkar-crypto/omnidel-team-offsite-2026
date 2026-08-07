'use client';

import Reveal from '../Reveal';
import { assignments, journey } from '../../lib/data';
import { useLanguage } from '../LanguageProvider';

export default function JourneyContent() {
  const { t } = useLanguage();
  const p = t.pages?.journey || {};
  const items = t.lists?.journey || journey;
  const assign = t.lists?.assignments || assignments;

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/events/gadkari-meeting.png')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">{p.kicker}</p>
          <h1>{p.title}</h1>
          <p className="page-lead">{p.lead}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <ol className="timeline">
            {items.map((item, i) => (
              <Reveal key={`${item.when}-${item.title}`} as="li" className="timeline-item" delay={i * 40}>
                <time>
                  {item.when}
                  {item.theme ? ` · ${item.theme}` : ''}
                </time>
                <p>
                  <strong>{item.title}.</strong> {item.what}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="band muted-band">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">{p.assignmentsKicker}</p>
            <h2>{p.assignmentsTitle}</h2>
          </Reveal>
          <ul className="assignment-list">
            {assign.map((item, i) => (
              <Reveal key={item.when + item.what} as="li" delay={(i % 8) * 30}>
                <span className="assign-when">{item.when}</span>
                <span className="assign-what">{item.what}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
