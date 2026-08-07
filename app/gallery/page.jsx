import GalleryContent from '../../components/pages/GalleryContent';
import { gallery, profile } from '../../lib/data';

export const metadata = {
  title: 'Gallery',
  description: `Photo gallery for ${profile.name} — ${gallery.length} project photographs.`,
};

export default function GalleryPage() {
  return <GalleryContent />;
}
