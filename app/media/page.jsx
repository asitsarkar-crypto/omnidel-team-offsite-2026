import MediaContent from '../../components/pages/MediaContent';
import { buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.media);

export default function MediaPage() {
  return <MediaContent />;
}
