'use clients';

import { useState } from 'react';
import { Text, ModalBody } from '@chakra-ui/react';
import Comment from '@/app/_components/modal/Comment';

import { propsTypes } from '@/types';
import {
  CommentModalWrapper,
  ModalCloseIcon,
  CommentModalHeaderText,
  DonateModalHeader,
  DonateSubText,
  DonateModalLinkBox,
  DonateModalSubmit,
  DonateExplainBox,
} from './modal.style';

const Donate = ({
  onClose,
  onSubmitMessage,
}: propsTypes.DonateModalPropType) => {
  const [page, setPage] = useState<number>(0);
  const [SaveInfo, setSaveInfo] = useState<{
    content: string;
    username: string;
  }>({ content: '', username: '' });

  const onClickSubmit = () => {
    onSubmitMessage(SaveInfo.content, SaveInfo.username);
    onClose();
  };
  // pageButton
  // const onClickBack = () => {
  //   setPage(prev => prev - 1);
  // };

  const onClickLick = (): void => {
    window.open('https://toss.me/peacegaza');
  };
  if (page === 1) {
    return (
      <CommentModalWrapper>
        <DonateModalHeader>
          <CommentModalHeaderText>천원도 후원 가능해요!</CommentModalHeaderText>
          <DonateSubText>
            기부금은 (서버 비용 제외) ‘책자 제작’에 사용되며,
            <br /> 남은 금액은 가자지구 긴급구호 활동에 전달됩니다!
          </DonateSubText>
        </DonateModalHeader>
        <ModalCloseIcon width={12} height={12} />

        <ModalBody>
          <DonateModalLinkBox onClick={onClickLick}>
            <Text>https://toss.me/peacegaza</Text>
          </DonateModalLinkBox>
          <DonateExplainBox>
            현재 지정기부금단체 컨택 중에 있습니다!
            <br />
            연말정산을 위한 기부금 영수증이 필요하신 분들은
            <br />
            조금만 기다려주세요!
            <br />
            (인스타로 공지 드리겠습니다!)
          </DonateExplainBox>
        </ModalBody>
        <DonateModalSubmit
          onClick={onClickSubmit}
          variant="solid"
          colorScheme="blue"
        >
          확인
        </DonateModalSubmit>
      </CommentModalWrapper>
    );
  }
  return (
    <Comment
      mode="Donate"
      onSubmitForm={(t1, t2) => {
        console.log(t1, t2);
      }}
      onClose={onClose}
      setSaveInfo={setSaveInfo}
      setPage={setPage}
    />
  );
};

export default Donate;
