import ContactContent from '../../components/pages/ContactContent';
import { buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.contact);

export default function ContactPage() {
  return <ContactContent />;
}
