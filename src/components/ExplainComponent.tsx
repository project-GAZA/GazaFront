'use clients';

import { useState } from 'react';

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const ExplainComponent = ({ explain }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton className="ExplainButton">
          <Box className="ExplainText">프로젝트 소개</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="ArcdText" pb={4}>
          이 프로젝트는 “가자지구 아이들이 겪고 있는 고통과 아픔에 작은 도움이
          되고 싶다.” 하는 마음에서 시작했습니다.
          <br />
          프로젝트를 기획하는 과정에서, 그 어떤 종교적 정치적 편향 없이
          ‘가자지구 아이들’에 초점이 맞춰질 수 있도록 많이 고민하고
          노력했습니다.우리의 선조들은 전쟁의 아픔 속에서도, 전 세계의 도움을
          받아 오늘날의 대한민국을 일궈냈습니다. 그리고 이제는 우리가 그 도움의
          주체가 되어, 가자지구의 어린이들에게 희망의 손길을 내밀고자 합니다. 그
          아이들이 테러의 그림자가 아닌, 더 나은 세계를 만들어가는 주역으로
          성장할 수 있도록 돕고자 합니다. 이는 단순한 도움이 아니라, 평화와
          번영의 미래를 향한 확고한 발걸음이 될 것입니다. 가자지구의 아이들이
          밝은 미래를 그리며, 다음 세대의 훌륭한 구성원으로 성장할 수 있도록, 그
          아이들에게 작지만 확실한 변화를 주기 위해 프로젝트를 시작합니다.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton className="ExplainButton">
          <Box className="ExplainText">프로젝트 로드맵</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="ArcdText" pb={4}>
          <span style={{ fontWeight: 'bold' }}>step 1.</span> 이 사이트를 통해
          전 세계의 희망 메시지와 기부금을 받고
          <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>step 2.</span> 여기 모인
          메시지들로 책자를 제작해서
          <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>step 3.</span> 완성된 책자를
          가자지구의 아이들에게 전달합니다!
          <br />
          <br />
          ※ 더 자세한 진행 상황은 인스타그램을 통해 업데이트 될 예정이에요!
          지켜봐 주세요:)
          <br />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton className="ExplainButton">
          <Box className="ExplainText">기부금 및 책자 관련 공지</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="ArcdText" pb={4}>
          <span style={{ fontWeight: 'bold' }}>기부금 처리</span>
          <br />
          <br />
          현재 지정기부금단체 컨택 중에 있습니다! 연말정산 세액공제를 위해
          기부금 영수증이 필요하신 분들은, 추후 지정기부금단체 등록이 완료되면
          그때 기부 부탁드립니다:) 그 전까지는 토스 아이디를 통해 기부금을
          받으며, 기부금은 토스 내역으로 투명하게 공개됩니다. <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>책자</span>
          <br />
          <br />
          1차 발행 부수를 조율 중에 있습니다. 앞으로의 진행 상황 또한 인스타에서
          말씀 드리겠습니다!
          <br />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton className="ExplainButton">
          <Box className="ExplainText">추가 공지</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="ArcdText" pb={4}>
          아직 베타 버전으로, 계속 업데이트 및 테스트 진행 중에 있습니다.
          <br />
          <br />
          서버가 다운되면 웹 사이트 접속이 안 될 수 있어요! 그래도 모두의
          메시지는 남아 있으니 놀라지 마시고 인스타 DM으로 알려주시면
          감사하겠습니다:)
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default ExplainComponent;
