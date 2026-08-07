import InitiativesContent from '../../components/pages/InitiativesContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'Initiatives',
  description: `Campaigns and programmes associated with ${profile.name}.`,
};

export default function InitiativesPage() {
  return <InitiativesContent />;
}
