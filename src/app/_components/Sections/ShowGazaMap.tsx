'use clients';

import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import IconMessage from '@/assets/svg/IconMessage.svg';
import GazaFullImage from '@/assets/svg/GazaFull.svg';
import GazaEmptySvg from '@/assets/svg/GazaEmpty.svg';

import { fetchGetDonateMoney, fetchGetMessageCount } from '@/utils/api';

import { backgrounds } from '@/constants/index';
import useCustomToast from '@/hooks/useCustomToast';
import Section from './section.style';

const calculatePercent = (goal: number, cur: number) => {
  const ratio = (cur / goal) * 100;
  return +ratio.toFixed(2);
};

const ShowGazaMap = () => {
  const toast = useCustomToast();
  const goals: Array<number> = [1000000]; // 목표금액 배열
  const [percentage, setPercentage] = useState<number>(0); // 80이 안보이는 거임!
  const [background, setBackground] = useState<string>('');
  const [goalMessage, setGoalMessage] = useState<number>(1000);
  const [currentMoney, setCurrentMoneny] = useState<number>(0); // 현재 금액 배열

  const FetchAndSetData = async (): Promise<void> => {
    try {
      const mCount = await fetchGetMessageCount();
      setPercentage(calculatePercent(goalMessage, mCount));
      const curMoney = await fetchGetDonateMoney();
      setCurrentMoneny(curMoney || 0);
    } catch (error) {
      toast.createErrorMessage(error);
    }
  };

  useEffect(() => {
    const excute = async () => {
      await FetchAndSetData();
    };
    const rand = Math.ceil(Math.random() * 6) - 1;
    setBackground(backgrounds[rand]);
    excute();
  }, []);

  return (
    <Section.FirstSction bgsrc={background}>
      <Box>
        <Section.Section1Header>
          <Section.ShowGazaMapTitleFontOne>
            Gaza’s Child{' '}
          </Section.ShowGazaMapTitleFontOne>
          <Section.ShowGazaMapTitleFontOne>
            Read <Section.Two>HOPE</Section.Two>
          </Section.ShowGazaMapTitleFontOne>
          <Section.MessageIconInTitle
            alt="message Icon"
            width={43}
            height={43}
            src={IconMessage.src}
          />
        </Section.Section1Header>
        <Box>
          <Section.SubTitle>가자지구 아이들을 위한</Section.SubTitle>
          <Section.SubTitle>
            <Section.Two>희망 메세지 책자</Section.Two> 전달 프로젝트
          </Section.SubTitle>
        </Box>
      </Box>
      <Section.MapWrapper>
        <Section.GazaEmpty bgsrc={GazaEmptySvg.src}>
          <Section.GazaFullComponent
            bgsrc={GazaFullImage.src}
            percentage={80 - +percentage * 0.8}
          />
          <Section.ValuableBox>
            <Section.GoalTextBox>
              <Section.GoalText>
                <Section.GoalFixedText>
                  {goalMessage}개의 메세지
                </Section.GoalFixedText>
              </Section.GoalText>
              <Section.GoalText>
                {percentage}%<Section.GoalFixedText>달성</Section.GoalFixedText>
              </Section.GoalText>
            </Section.GoalTextBox>
            <Section.SectionOneFooter>
              <Box>
                <Section.RealGoalText>총 모금액</Section.RealGoalText>
                <Section.RealGoalMoney>
                  {currentMoney.toLocaleString()}
                </Section.RealGoalMoney>
              </Box>

              <Box>
                <Section.RealGoalText>목표 모금액</Section.RealGoalText>
              </Box>
            </Section.SectionOneFooter>
          </Section.ValuableBox>
        </Section.GazaEmpty>
        <Section.MoneyUpdateTextTemp>
          ※ 후원금 모금 현황은
          <br /> 9~21시 동안 3시간마다 업데이트 됩니다!
          <br /> (결제 PG 연동 이후, 자동 반영 예정)
        </Section.MoneyUpdateTextTemp>
      </Section.MapWrapper>
    </Section.FirstSction>
  );
};

export default ShowGazaMap;
