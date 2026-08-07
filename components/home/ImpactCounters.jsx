'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Reveal from '../Reveal';
import { formatInr, impactStats } from '../../lib/vatika';
import { useLanguage } from '../LanguageProvider';

function displayValue(item) {
  if (item.id === 'funds' || item.prefix === '₹') {
    return formatInr(item.value);
  }
  return `${item.prefix || ''}${item.value}${item.suffix || ''}`;
}

export default function ImpactCounters({ compact = false }) {
  const { t } = useLanguage();
  const c = t.campaign.impact;
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
            <p className="kicker">{c.kicker}</p>
            <h2 id="impact-title">{c.title}</h2>
            <p className="section-deck">
              {c.asOf} {stats.asOf}. {c.note}
            </p>
          </div>
          {!compact ? (
            <Link className="btn btn-line dark" href="/impact">
              {c.dashboard}
            </Link>
          ) : null}
        </Reveal>

        <div className="impact-grid" role="list">
          {stats.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 50} className="impact-tile" role="listitem">
              <p className="impact-value">{displayValue(item)}</p>
              <p className="impact-label">{c.labels[item.id] || item.label}</p>
              <p className="impact-hint">{c.hints[item.id] || item.hint}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
