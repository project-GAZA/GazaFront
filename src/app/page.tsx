'use client';

import { useRef, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { deviceState } from '@/store/deviceState';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import SectionDonate from '@/component/Section_Donation/Section';
import HeadMenu from '@/component/Common/Modules/HeadMenu';
import SectionAdditional from '@/component/Section_Additional/Section';

import ModalController from './_components/ModalController';

import DeadInfoSection from './_sections/DeadInfoSection';
import WhoAmISection from './_sections/WhoAmISection';

const Home = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  const moreInfoRef = useRef<HTMLDivElement>(null);
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
      <Toaster />
      <HeadMenu infoRef={moreInfoRef} msgRef={messageRef} />
      <SectionHero msgRef={messageRef} />
      <DeadInfoSection />
      <WhoAmISection />
      <SectionMessage msgRef={messageRef} />
      <SectionDonate />
      <SectionAdditional infoRef={moreInfoRef} />

      <ModalController />
    </div>
  );
};

export default Home;
