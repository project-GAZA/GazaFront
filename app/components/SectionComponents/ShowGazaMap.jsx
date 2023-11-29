'use clients';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import IconMessage from '@/assets/svg/IconMessage.svg';
import GazaFullImage from '@/assets/svg/GazaFull.svg';

const GazaFullComponent = styled(Box)`
  position: relative;
  clip-path: inset(${props => props.percentage}% 0px 0px);
  transition: 3s clip-path ease-in;
  background-image: url('${GazaFullImage.src}');
  background-size: contain;
  background-repeat: no-repeat;
  width: 221.73px;
  height: 328.717px;
  flex-shrink: 0;
`;

const wait = timeToDelay =>
  new Promise(resolve => setTimeout(resolve, timeToDelay)); //이와 같이 선언 후

const ShowGazaMap = () => {
  const [percentage, setPercentage] = useState(80); //80이 안보이는 거임!
  const [realMoney, setRealMoney] = useState(10000000);

  useEffect(() => {
    // getPercentage();
    const PercentAnimation = async () => {
      await wait(1000);
      setPercentage(30);
    };
    PercentAnimation();
  }, []);

  return (
    <Box className="firstSction mobile">
      <Box className="Section1Header">
        <Text className="ShowGazaMapTitleFontOne">PEACE</Text>
        <Text className="ShowGazaMapTitleFontOne Two">IN GAZA</Text>
        <Image
          alt="message Icon"
          width={43}
          height={43}
          src={IconMessage.src}
          className="MessageIconInTitle"
        />
      </Box>
      <Box className="SubTitleSection1">
        <Text className="SubTitle">가자지구 아이들을 위한</Text>
        <Text className="SubTitle Two">
          <strong className="yellowFont">희망 메세지 책자</strong> 전달 프로젝트
        </Text>
      </Box>
      <Box className="GazaEmpty">
        <GazaFullComponent percentage={percentage.toFixed(4)} />
      </Box>
      <Box className="GoalTextBox">
        <Text className="GoalText">
          {percentage}% <strong className="GoalFixedText">달성</strong>
        </Text>
      </Box>
      <Box className="SectionOneFooter">
        <Box className="RealGoalWrapper">
          <Text className="RealGoalText">총 모금액</Text>
          <Text className="RealGoalMoney">{realMoney.toLocaleString()}</Text>
        </Box>
        <Box className="RealGoalWrapper">
          <Text className="RealGoalText">목표 모금액</Text>
          <Text className="RealGoalMoney">{realMoney.toLocaleString()}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowGazaMap;
