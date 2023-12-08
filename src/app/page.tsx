'use client';

import React, { useState } from 'react';
import { Box, Modal, ModalOverlay } from '@chakra-ui/react';

import Header from '@/components/common/Header';
import FullPage from '@/components/common/FullPage';

import SendMail from '@/components/modal/SendMail';
import ShareModal from '@/components/modal/ShareModal';

const Home = () => {
  const [mailModal, setMailModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

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
