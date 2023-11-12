'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import $ from 'jquery';

import ShowComment from './components/ShowComment';
import ShowInfo from './components/ShowInfo';
import ShowInputComment from './components/ShowInputComment';

// JANG: 테스트용 import
import ShowInfo_1 from './components/ShowInfo_1';
import ShowInfo_2 from './components/ShowInfo_2';

const SectionBox = styled(Box)`
  text-align: center;
  background-image: url('/home-bg-img.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; // 스크롤 시 배경 고정
`;

const Home = () => {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장합니다.

    import('fullpage.js/vendors/scrolloverflow').then(() => {
      import('fullpage.js').then(() => {
        import('fullpage.js/dist/jquery.fullpage.min.css').then(() => {
          if ($.fn.fullpage && typeof $.fn.fullpage.destroy === 'function') {
            // 이미 인스턴스가 있다면 먼저 파괴
            $.fn.fullpage.destroy('all');
          }

          $('#fullpage').fullpage({
            normalScrollElements: '.nonfullpage',
            scrollOverflow: true,
          });
        });
      });
    });
  }, []);

  return (
    <Box id="fullpage">
      <SectionBox className="section">
        <ShowInfo_1 />
      </SectionBox>
      {/* JANG: section 2 (프로젝트 설명 2) 추가 */}
      <SectionBox className="section">
        <ShowInfo_2 />
      </SectionBox>
      <SectionBox className="section">
        <ShowInputComment />
      </SectionBox>
      <SectionBox className="section">
        <ShowComment />
      </SectionBox>
      <SectionBox className="section">
        <Box>가자지구 지도 화면</Box>
      </SectionBox>
    </Box>
  );
};
export default Home;
