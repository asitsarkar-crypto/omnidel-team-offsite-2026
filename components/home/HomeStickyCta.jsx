'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageProvider';

export default function HomeStickyCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--stroke)] bg-[rgba(244,246,242,0.96)] p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href="/plant"
          className="flex-1 rounded bg-[var(--field)] px-3 py-3 text-center text-sm font-semibold text-white"
        >
          {t.cta.getStarted}
        </Link>
        <Link
          href="/donate"
          className="flex-1 rounded border border-[var(--field)] px-3 py-3 text-center text-sm font-semibold text-[var(--field)]"
        >
          {t.cta.donateNow || 'Donate'}
        </Link>
      </div>
    </div>
  );
}
