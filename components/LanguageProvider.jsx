'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  getMessages,
  languages,
} from '../lib/i18n';

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: getMessages(DEFAULT_LANG),
  languages,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && languages.some((l) => l.code === saved)) {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const meta = languages.find((l) => l.code === lang) || languages[0];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dataset.lang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, ready]);

  const setLang = (code) => {
    if (languages.some((l) => l.code === code)) setLangState(code);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: getMessages(lang),
      languages,
      ready,
    }),
    [lang, ready]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
