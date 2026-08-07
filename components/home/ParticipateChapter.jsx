import Link from 'next/link';
import Reveal from '../Reveal';
import { formatInr, pricing, seedSponsor } from '../../lib/vatika';

/** Participation chapter — ready to evolve; does not own the first viewport. */
export default function ParticipateChapter() {
  return (
    <section className="band participate-band" aria-labelledby="participate-title">
      <div className="wrap participate-panel">
        <Reveal>
          <p className="kicker light">Participate · evolve</p>
          <h2 id="participate-title">When trust is earned, invitation follows</h2>
          <p className="lede seed-lede">
            Tree plantation and sponsorship are ready as the next chapter of this platform —
            transparent rates, acknowledgement architecture, and Razorpay-ready settlement when
            credentials and legal entity details are confirmed.
          </p>
          <p className="seed-meta">
            Campaign rate {formatInr(pricing.perTreeInr)} / tree · {seedSponsor.headline}
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <Link className="btn btn-solid" href="/plant">
              Plant a Tree
            </Link>
            <Link className="btn btn-line" href="/donate">
              Donate
            </Link>
            <Link className="btn btn-line" href="/impact">
              View impact
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
