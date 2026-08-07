import AwardsContent from '../../components/pages/AwardsContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'Awards',
  description: `Awards and recognition for ${profile.name}.`,
};

export default function AwardsPage() {
  return <AwardsContent />;
}
