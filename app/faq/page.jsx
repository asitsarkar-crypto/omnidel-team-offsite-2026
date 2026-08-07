import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import TranslatedFaq from '../../components/TranslatedFaq';
import { vatikaFaq } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
          faqJsonLd(vatikaFaq),
        ]}
      />
      <TranslatedFaq />
      <section className="band muted-band">
        <div className="wrap">
          <Link className="btn btn-solid" href="/plant">
            Plant a Tree
          </Link>
        </div>
      </section>
    </>
  );
}
