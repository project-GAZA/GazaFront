'use client';

import '@/style/globals.scss';

import HelloSection from './_sections/HelloSection';
import CommentSection from './_sections/CommentSection';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  return (
    <div>
      <HelloSection />
      <DeadInfoSection />
      <CommentSection />
      <DonateSection />
      <WhyDonateSection />
      <WhoAmISection />
    </div>
  );
};

export default Home;
