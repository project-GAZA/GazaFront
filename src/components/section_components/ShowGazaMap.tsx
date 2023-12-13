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
  RealGoalText,
  GoalFixedText,
  SectionOneFooter,
  RealGoalMoney,
  MessageIconInTitle,
  MoneyUpdateTextTemp,
} from './section.style';

import IconMessage from '@/assets/svg/IconMessage.svg';
import GazaFullImage from '@/assets/svg/GazaFull.svg';
import GazaEmptySvg from '@/assets/svg/GazaEmpty.svg';

import { fetchGetDonateMoney } from '@/utils/api';

import { backgrounds } from '@/constants/index';

const calculatePercent = (goal, cur) => {
  const ratio = (cur / goal) * 100;
  return +ratio.toFixed(2);
};

const ShowGazaMap = () => {
  const goals = [1000000]; // 목표금액 배열
  const [currentMoney, setCurrentMoneny] = useState(0); // 현재 금액 배열
  const [percentage, setPercentage] = useState(0); // 80이 안보이는 거임!
  const [background, setBackground] = useState(''); // 80이 안보이는 거임!

  const FetchAndSetMoney = async () => {
    const res = await fetchGetDonateMoney();
    setCurrentMoneny(res);
    setPercentage(calculatePercent(goals[0], res));
  };

  useEffect(() => {
    const excute = async () => {
      await FetchAndSetMoney();
    };
    const rand = Math.ceil(Math.random() * 6) - 1;
    setBackground(backgrounds[rand]);
    excute();
  }, []);

  return (
    <FirstSction bgsrc={background}>
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
            {percentage}% <GoalFixedText>달성</GoalFixedText>
          </GoalText>
        </GoalTextBox>
        <SectionOneFooter>
          <MoneyUpdateTextTemp>
            ※ 후원금 모금 현황은
            <br /> (결제 PG 연동 이후, 자동 반영 예정)
            <br /> 9~21시 동안 3시간마다 업데이트 됩니다!
          </MoneyUpdateTextTemp>
          <Box>
            <RealGoalText>총 메세지</RealGoalText>
            <RealGoalMoney>{currentMoney.toLocaleString()}</RealGoalMoney>
          </Box>
          <Box>
            <RealGoalText>목표 메세지</RealGoalText>
            <RealGoalMoney>{goals[0].toLocaleString()}</RealGoalMoney>
          </Box>
        </SectionOneFooter>
      </Box>
    </FirstSction>
  );
};

export default ShowGazaMap;
