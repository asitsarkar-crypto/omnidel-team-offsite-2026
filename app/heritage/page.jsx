import HeritageContent from '../../components/pages/HeritageContent';
import JsonLd from '../../components/JsonLd';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.heritage);

export default function HeritagePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Heritage', path: '/heritage' },
        ])}
      />
      <HeritageContent />
    </>
  );
}
