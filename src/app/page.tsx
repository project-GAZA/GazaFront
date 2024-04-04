'use client';

import { useRef } from 'react';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import SectionDonate from '@/component/Section_Donation/Section';

import CheerPopup from '@/component/Modals/Template/CheerPopup';
import ModalController from './_components/ModalController';

import DeadInfoSection from './_sections/DeadInfoSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        minWidth: '350px',
      }}
    >
      <SectionHero msgRef={messageRef} />
      <DeadInfoSection />
      <WhoAmISection />
      <SectionMessage msgRef={messageRef} />
      <SectionDonate />
      <WhyDonateSection />

      <ModalController />
    </div>
  );
};

export default Home;
