import VisionContent from '../../components/pages/VisionContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'Vision & Mission',
  description: `Vision and mission of ${profile.name}.`,
};

export default function VisionPage() {
  return <VisionContent />;
}
