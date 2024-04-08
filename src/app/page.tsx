'use client';

import { useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { deviceState } from '@/store/deviceState';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import SectionDonate from '@/component/Section_Donation/Section';

import HeadMenu from '@/component/Common/Modules/HeadMenu';
import ModalController from './_components/ModalController';

import DeadInfoSection from './_sections/DeadInfoSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  // const moreInfoRef = useRef<HTMLDivElement>(null);
  //
  const setDevice = useSetRecoilState(deviceState); // Device가 모바일인지 PC인지

  useEffect(() => {
    const { userAgent } = navigator;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );
    setDevice(isMobile ? 'mobile' : 'desktop');
  }, [setDevice]);

  return (
    <div
      style={{
        minWidth: '350px',
      }}
    >
      <HeadMenu msgRef={messageRef} />
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
