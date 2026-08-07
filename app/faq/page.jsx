import JsonLd from '../../components/JsonLd';
import FaqAccordion from '../../components/FaqAccordion';
import Link from 'next/link';
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
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/photos/field-01.jpg')" }} />
        <div className="wrap page-hero-copy">
          <p className="kicker light">FAQ</p>
          <h1>Clear answers before you plant</h1>
          <p className="page-lead">Pricing, payments, heritage, and how the joint initiative works.</p>
        </div>
      </section>
      <FaqAccordion items={vatikaFaq} kicker="Common questions" title="Everything donors ask first" />
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
