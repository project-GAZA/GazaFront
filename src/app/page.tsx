'use client';

import '@/style/globals.scss';

import SectionContainer from '@/app/_sections/SectionContainer';

import Children_1 from '@/assets/svg/background/children1.png';
import Children_2 from '@/assets/svg/background/children2.png';
import SectionHero from '@/component/Section_Hero/Section';
import CommentSection from './_sections/CommentSection';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const HeroSectionMook = {
  mainPictureData: {
    borderRadius: 20,
    urls: [Children_1.src, Children_2.src],
  },
};

const Home = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHero mainPictureData={HeroSectionMook.mainPictureData} />
      </SectionContainer>
      <DeadInfoSection />
      <CommentSection />
      <DonateSection />
      <WhyDonateSection />
      <WhoAmISection />
    </div>
  );
};

export default Home;
