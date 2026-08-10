'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { links, primaryNav, profile } from '../lib/data';
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-inner">
        <Link className="nav-identity" href="/" aria-label={profile.name}>
          <img
            className="nav-portrait"
            src={profile.portrait}
            alt=""
            width={88}
            height={88}
          />
          <span className="nav-identity-text">
            <span className="nav-brand-en">{profile.name}</span>
            <span className="nav-brand-hi">{t.hero.nameLocal}</span>
            <span className="nav-brand-role">{t.hero.shortTitle}</span>
            <span className="nav-brand-tag">{t.hero.headerTagline}</span>
          </span>
        </Link>

        <nav id="site-menu" className="nav-links" aria-label="Primary">
          <div className="nav-lang-mobile">
            <p className="nav-drawer-label">{t.language}</p>
            <LanguageSwitcher variant="dropdown" />
          </div>

          {primaryNav.map((item) => {
            const key = navKeyFromHref(item.href) || item.id;
            const label = item.external
              ? t.nav.bksExternal || 'BKS'
              : (key && t.nav[key]) || item.label;

            if (item.external) {
              return (
                <a
                  key={item.id || item.href}
                  href={item.href || links.bksOfficial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-external nav-bks"
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
        </nav>

        <div className="nav-aside">
          <div className="nav-lang-desktop">
            <LanguageSwitcher variant="dropdown" />
          </div>
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
      </div>
    </header>
  );
}
