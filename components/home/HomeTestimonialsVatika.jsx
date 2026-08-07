import Reveal from '../Reveal';
import { vatikaTestimonials } from '../../lib/vatika';

export default function HomeTestimonialsVatika() {
  return (
    <section className="band muted-band" aria-labelledby="testimonials-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Trust</p>
          <h2 id="testimonials-title">Voices that stand with this work</h2>
          <p className="section-deck">
            Institutional confidence behind Bharatiya Krishak Samaj leadership — the heritage that
            anchors this joint plantation initiative.
          </p>
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
