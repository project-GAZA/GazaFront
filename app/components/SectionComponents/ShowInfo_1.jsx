'use client';

import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const EarthTextWrapper = styled(Box)`
  border-radius: 37px;
  border: 1px solid #000;
  width: fit-content;
  padding: 0 10px 5px 10px;
  position: relative;
`;

const ShowInfo = () => {
  return (
    <Box className="SecondSection mobile">
      <Text className="SecondTopText">
        “가자지구 아이들에게 희망의 메세지를
        <br /> 전달하는 프로젝트를 시작합니다.”
      </Text>
      <Text className="SecondExplainText">
        분쟁의 그늘 아래 고통받는 가자지구 아이들에게
        <br /> 사랑과 희망의 메시지로 세상의 따스함을 전하려 합니다.
        <br /> 우리의 마음이 하나로 모여 전달될 때,
        <br /> 이 메시지는 아이들에게 전쟁과 분쟁에서 비롯된 증오 대신
        <br /> 밝은 미래로 나아갈 수 있는 희망의 기반을 제공할 것입니다.
        <br />전 세계에서 모인 따뜻한 마음과 응원의 메시지들을 책자로
        <br /> 엮어 가자지구 난민캠프의 어린이들에게 전달함으로써,
        <br />
        <strong className="SecondExplainStrong">
          그들의 삶에 작지만 의미있는 변화를 선사합니다!
        </strong>
      </Text>
      <Box className="EarthWrapper">
        <Box className="Pin"></Box>
        <Box className="PinShadow"></Box>
        <EarthTextWrapper left={190} top={-30} backgroundColor="#fff">
          <Text className="EarthText"># GAZA</Text>
        </EarthTextWrapper>
        <EarthTextWrapper left={0} top={-5} backgroundColor="#fff">
          <Text className="EarthText">희망 메세지를</Text>
        </EarthTextWrapper>
        <EarthTextWrapper left={110} top={5} backgroundColor="#fff">
          <Text className="EarthText">희망 메세지를 전달합니다.</Text>
        </EarthTextWrapper>
        <EarthTextWrapper left="195px" top="-60px" backgroundColor="#FFDE6D">
          <Text className="EarthText">희망 메세지를</Text>
        </EarthTextWrapper>
        <EarthTextWrapper
          left="-20px"
          top="-30px"
          backgroundColor="#FFDE6D"
          zIndex={-1}
        >
          <Text className="EarthText">희망 메세지를</Text>
        </EarthTextWrapper>
      </Box>
    </Box>
  );
};

export default ShowInfo;
