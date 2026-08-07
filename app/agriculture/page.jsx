import AgricultureContent from '../../components/pages/AgricultureContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'Agriculture',
  description: `Sustainable, traditional, and innovative agriculture agenda of ${profile.name}.`,
};

export default function AgriculturePage() {
  return <AgricultureContent />;
}
