/* eslint-disable react-hooks/rules-of-hooks */

'use clients';

import { useState } from 'react';
import {
  Text,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
} from '@chakra-ui/react';
import CommentModal from '@/components/CommentModal';

// eslint-disable-next-line consistent-return
const donateSection = ({ onClose, onSubmitMessage }) => {
  const [page, setPage] = useState(0);

  const [SaveInfo, setSaveInfo] = useState({ content: '', username: '' });

  const onClickSubmit = () => {
    onSubmitMessage(SaveInfo.content, SaveInfo.username);
    onClose();
  };
  // pageButton
  // const onClickBack = () => {
  //   setPage(prev => prev - 1);
  // };

  const onClickLick = () => {
    window.open('https://toss.me/peacegaza');
  };
  if (page === 0) {
    return (
      <CommentModal
        mode="Donate"
        onClose={onClose}
        setSaveInfo={setSaveInfo}
        setPage={setPage}
      />
    );
  }
  if (page === 1) {
    return (
      <ModalContent className="CommentModalWrapper">
        <ModalHeader className="DonateModalHeader">
          <Text className="CommentModalHeaderText">기부금 입금하기</Text>
          <Text className="DonateSubText">천원도 기부 가능해요!</Text>
        </ModalHeader>
        <ModalCloseButton className="ModalCloseIcon" width={12} height={12} />

        <ModalBody>
          <Box className="DonateModalLinkBox" onClick={onClickLick}>
            <Text>https://toss.me/peacegaza</Text>
          </Box>
          <Box className="DonateExplainBox">
            현재 지정기부금단체 컨택 중에 있습니다!
            <br />
            연말정산을 위한 기부금 영수증이 필요하신 분들은
            <br />
            조금만 기다려주세요!
            <br />
            (인스타로 공지 드리겠습니다!)
          </Box>
        </ModalBody>
        <Button
          className="DonateModalSubmit"
          onClick={onClickSubmit}
          variant="solid"
          colorScheme="blue"
        >
          확인
        </Button>
      </ModalContent>
    );
  }
};

export default donateSection;
