import HomeAbout from '../components/home/HomeAbout';
import HomeBenefits from '../components/home/HomeBenefits';
import HomeContact from '../components/home/HomeContact';
import HomeFaq from '../components/home/HomeFaq';
import HomeHero from '../components/home/HomeHero';
import HomeKisanBhavan from '../components/home/HomeKisanBhavan';
import HomeProcess from '../components/home/HomeProcess';
import HomeProof from '../components/home/HomeProof';
import HomeServices from '../components/home/HomeServices';
import HomeStickyCta from '../components/home/HomeStickyCta';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeWhyUs from '../components/home/HomeWhyUs';
import JsonLd from '../components/JsonLd';
import { faq } from '../lib/data';
import { buildMetadata, faqJsonLd, pageSeo } from '../lib/seo';

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />
      <HomeHero />
      <HomeProof />
      <HomeAbout />
      <HomeKisanBhavan />
      <HomeServices />
      <HomeWhyUs />
      <HomeProcess />
      <HomeBenefits />
      <HomeTestimonials />
      <HomeFaq />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
