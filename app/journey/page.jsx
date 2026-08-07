import JourneyContent from '../../components/pages/JourneyContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'Journey',
  description: `Career timeline and special assignments of ${profile.name}.`,
};

export default function JourneyPage() {
  return <JourneyContent />;
}
