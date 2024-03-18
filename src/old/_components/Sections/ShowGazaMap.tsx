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

const ShowGazaMap = ({ GazaMapText }) => {
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
          <Section.SubTitle>{GazaMapText.text1}</Section.SubTitle>
          <Section.SubTitle>
            <Section.Two>{GazaMapText.text2}</Section.Two>
            <br />
            {GazaMapText.text3}
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
                  {goalMessage}
                  {GazaMapText.text4}
                </Section.GoalFixedText>
              </Section.GoalText>
              <Section.GoalText>
                {percentage}%
                <Section.GoalFixedText>
                  {GazaMapText.text5}
                </Section.GoalFixedText>
              </Section.GoalText>
            </Section.GoalTextBox>
            <Section.SectionOneFooter>
              <Box>
                <Section.RealGoalText>{GazaMapText.text6}</Section.RealGoalText>
                <Section.RealGoalMoney>
                  {currentMoney.toLocaleString()}
                </Section.RealGoalMoney>
              </Box>

              <Box>
                <Section.RealGoalText>{GazaMapText.text7}</Section.RealGoalText>
              </Box>
            </Section.SectionOneFooter>
          </Section.ValuableBox>
        </Section.GazaEmpty>
        <Section.MoneyUpdateTextTemp>
          {GazaMapText.text8}
          <br />
          {GazaMapText.text9}
          <br />
          {GazaMapText.text10}
        </Section.MoneyUpdateTextTemp>
      </Section.MapWrapper>
    </Section.FirstSction>
  );
};

export default ShowGazaMap;
