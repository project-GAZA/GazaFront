'use clients';

import { useState } from 'react';
import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import Comment from '@/app/_components/modal/Comment';
import Donate from '@/app/_components/modal/Donate';

import { propsTypes } from '@/types';
import Icon_Cheer from '@/assets/svg/Icon_Cheer.svg';
import Icon_GiveMoney from '@/assets/svg/Icon_GiveMoney.svg';
// import Icon_Present from '@/assets/svg/Icon_Present.svg';
import Section from './section.style';

const InputSection = ({
  fetchMessage,
  InputSectionText,
}: propsTypes.InputSectionPropType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState('');

  const ClickOnlyMessage = (): void => {
    setMode('message');
    onOpen();
  };
  const ClickDonate = (): void => {
    setMode('donate');
    onOpen();
  };

  return (
    <>
      <Section.InputWrapper>
        <Section.InputTopMessage>
          {InputSectionText.topMessage}
        </Section.InputTopMessage>
        <Section.InputTopMessage2
          dangerouslySetInnerHTML={{ __html: InputSectionText.topeMessage2 }}
        />
        <Section.MessageBoxWrapper>
          <Section.InputMessageWrapper backgroundColor="#FF693F">
            <Section.TopMessageInbox>
              {InputSectionText.topMessageInBox}
            </Section.TopMessageInbox>
            <Section.SecondMessageInbox>
              {InputSectionText.CheerMessage}
            </Section.SecondMessageInbox>
            <Section.IconCheerBox
              alt="CheerIcon"
              width={188}
              height={179}
              src={Icon_Cheer.src}
            />
            <Section.ComeCheerBox backgroundColor="#ff430e">
              <Section.ComeCheerText
                dangerouslySetInnerHTML={{
                  __html: InputSectionText.CheerMessageInfo,
                }}
              />
            </Section.ComeCheerBox>
            <Section.CommentInputButton onClick={ClickOnlyMessage}>
              <Section.CommentInputText>
                {InputSectionText.CheerMessageGo}
              </Section.CommentInputText>
            </Section.CommentInputButton>
          </Section.InputMessageWrapper>
          <Section.InputMessageWrapper paddingTop={0} backgroundColor="#FFC500">
            <Section.TopMessageInbox>
              {InputSectionText.topMessageInBox}
            </Section.TopMessageInbox>
            <Section.SecondMessageInbox>
              {InputSectionText.DonateMessage}
            </Section.SecondMessageInbox>
            <Section.IconCheerBox
              alt="GiveMoneyIncon"
              width={188}
              height={179}
              src={Icon_GiveMoney.src}
            />
            <Section.ComeCheerBox backgroundColor="#EBB600">
              <Section.ComeCheerText
                dangerouslySetInnerHTML={{
                  __html: InputSectionText.DonateMessageInfo,
                }}
              />
            </Section.ComeCheerBox>
            <Section.CommentInputButton onClick={ClickDonate}>
              <Section.CommentInputText>
                {InputSectionText.DonateMessageGo}
              </Section.CommentInputText>
            </Section.CommentInputButton>
          </Section.InputMessageWrapper>
        </Section.MessageBoxWrapper>
      </Section.InputWrapper>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mode === 'message' && (
          <Comment
            ModalText={InputSectionText.ModalText}
            fetchMessage={fetchMessage}
            onClose={onClose}
          />
        )}
        {mode === 'donate' && (
          <Donate
            fetchAndSetMessage={fetchMessage}
            ModalText={InputSectionText.ModalText}
            onClose={onClose}
          />
        )}
      </Modal>
    </>
  );
};

export default InputSection;
