import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '@/store/modalState';

import CheerPopup from '@/component/Modals/Template/CheerPopup';
import DonateComplete from '@/component/Modals/Template/DonateComplete';
import WhoDonate from '@/component/Modals/Template/WhoDonate';
import DirectDonate from '@/component/Modals/Template/DirectDonate';
import DirectMessage from '@/component/Modals/Template/DirectMessage';

import ModalWrapper from './ModalWrapper';

const SelectModal = ({ modal }) => {
  if (modal === 'cheer') return <CheerPopup />;
  if (modal === 'complete') return <DonateComplete />;
  if (modal === 'who') return <WhoDonate />;
  if (modal === 'direct') return <DirectDonate />;
  if (modal === 'directmessage') return <DirectMessage />;
  return null;
};

const ModalController = () => {
  const modal = useRecoilValue<string>(modalState);
  return (
    <ModalWrapper isOpen={modal !== ''}>
      <SelectModal modal={modal} />
    </ModalWrapper>
  );
};

export default ModalController;
