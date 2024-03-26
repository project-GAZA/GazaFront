'use client';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import DonateSection from '@/component/Section_Donation/Section';
import DeadInfoSection from './_sections/DeadInfoSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  return (
    <div
      style={{
        minWidth: '360px',
      }}
    >
      <SectionHero />
      <DeadInfoSection />
      <WhoAmISection />
      <SectionMessage />
      <DonateSection />
      <WhyDonateSection />
    </div>
  );
};

export default Home;
