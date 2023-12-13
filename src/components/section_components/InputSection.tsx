'use clients';

import { useEffect, useState } from 'react';
import {
  useToast,
  Modal,
  ModalOverlay,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import CommentModal from '@/components/modal/CommentModal';
import DonateModal from '@/components/modal/DonateModal';

import { fetchPostCommnet } from '@/utils/api';
import {
  InputWrapper,
  InputTopMessage,
  InputTopMessage2,
  InputMessageWrapper,
  TopMessageInbox,
  SecondMessageInbox,
  IconCheerBox,
  ComeCheerBox,
  ComeCheerText,
  CommentInputButton,
  CommentInputText,
} from './section.style';
import Icon_Cheer from '@/assets/svg/Icon_Cheer.svg';
import Icon_GiveMoney from '@/assets/svg/Icon_GiveMoney.svg';
// import Icon_Present from '@/assets/svg/Icon_Present.svg';

const InputSection = ({ InputSectionText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [mode, setMode] = useState('');

  const SubmitMessage = (content: string, username: string) => {
    toast.promise(fetchPostCommnet(content, username), {
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
      <InputWrapper>
        <InputTopMessage>{InputSectionText.topMessage}</InputTopMessage>
        <InputTopMessage2
          dangerouslySetInnerHTML={{ __html: InputSectionText.topeMessage2 }}
        />
        <MessageBoxWrapper>
          <InputMessageWrapper backgroundColor="#FF693F">
            <TopMessageInbox>
              {InputSectionText.topMessageInBox}
            </TopMessageInbox>
            <SecondMessageInbox>
              {InputSectionText.CheerMessage}
            </SecondMessageInbox>
            <IconCheerBox
              alt="CheerIcon"
              width={188}
              height={179}
              src={Icon_Cheer.src}
            />
            <ComeCheerBox backgroundColor="#ff430e">
              <ComeCheerText
                dangerouslySetInnerHTML={{
                  __html: InputSectionText.CheerMessageInfo,
                }}
              />
            </ComeCheerBox>
            <CommentInputButton onClick={ClickOnlyMessage}>
              <CommentInputText>
                {InputSectionText.CheerMessageGo}
              </CommentInputText>
            </CommentInputButton>
          </InputMessageWrapper>
          <InputMessageWrapper paddingTop={0} backgroundColor="gray.600">
            <Box
              sx={{
                fontFamily: 'NanumSquareNeo',
                fontSize: 26,
                fontWeight: 800,
                display: 'grid',
                placeItems: 'center',
                height: '100%',
                color: 'white',
                lineHeight: '200%',
              }}
            >
              안정적인 서비스를 위해
              <br />
              테스트 중입니다.
              <br />
              잠시만 기다려주세요!
              <br />
            </Box>
          </InputMessageWrapper>
          {/* 
          <InputMessageWrapper backgroundColor="#FFC500">
            <TopMessageInbox>
              {InputSectionText.topMessageInBox}
            </TopMessageInbox>
            <SecondMessageInbox>
              {InputSectionText.DonateMessage}
            </SecondMessageInbox>
            <IconCheerBox
              alt="GiveMoneyIncon"
              width={188}
              height={179}
              src={Icon_GiveMoney.src}
            />
            <ComeCheerBox backgroundColor="#EBB600">
              <ComeCheerText
                dangerouslySetInnerHTML={{
                  __html: InputSectionText.DonateMessageInfo,
                }}
              />
            </ComeCheerBox>
            <CommentInputButton onClick={ClickDonate}>
              <CommentInputText>
                {InputSectionText.DonateMessageGo}
              </CommentInputText>
            </CommentInputButton>
          </InputMessageWrapper>
          */}
        </MessageBoxWrapper>
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
      </InputWrapper>

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

const MessageBoxWrapper = styled.div`
  @media (min-width: 726px) {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;
  }
`;
