'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import DonateSection from '@/component/Section_Donation/Section';

import CheerPopup from '@/component/Modals/Template/CheerPopup';
import ModalWrapper from './_components/ModalWrapper';

import DeadInfoSection from './_sections/DeadInfoSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  const [modal, setModal] = useRecoilState<string>(modalState);
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

      {modal !== '' && (
        <ModalWrapper isOpen={modal === 'cheer'}>
          <CheerPopup />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Home;
