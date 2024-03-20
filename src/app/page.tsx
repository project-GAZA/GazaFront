'use client';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
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
      <SectionMessage />
      <DonateSection />
      <WhyDonateSection />
      <WhoAmISection />
    </div>
  );
};

export default Home;
