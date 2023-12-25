'use clients';

import { useState } from 'react';
import { ModalBody } from '@chakra-ui/react';
import Image from 'next/image';

import Comment from '@/app/_components/modal/Comment';
import RegistModal from '@/app/_components/modal/RegistModal';

import { propsTypes } from '@/types';
import { ExplainSendMoney } from '@/constants';
import Modal from './modal.style';

const Donate = ({
  fetchAndSetMessage,
  onClose,
  ModalText,
}: propsTypes.DonateModalPropType) => {
  const [page, setPage] = useState<number>(0);
  const [SaveInfo, setSaveInfo] = useState<{
    content: string;
    username: string;
  }>({ content: '', username: '' });

  const onClickLick = (): void => {
    window.open('https://toss.me/peacegaza');
    setPage(prev => prev + 1);
  };
  if (page === 1) {
    return (
      <Modal.DonateModalWrapper>
        <Modal.DonateModalHeader>
          <Modal.CommentModalHeaderText marginBottom="20px">
            {ModalText.TossTopText}
          </Modal.CommentModalHeaderText>
          <Modal.DonateSubText
            dangerouslySetInnerHTML={{ __html: ModalText.TossSubText }}
          />
          <Modal.ModalCloseIcon width={12} height={12} />
        </Modal.DonateModalHeader>

        <ModalBody>
          <Modal.DonateModalLinkBox onClick={onClickLick}>
            {ModalText.TossDonateButtonText}
          </Modal.DonateModalLinkBox>
          <Modal.DonateExplainBox>
            {ExplainSendMoney.map(v => (
              <Modal.DonateExplainMoney key={v.src}>
                <Image
                  width={150}
                  height={300}
                  alt="explainSendMoney"
                  src={v.src}
                  style={{ margin: 'auto', height: '300px' }}
                />
                <Modal.DonateExplainText
                  dangerouslySetInnerHTML={{ __html: v.text }}
                />
              </Modal.DonateExplainMoney>
            ))}
          </Modal.DonateExplainBox>
        </ModalBody>
      </Modal.DonateModalWrapper>
    );
  }
  if (page === 2) {
    return (
      <RegistModal
        saveInfo={SaveInfo}
        onClose={onClose}
        ModalText={ModalText}
        fetchAndSetMessage={fetchAndSetMessage}
      />
    );
  }
  return (
    <Comment
      mode="Donate"
      onClose={onClose}
      setSaveInfo={setSaveInfo}
      setPage={setPage}
      ModalText={ModalText}
    />
  );
};

export default Donate;
