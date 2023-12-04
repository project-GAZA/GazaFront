'use clients';

import { useEffect, useState } from 'react';
import {
  useToast,
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
// import Icon_Present from '@/assets/svg/Icon_Present.svg';
import CommentModal from '@/components/CommentModal';
import DonateModal from '@/components/DonateModal';

const InputSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [mode, setMode] = useState('');

  const postComment = async (content, username) => {
    const response = await fetch(`/api/message`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        content,
        username,
      }),
    });
    return response.status;
  };

  const SubmitMessage = (content: string, username: string) => {
    toast.promise(postComment(content, username), {
      success: { title: '댓글작성완료', description: 'Looks great' },
      error: {
        title: '서버에 에러가 났습니다.',
        description: 'Something wrong',
      },
      loading: { title: '서버에 전송중입니다.', description: 'Please wait' },
    });
  };

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
              작성한 메시지는
              <br /> 이 사이트에서 공유돼요!
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
              작성한 메시지는
              <br /> 실제 책자에 들어갈 거에요!
            </Text>
          </Box>
          <Button onClick={ClickDonate} className="CommentInput">
            <Text className="CommentInputText">작성하러 가기</Text>
          </Button>
        </Box>
        {/* JANG: 최종 배포 이후 진행 (구글 애드센스) */}
        {/* <button className="WatchAddBox">
          <Image
            alt="PresentIcon"
            src={Icon_Present.src}
            width={76}
            height={76}
          />
          <Text className="WatchAddText">광고보고 기부하기</Text>
        </button> */}
      </Box>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mode === 'message' && (
          <CommentModal onSubmitForm={SubmitMessage} onClose={onClose} />
        )}
        {mode === 'donate' && (
          <DonateModal onSubmitMessage={SubmitMessage} onClose={onClose} />
        )}
      </Modal>
    </>
  );
};

export default InputSection;
