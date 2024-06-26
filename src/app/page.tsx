'use client';

import { useRef, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { deviceState } from '@/store';

import '@/style/globals.scss';

import HeadMenu from '@/component/Common/Modules/HeadMenu';
import SectionHero from '@/component/Section_Hero/Section';
import SectionMessage from '@/component/Section_Message/Section';
import SectionDonate from '@/component/Section_Donation/Section';
import SectionAdditional from '@/component/Section_Additional/Section';
import SectionWhoAmI from '@/component/Section_WhoAmI/Section';
import SectionSituation from '@/component/Section_Situation/Section';

import ModalController from './_components/ModalController';

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
      <SectionSituation />
      <SectionWhoAmI />
      <SectionMessage msgRef={messageRef} />
      <SectionDonate />
      <SectionAdditional infoRef={moreInfoRef} />

      <ModalController />
    </div>
  );
};

export default Home;
