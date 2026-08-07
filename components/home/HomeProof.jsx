'use client';

import { useLanguage } from '../LanguageProvider';

export default function HomeProof() {
  const { t } = useLanguage();
  const ribbon = t.proofRibbon || [];

  return (
    <section className="proof-band" aria-label={t.aria?.proof || 'Credentials'}>
      <div className="wrap proof-row">
        {ribbon.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
