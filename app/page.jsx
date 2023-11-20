'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import $ from 'jquery';

import useWindowSize from './hooks/useWindowSize';

import PCHeader from './components/PCHeader';

import ShowComment from './components/SectionComponents/ShowComment';
import ShowInputComment from './components/SectionComponents/ShowInputComment';

// JANG: 테스트용 import
import ShowInfo_1 from './components/SectionComponents/ShowInfo_1';
import ShowInfo_2 from './components/SectionComponents/ShowInfo_2';
import ShowGazaMap from './components/SectionComponents/ShowGazaMap';

const SectionBox = styled(Box)`
  text-align: center;
  background-image: url('/home-bg-img.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; // 스크롤 시 배경 고정
`;

const Home = () => {
  const size = useWindowSize();
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
            menu: '.gnb',
            anchors: ['section1', 'section2', 'section3'],
          });
        });
      });
    });
  }, []);

  return (
    <>
      {size.width >= 900 ? <PCHeader /> : <></>}

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
          <Box>
            <ShowGazaMap />
          </Box>
        </SectionBox>
      </Box>
    </>
  );
};
export default Home;
