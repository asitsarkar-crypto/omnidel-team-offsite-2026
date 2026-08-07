'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { branding, links, nav } from '../lib/data';
import { navKeyFromHref } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

export default function SiteNav() {
  const pathname = usePathname();
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, lang]);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          <img
            className="nav-bks-logo"
            src={branding.ky21cLogo || branding.bksLogo}
            alt={branding.vatikaName || branding.bksLogoAlt}
            width={44}
            height={44}
          />
          <img
            className="nav-bks-logo nav-bks-logo-secondary"
            src={branding.bksLogo}
            alt={branding.bksLogoAlt}
            width={44}
            height={44}
          />
          <span className="nav-brand-text">
            <span className="nav-brand-en">{branding.vatikaName || profile.name}</span>
            <span className="nav-brand-hi">{t.hero.nameLocal}</span>
          </span>
        </Link>

        <div className="nav-tools">
          <LanguageSwitcher compact />
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">{t.menu}</span>
          </button>
        </div>

        <nav id="site-menu" className="nav-links" aria-label="Primary">
          {nav.map((item) => {
            const key = navKeyFromHref(item.href) || item.id;
            const label =
              (key && t.nav[key]) ||
              (item.external ? t.nav.bksExternal || item.label : item.label);

            if (item.external) {
              return (
                <a
                  key={item.id || item.href}
                  href={item.href || links.bksOfficial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-external"
                >
                  {label}
                </a>
              );
            }

            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} className={active ? 'is-active' : ''}>
                {label}
              </Link>
            );
          })}
          <div className="nav-lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
