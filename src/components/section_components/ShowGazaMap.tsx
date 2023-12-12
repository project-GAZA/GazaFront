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
import { fetchGetDonateMoney } from '@/utils/api';

const wait = timeToDelay =>
  new Promise(resolve => {
    setTimeout(resolve, timeToDelay);
  }); // 이와 같이 선언 후

const calculatePercent = (goal, cur) => {
  const ratio = (cur / goal) * 100;
  return +ratio.toFixed(2);
};

const ShowGazaMap = () => {
  const goals = [1000000]; // 목표금액 배열
  const [currentMoney, setCurrentMoneny] = useState(0); // 현재 금액 배열
  const [percentage, setPercentage] = useState(0); // 80이 안보이는 거임!

  const FetchAndSetMoney = async () => {
    const res = await fetchGetDonateMoney();
    setCurrentMoneny(res);
    setPercentage(calculatePercent(goals[0], res));
  };

  useEffect(() => {
    const excute = async () => {
      await FetchAndSetMoney();
    };
    excute();
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
            percentage={80 - +percentage * 0.8}
          />
        </GazaEmpty>
        <GoalTextBox>
          <GoalText>
            {/* {percentage}% <strong className="GoalFixedText">달성</strong> */}
            {/* JANG: 12/3 임시 수정 */}
            {percentage}% <GoalFixedText>달성</GoalFixedText>
          </GoalText>
        </GoalTextBox>
        <SectionOneFooter>
          <Box>
            <RealGoalText>총 모금액</RealGoalText>
            <RealGoalMoney>{currentMoney.toLocaleString()}</RealGoalMoney>
          </Box>
          <Box>
            <RealGoalText>목표 모금액</RealGoalText>
            <RealGoalMoney>{goals[0].toLocaleString()}</RealGoalMoney>
          </Box>
        </SectionOneFooter>
      </Box>
    </FirstSction>
  );
};

export default ShowGazaMap;
