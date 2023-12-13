'use client';

import React, { useEffect, useState } from 'react';
import { Box, Modal, ModalOverlay } from '@chakra-ui/react';

import Header from '@/components/common/Header';
import FullPage from '@/components/common/FullPage';

import SendMail from '@/components/modal/SendMail';
import ShareModal from '@/components/modal/ShareModal';
// import channelInit from '@/lib/channel';

const Home = () => {
  const [mailModal, setMailModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
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
  });
  return (
    <Box>
      <Header
        onOpenMail={() => setMailModal(true)}
        onOpenShare={() => setShareModal(true)}
      />

      <FullPage />
      <Modal
        isCentered
        onClose={() => setMailModal(false)}
        isOpen={mailModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mailModal && <SendMail />}
      </Modal>
      <Modal
        isCentered
        onClose={() => setShareModal(false)}
        isOpen={shareModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {shareModal && <ShareModal />}
      </Modal>
    </Box>
  );
};
export default Home;
