'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Reveal from '../Reveal';
import { formatInr, impactStats } from '../../lib/vatika';

function displayValue(item) {
  if (item.id === 'funds' || item.prefix === '₹') {
    return formatInr(item.value);
  }
  return `${item.prefix || ''}${item.value}${item.suffix || ''}`;
}

export default function ImpactCounters({ compact = false }) {
  const [stats, setStats] = useState(impactStats);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/impact')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data?.ok && data.items) {
          setStats({
            asOf: data.asOf,
            note: data.note,
            source: data.source,
            items: data.items,
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className={`band impact-band ${compact ? 'impact-compact' : 'muted-band'}`}
      aria-labelledby="impact-title"
    >
      <div className="wrap">
        <Reveal className="section-head row-head">
          <div>
            <p className="kicker">Impact</p>
            <h2 id="impact-title">Living measures of care</h2>
            <p className="section-deck">
              As of {stats.asOf}. {stats.note}
            </p>
          </div>
          {!compact ? (
            <Link className="btn btn-line dark" href="/impact">
              Full dashboard
            </Link>
          ) : null}
        </Reveal>

        <div className="impact-grid" role="list">
          {stats.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 50} className="impact-tile" role="listitem">
              <p className="impact-value">{displayValue(item)}</p>
              <p className="impact-label">{item.label}</p>
              {item.hint ? <p className="impact-hint">{item.hint}</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
