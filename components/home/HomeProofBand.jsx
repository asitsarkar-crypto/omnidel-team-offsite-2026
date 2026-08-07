'use client';

import { useLanguage } from '../LanguageProvider';

export default function HomeProofBand() {
  const { t } = useLanguage();
  const p = t.campaign.proof;

  return (
    <section className="proof-band" aria-label="Partners">
      <div className="wrap proof-row">
        <span>{p.ky21c}</span>
        <span>{p.bks}</span>
        <span>{p.kaam}</span>
        <span>{p.seed}</span>
      </div>
    </section>
  );
}
