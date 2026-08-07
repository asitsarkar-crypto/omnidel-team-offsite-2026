import AboutContent from '../../components/pages/AboutContent';
import { profile } from '../../lib/data';

export const metadata = {
  title: 'About',
  description: `Biography of ${profile.name} — ${profile.qualifications}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
