'use client';

import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

/** Always-visible language strip under the fixed nav */
export default function LanguageBar() {
  const { t } = useLanguage();

  return (
    <div className="lang-bar" role="region" aria-label={t.language}>
      <div className="wrap lang-bar-inner">
        <p className="lang-bar-title">
          {t.language}: <span>English · हिन्दी · বাংলা · मराठी</span>
        </p>
        <LanguageSwitcher showLabel={false} />
      </div>
    </div>
  );
}
