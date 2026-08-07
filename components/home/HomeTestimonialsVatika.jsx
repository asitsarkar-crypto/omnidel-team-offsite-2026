'use client';

import Reveal from '../Reveal';
import { vatikaTestimonials } from '../../lib/vatika';
import { useLanguage } from '../LanguageProvider';

export default function HomeTestimonialsVatika() {
  const { t } = useLanguage();
  const c = t.campaign.trust;

  return (
    <section className="band muted-band" aria-labelledby="testimonials-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">{c.kicker}</p>
          <h2 id="testimonials-title">{c.title}</h2>
          <p className="section-deck">{c.deck}</p>
        </Reveal>
        <div className="testimonial-grid">
          {vatikaTestimonials.map((item, i) => (
            <Reveal key={item.attribution} delay={i * 60} className="testimonial-card">
              <blockquote>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.attribution}</strong>
                  <span>{item.context}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
