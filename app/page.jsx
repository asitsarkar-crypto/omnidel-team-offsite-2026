import CampaignHero from '../components/home/CampaignHero';
import HomeProofBand from '../components/home/HomeProofBand';
import JointInitiative from '../components/home/JointInitiative';
import ImpactCounters from '../components/home/ImpactCounters';
import SeedSponsorBand from '../components/home/SeedSponsorBand';
import ParticipateChapter from '../components/home/ParticipateChapter';
import HomeHeritageActivity from '../components/home/HomeHeritageActivity';
import HomeDonateBand from '../components/home/HomeDonateBand';
import HomeTestimonialsVatika from '../components/home/HomeTestimonialsVatika';
import HomeContact from '../components/home/HomeContact';
import HomeStickyCta from '../components/home/HomeStickyCta';
import TranslatedFaq from '../components/TranslatedFaq';
import JsonLd from '../components/JsonLd';
import { vatikaFaq } from '../lib/vatika';
import { buildMetadata, faqJsonLd, pageSeo } from '../lib/seo';

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(vatikaFaq)} />
      <CampaignHero />
      <HomeProofBand />
      <JointInitiative />
      <SeedSponsorBand />
      <ImpactCounters />
      <HomeHeritageActivity />
      <ParticipateChapter />
      <HomeDonateBand />
      <HomeTestimonialsVatika />
      <TranslatedFaq />
      <HomeContact />
      <HomeStickyCta />
    </>
  );
}
