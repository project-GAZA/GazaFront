'use client';
// test_section_1 : 프로젝트 설명

import {
  Flex,
  Image,
  Text,
 } from '@chakra-ui/react';
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
      height='100vh'
      align='center'
      justify='center'
      direction='column'
      position='relative'
    >
      <Image
        src='/home-title.png'
        alt='PEACE IN GAZA'
        position='absolute'
        top="10%"
        maxW="50%"
        maxH = "20%"
        objectFit="contain"

      />
      <Text
        fontSize='2rem'
        fontWeight='bold'
        color='white'
        textAlign='center'
        css={anuimationStyle}
      >
        도는 하얀 도라지<br/>
        레는 빨간 레코드<br/>
        미는 파란 미나리<br/>
        와 이거 짱이다!!
      </Text>
    </Flex>
    </>
  );
};

export default ShowInfo;
