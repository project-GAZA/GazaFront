'use clients';

import { useEffect, useState } from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  useDisclosure,
  Text,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import Icon_Cheer from '@/assets/svg/Icon_Cheer.svg';
import Icon_GiveMoney from '@/assets/svg/Icon_GiveMoney.svg';
import Icon_Present from '@/assets/svg/Icon_Present.svg';
import CommentModal from '../CommentModal';
import DonateComponent from '../DonateComponent';

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

  useEffect(() => {}, []);
  return (
    <>
      <Box className="InputWrapper">
        <Text className="InputTopMessage">
          모두 메세지로 마음을 전해보세요.
        </Text>
        <Text className="InputTopMessage2">
          가자지구 아이들에게
          <br />
          응원 메세지를 남겨주세요!
        </Text>
        <Box
          marginTop="31px"
          backgroundColor="#FF693F"
          className="InputMessageWrapper"
        >
          <Text className="TopMessageInbox">마음을 전해요!</Text>
          <Text className="SecondMessageInbox">응원메세지 작성하기</Text>
          <Image
            alt="CheerIcon"
            width={188}
            height={179}
            src={Icon_Cheer.src}
            style={{ margin: '15px auto 0px auto' }}
          />
          <Box className="ComeCheerBox" backgroundColor="#ff430e">
            <Text className="ComeCheerText">
              세계적으로 많은 사람들이
              <br /> 참여중이에요!
            </Text>
          </Box>
          <Button onClick={ClickOnlyMessage} className="CommentInput">
            <Text className="CommentInputText">작성하러 가기</Text>
          </Button>
        </Box>
        <Box
          marginTop="31px"
          backgroundColor="#FFC500"
          className="InputMessageWrapper"
        >
          <Text className="TopMessageInbox">마음을 전해요!</Text>
          <Text className="SecondMessageInbox">기부금 전달하기</Text>
          <Image
            alt="GiveMoneyIncon"
            width={188}
            height={179}
            src={Icon_GiveMoney.src}
            style={{ margin: '15px auto 0px auto' }}
          />
          <Box className="ComeCheerBox" backgroundColor="#EBB600">
            <Text className="ComeCheerText">
              세계적으로 많은 사람들이
              <br /> 참여중이에요!
            </Text>
          </Box>
          <Button onClick={ClickDonate} className="CommentInput">
            <Text className="CommentInputText">작성하러 가기</Text>
          </Button>
        </Box>
        <button className="WatchAddBox">
          <Image
            alt="PresentIcon"
            src={Icon_Present.src}
            width={76}
            height={76}
          />
          <Text className="WatchAddText">광고보고 기부하기</Text>
        </button>
      </Box>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mode === 'message' && <CommentModal mode={mode} onClose={onClose} />}
        {mode === 'donate' && <DonateComponent mode={mode} />}
      </Modal>
    </>
  );
};

export default InputSection;
