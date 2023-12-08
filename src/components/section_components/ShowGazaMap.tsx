'use clients';

import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import {
  GazaFullComponent,
  FirstSction,
  ShowGazaMapTitleFontOne,
  Two,
  Section1Header,
  SubTitle,
  GazaEmpty,
  GoalTextBox,
  GoalText,
  GoalFixedText,
  RealGoalText,
  SectionOneFooter,
  RealGoalMoney,
  MessageIconInTitle,
} from './section.style';

import IconMessage from '@/assets/svg/IconMessage.svg';
import GazaFullImage from '@/assets/svg/GazaFull.svg';
import Main_Universe from '@/assets/svg/Main_Universe.jpg';
import GazaEmptySvg from '@/assets/svg/GazaEmpty.svg';

const wait = timeToDelay =>
  new Promise(resolve => {
    setTimeout(resolve, timeToDelay);
  }); // 이와 같이 선언 후

const ShowGazaMap = () => {
  const [percentage, setPercentage] = useState(80); // 80이 안보이는 거임!
  // const [realMoney, setRealMoney] = useState(10000000);

  useEffect(() => {
    // getPercentage();
    const PercentAnimation = async () => {
      await wait(1000);
      setPercentage(30);
    };
    PercentAnimation();
  }, []);

  return (
    <FirstSction bgsrc={Main_Universe.src}>
      <Box>
        <Section1Header>
          <ShowGazaMapTitleFontOne>Gaza’s Child </ShowGazaMapTitleFontOne>
          <ShowGazaMapTitleFontOne>
            Read <Two>HOPE</Two>
          </ShowGazaMapTitleFontOne>
          <MessageIconInTitle
            alt="message Icon"
            width={43}
            height={43}
            src={IconMessage.src}
          />
        </Section1Header>
        <Box>
          <SubTitle>가자지구 아이들을 위한</SubTitle>
          <SubTitle>
            <Two>희망 메세지 책자</Two> 전달 프로젝트
          </SubTitle>
        </Box>
      </Box>
      <Box>
        <GazaEmpty bgsrc={GazaEmptySvg.src}>
          <GazaFullComponent
            bgsrc={GazaFullImage.src}
            percentage={percentage.toFixed(4)}
          />
        </GazaEmpty>
        <GoalTextBox>
          <GoalText>
            {/* {percentage}% <strong className="GoalFixedText">달성</strong> */}
            {/* JANG: 12/3 임시 수정 */}
            ??% <GoalFixedText>달성</GoalFixedText>
          </GoalText>
        </GoalTextBox>
        <SectionOneFooter>
          <Box>
            <RealGoalText>총 모금액</RealGoalText>
            {/* <Text className="RealGoalMoney">{realMoney.toLocaleString()}</Text> */}
            {/* JANG: 12/3 임시 수정 */}
            <RealGoalMoney>??</RealGoalMoney>
          </Box>
          <Box>
            <RealGoalText>목표 모금액</RealGoalText>
            {/* <Text className="RealGoalMoney">{realMoney.toLocaleString()}</Text> */}
            {/* JANG: 12/3 임시 수정 */}
            <RealGoalMoney>??</RealGoalMoney>
          </Box>
        </SectionOneFooter>
      </Box>
    </FirstSction>
  );
};

export default ShowGazaMap;
