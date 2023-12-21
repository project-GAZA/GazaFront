'use clients';

import { useState } from 'react';
import { ModalBody } from '@chakra-ui/react';
import Image from 'next/image';

import Comment from '@/app/_components/modal/Comment';

import { propsTypes } from '@/types';
import ExplainSendMoneyImg1 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney1.svg';
import ExplainSendMoneyImg2 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney2.svg';
import ExplainSendMoneyImg3 from '@/assets/svg/ExplainSendMoney/ExplainSendMoney3.svg';
import Modal from './modal.style';

const ExplainSendMoney = [
  {
    src: ExplainSendMoneyImg1.src,
    text: `‘익명 송금하기’ 버튼을 클릭`,
  },
  {
    src: ExplainSendMoneyImg2.src,
    text: `
이름과 금액을 작성 <br/>
※ 이름은 010을 제외한 전화번호 뒷자리로 해 주세요!
`,
  },
  {
    src: ExplainSendMoneyImg3.src,
    text: `
‘보내기’ 버튼을 누르면
후원금 보내기 성공!
`,
  },
];

const Donate = ({
  onClose,
  onSubmitMessage,
  ModalText,
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
      <Modal.DonateModalWrapper>
        <Modal.DonateModalHeader>
          <Modal.CommentModalHeaderText marginBottom="20px">
            천원도 후원 가능해요!
          </Modal.CommentModalHeaderText>
          <Modal.DonateSubText>
            아래 버튼을 클릭하면 ‘토스아이디(PEACEGAZA)’로 넘어가요!
            <br />
            <strong>이름은 010을 제외한 전화번호 뒷자리(8자)</strong>로
            해주세요!
            <br /> (확인 후, 후원자님의 메시지에 특별한 표시를 남겨드립니다.)
          </Modal.DonateSubText>
          <Modal.ModalCloseIcon width={12} height={12} />
        </Modal.DonateModalHeader>

        <ModalBody>
          <Modal.DonateModalLinkBox onClick={onClickLick}>
            클릭해서 토스로 후원하기
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
  return (
    <Comment
      mode="Donate"
      onSubmitForm={(t1, t2) => {
        console.log(t1, t2);
      }}
      onClose={onClose}
      setSaveInfo={setSaveInfo}
      setPage={setPage}
      ModalText={ModalText}
    />
  );
};

export default Donate;
