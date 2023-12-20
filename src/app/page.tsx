'use client';

import React, { useEffect, useState } from 'react';
import { Box, Modal, ModalOverlay } from '@chakra-ui/react';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

import Header from '@/app/_components/common/Header';
import Main from '@/app/_components/common/Main';

import ShareModal from '@/app/_components/modal/ShareModal';

const Home = () => {
  const [shareModal, setShareModal] = useState<boolean>(false);

  useEffect(() => {
    // 페이지가 로드될 때 스크롤 위치를 복원합니다.
    window.addEventListener('load', () => {
      const savedScrollPosition = localStorage.getItem('scrollPosition');
      if (savedScrollPosition !== null) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    });

    // 페이지가 언로드될 때 스크롤 위치를 저장합니다.
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
    });

    // 채널톡 로드
    if (process.env.NEXT_PUBLIC_CHANNELTALK) {
      const pluginKey = process.env.NEXT_PUBLIC_CHANNELTALK;
      ChannelService.loadScript();
      ChannelService.boot({
        pluginKey,
      });
    }
  });

  return (
    <Box>
      <Header onOpenShare={() => setShareModal(true)} />
      <Main />

      <Modal
        isCentered
        onClose={() => setShareModal(false)}
        isOpen={shareModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ShareModal />
      </Modal>
    </Box>
  );
};
export default Home;
