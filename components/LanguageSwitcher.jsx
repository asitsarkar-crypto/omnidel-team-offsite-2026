'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang, languages, t } = useLanguage();

  return (
    <div
      className={`lang-switcher ${compact ? 'is-compact' : ''}`}
      role="group"
      aria-label={t.language}
    >
      {languages.map((item) => {
        const active = item.code === lang;
        return (
          <button
            key={item.code}
            type="button"
            className={`lang-btn ${active ? 'is-active' : ''}`}
            aria-pressed={active}
            title={item.native}
            onClick={() => setLang(item.code)}
          >
            <span className="lang-short">{item.short}</span>
            <span className="lang-native">{item.native}</span>
          </button>
        );
      })}
    </div>
  );
}
