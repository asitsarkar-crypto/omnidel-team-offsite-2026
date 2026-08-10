import HomeAbout from '../components/home/HomeAbout';
import HomeContact from '../components/home/HomeContact';
import HomeFaq from '../components/home/HomeFaq';
import HomeHero from '../components/home/HomeHero';
import HomeJourneyTeaser from '../components/home/HomeJourneyTeaser';
import HomeKisanBhavan from '../components/home/HomeKisanBhavan';
import HomeLeadership from '../components/home/HomeLeadership';
import HomeMedia from '../components/home/HomeMedia';
import HomeServices from '../components/home/HomeServices';
import HomeStickyCta from '../components/home/HomeStickyCta';
import HomeTestimonials from '../components/home/HomeTestimonials';
import JsonLd from '../components/JsonLd';
import { faq } from '../lib/data';
import { buildMetadata, faqJsonLd, pageSeo } from '../lib/seo';

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />
      <HomeHero />
      <HomeLeadership />
      <HomeJourneyTeaser />
      <HomeAbout />
      <HomeServices />
      <HomeKisanBhavan />
      <HomeMedia />
      <HomeTestimonials />
      <HomeFaq />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
