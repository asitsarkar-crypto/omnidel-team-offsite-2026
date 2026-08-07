import BksContent from '../../components/pages/BksContent';
import JsonLd from '../../components/JsonLd';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.bks);

export default function BksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Bharatiya Krishak Samaj', path: '/bks' },
        ])}
      />
      <BksContent />
    </>
  );
}
