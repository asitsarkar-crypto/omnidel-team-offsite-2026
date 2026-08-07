'use client';

import { useLanguage } from './LanguageProvider';
import FaqAccordion from './FaqAccordion';

/** Uses translated campaign FAQ items from the active language. */
export default function TranslatedFaq({ kicker, title }) {
  const { t } = useLanguage();
  return (
    <FaqAccordion
      items={t.campaign.faqItems}
      kicker={kicker || t.faq.kicker}
      title={title || t.faq.title}
    />
  );
}
