'use client';
//JANG: 프로젝트 설명 부분 수정!

import { Flex, Image } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';

// Text 애니메이션 (위에서 아래로 쓱)
const slideInUp = keyframes`
    0% {
      transform: 'translateY(100%)',
      opacity: 0,
    }
    100% {
      transform: 'translateY(0)',
      opacity: 1,    
    }
  `;

const ShowInfo = () => {
  const anuimationStyle = css`
    animation: ${slideInUp} 1s ease-in-out forwards;
  `;

  return (
    <>
      <Flex
        height="100vh"
        align="center"
        justify="center"
        direction="column"
        position="relative"
      >
        {/* JANG: 일단 간편하게 이미지로 넣었는데, 나중에 직접 타이틀과 텍스트를 position으로 넣고 + 효과 넣는 게 좋을 듯 */}
        <Image
          src="/section-1.png"
          alt="PEACE IN GAZA"
          position="absolute"
          // 이미지 화면에 꽉 차게
          w="100%"
          h="100%"
          // top="10%"
          // maxW="50%"
          // maxH = "20%"
          // objectFit="contain"
        />
      </Flex>
    </>
  );
};

export default ShowInfo;
