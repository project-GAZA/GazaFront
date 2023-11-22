'use client';

import { Flex, Center, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const TopButton = styled.button`
  ${props =>
    props.active &&
    `
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    background-color: #000;
    color: #fff;
  `}
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: -0.3px;ㅛㅁ
  padding: 7px 16px;
  border-radius: 16px;
  -webkit-transition: background 0.25s linear;
  -o-transition: background 0.25s linear;
  transition: background 0.25s linear;
`;

const PCHeader = () => {
  return (
    <header
      style={{
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(15px)',
        height: 58,
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'block',
        padding: '12px 0',
      }}
    >
      <Flex
        sx={{
          width: '100vw',
          gap: '10px',
        }}
      >
        <Center flex="1" color="white">
          <TopButton active>응원 메세지 보기</TopButton>
          <TopButton>응원 메세지 남기기</TopButton>
          <TopButton style={{ marginRight: '50px' }}>프로젝트 설명</TopButton>
          <TopButton>English/한국어</TopButton>
        </Center>
      </Flex>
    </header>
  );
};

export default PCHeader;
