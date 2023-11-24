'use clients';

import { useState } from 'react';
import { Box, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';

import InputComment from '../InputComment';
import DonateComponent from '../DonateComponent';

const InputButton = styled(Box)`
  font-size: 34px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -1px;

  height: 400px;
  width: 500px;
  border-radius: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 3px black;

  &:active {
    box-shadow:
      inset -0.3rem -0.1rem 1.4rem ${props => props.cl1},
      inset 0.3rem 0.4rem 0.8rem ${props => props.cl1};
    cursor: pointer;
  }
`;

const InputWrapper = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const InputSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState('');

  const ClickOnlyMessage = () => {
    setMode('message');
    onOpen();
  };
  const ClickDonate = () => {
    setMode('donate');
    onOpen();
  };
  return (
    <>
      <InputWrapper>
        <InputButton
          onClick={ClickOnlyMessage}
          backgroundColor="#0e142b"
          color="#fff"
          cl1="#f7f7f7"
        >
          <h1>응원 메세지 남기기</h1>
        </InputButton>
        <InputButton
          onClick={ClickDonate}
          backgroundColor="#f7f7f7"
          color="#0e142b"
        >
          <h1>기부금 보내기</h1>
        </InputButton>
      </InputWrapper>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mode === 'message' && <InputComment mode={mode} onClose={onClose} />}
        {mode === 'donate' && <DonateComponent mode={mode} />}
      </Modal>
    </>
  );
};

export default InputSection;
