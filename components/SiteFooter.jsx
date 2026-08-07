'use client';

import Link from 'next/link';
import { archiveNav, branding, contact, links, nav, orgs, social } from '../lib/data';
import { navKeyFromHref } from '../lib/i18n';
import { platform } from '../lib/platform';
import LanguageSwitcher from './LanguageSwitcher';
import SocialIcons from './SocialIcons';
import { useLanguage } from './LanguageProvider';

export default function SiteFooter() {
  const { t } = useLanguage();
  const primaryNav = nav.filter((item) => !item.external).slice(0, 8);
  const secondaryNav = archiveNav.filter((item) => !item.external).slice(0, 6);

  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <div className="footer-brand-row">
            <img
              src={branding.ky21cLogo}
              alt={branding.ky21cLogoAlt}
              width={56}
              height={56}
              className="footer-bks-logo"
            />
            <img
              src={branding.bksLogo}
              alt={branding.bksLogoAlt}
              width={56}
              height={56}
              className="footer-bks-logo"
            />
            <div>
              <p className="footer-name">{platform.name}</p>
              <p className="footer-hi">{t.hero.nameLocal}</p>
              <p className="footer-tag">{t.hero.shortTitle}</p>
            </div>
          </div>
          <p className="footer-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="footer-phones">
            {contact.phones.map((p, i) => (
              <span key={p}>
                {i > 0 ? ' / ' : null}
                <a href={`tel:+91${p}`}>+91 {p}</a>
              </span>
            ))}
            <span aria-hidden="true"> · </span>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.cta.whatsapp}
            </a>
          </p>
          <p className="mt-3 text-sm text-[rgba(232,217,168,0.85)]">
            BKS · Krishnavirji · KarmYog — digital identity
          </p>
          <p className="text-sm text-[rgba(232,217,168,0.75)]">
            {t.contact.office}: {contact.office}
          </p>
          <div className="mt-5">
            <SocialIcons items={social} className="social-icons-footer" />
          </div>
          <div className="mt-5">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <p className="footer-label">{t.footer.explore}</p>
            <ul>
              {primaryNav.map((item) => {
                const key = navKeyFromHref(item.href);
                return (
                  <li key={item.href}>
                    <Link href={item.href}>{key && t.nav[key] ? t.nav[key] : item.label}</Link>
                  </li>
                );
              })}
              <li>
                <Link href="/donate">{t.cta.donateNow || 'Donate'}</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Heritage &amp; leadership</p>
            <ul>
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={links.bksOfficial} target="_blank" rel="noopener noreferrer">
                  {t.nav.bksExternal || links.bksOfficialLabel}
                </a>
              </li>
              {orgs.map((o) => (
                <li key={o.href}>
                  <a href={o.href} target="_blank" rel="noopener noreferrer">
                    {o.label.includes('West Bengal') ? 'BKS West Bengal' : o.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/contact">{t.footer.contactEnquiry}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap mt-10 mb-8 overflow-hidden rounded-2xl border border-[rgba(232,217,168,0.2)]">
        <iframe
          title={`Google Map — ${contact.office}`}
          src={contact.mapEmbedUrl}
          className="block h-[240px] w-full border-0 md:h-[300px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="wrap footer-bottom">
        <p>
          {platform.fullTitle} · BKS · Krishnavirji · KarmYog
        </p>
        <p className="mt-2 text-sm opacity-70">
          <a href={contact.mapLink} target="_blank" rel="noopener noreferrer">
            {t.footer.viewMap}
          </a>
        </p>
      </div>
    </footer>
  );
}
