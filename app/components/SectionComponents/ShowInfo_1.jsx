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
        “아이들은 잘못이 없습니다!”
      </Text>
      <Text className="SecondExplainText">
        10월 7일에 시작된 <span style={{ fontWeight: 'bold' }}>이스라엘 하마스 간의 분쟁</span>은
        <br /> 가자지구의 <span style={{ fontWeight: 'bold' }}>많은 아이들에게 깊은 상처</span>를 남겼습니다.
        <br /> 이 아픔은 향후 분쟁이 끝난 가자지구 안에서 다시금
        <br /> <span style={{ fontWeight: 'bold' }}>세상을 향한 분노와 증오의 불씨</span>로 남게 될 것이며,
        <br /> 이렇게 된다면 <span style={{ fontWeight: 'bold' }}>전 세계 평화에도 큰 위협</span>이 될 수 있습니다.
        
        <br /><br />
        <strong className="SecondExplainStrong">
          이제 우리가 행동할 때입니다.
        </strong>
        <br />

        <br /> <span style={{ fontWeight: 'bold', color: 'red' }}>가자지구 아이들을 위한 희망 메시지 전달 프로젝트</span>로
        <br /> 가자지구의 아이들이 분쟁의 어둠을 넘어 
        <br /> <span style={{ fontWeight: 'bold' }}>밝은 내일을 향해 나아가도록</span> 돕고자 합니다.
        <br /> 우리의 관심과 사랑이 이 아이들에게
        <br /> <span style={{ fontWeight: 'bold' }}>긍정적인 변화</span>를 가져오고,
        <br /> <span style={{ fontWeight: 'bold' }}>전 세계에 평화의 메시지</span>를 전파할 것입니다.
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
