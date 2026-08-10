'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

/**
 * @param {'dropdown' | 'pills'} variant
 * dropdown = compact EN ▼ (header)
 * pills = full chip row (footer / mobile drawer)
 */
export default function LanguageSwitcher({
  variant = 'pills',
  showLabel = false,
  className = '',
}) {
  const { lang, setLang, languages, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const current = languages.find((item) => item.code === lang) || languages[0];

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (variant === 'dropdown') {
    return (
      <div
        ref={rootRef}
        className={`lang-dropdown ${open ? 'is-open' : ''} ${className}`.trim()}
      >
        <button
          type="button"
          className="lang-dropdown-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={t.language}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="lang-dropdown-globe" aria-hidden="true">
            🌐
          </span>
          <span className="lang-dropdown-code">{current.short}</span>
          <span className="lang-dropdown-caret" aria-hidden="true" />
        </button>
        {open ? (
          <ul id={listId} className="lang-dropdown-menu" role="listbox" aria-label={t.language}>
            {languages.map((item) => {
              const active = item.code === lang;
              return (
                <li key={item.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={`lang-dropdown-option ${active ? 'is-active' : ''}`}
                    onClick={() => {
                      setLang(item.code);
                      setOpen(false);
                    }}
                  >
                    <span className="lang-dropdown-option-en">{item.label}</span>
                    <span className="lang-dropdown-option-native">{item.native}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label={t.language}
    >
      {showLabel ? <span className="lang-label">{t.language}</span> : null}
      {languages.map((item) => {
        const active = item.code === lang;
        return (
          <button
            key={item.code}
            type="button"
            className={`lang-btn ${active ? 'is-active' : ''}`}
            aria-pressed={active}
            title={`${item.label} / ${item.native}`}
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
