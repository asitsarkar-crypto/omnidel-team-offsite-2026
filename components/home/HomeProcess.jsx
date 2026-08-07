import Reveal from '../Reveal';
import { processSteps } from '../../lib/data';

export default function HomeProcess() {
  return (
    <section id="process" className="band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Process / How We Work</p>
          <h2>From enquiry to public follow-through</h2>
          <p className="section-deck">
            A clear path for press, policy partners, farmer organisations, and collaborators.
          </p>
        </Reveal>
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} as="li" delay={i * 80} className="relative">
              <span className="mb-3 block font-[var(--font-display)] text-4xl text-[var(--grain)]">
                {step.step}
              </span>
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--ink)]">{step.title}</h3>
              <p className="text-[var(--muted)]">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
