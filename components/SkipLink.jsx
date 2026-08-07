'use client';

import { useLanguage } from './LanguageProvider';

export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip" href="#main">
      {t.skip}
    </a>
  );
}
