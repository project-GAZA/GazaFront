'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import $ from 'jquery';

import useWindowSize from './hooks/useWindowSize';

import Header from './components/Header';

import ShowComment from './components/SectionComponents/ShowComment';
import InputSection from './components/SectionComponents/InputSection';

// JANG: 테스트용 import
import ShowInfo_1 from './components/SectionComponents/ShowInfo_1';
import ShowGazaMap from './components/SectionComponents/ShowGazaMap';

const SectionBox = styled(Box)`
  text-align: center;
  background-image: url('/home-bg-img.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; // 스크롤 시 배경 고정
`;

const UpButton = styled.button`
  display: block;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  width: 60px;
  height: 60px;
  background: url(https://campaign-cdn.pstatic.net/0/campaign/2022/08/band-10th-anniversary/img/btn_top.png)
    no-repeat 0 0;
  background-size: 60px 60px;
  -webkit-transition: background 0.2s linear;
  -o-transition: background 0.2s linear;
  transition: background 0.2s linear;
  &:hover {
    background: url(https://campaign-cdn.pstatic.net/0/campaign/2022/08/band-10th-anniversary/img/btn_top_hover.png)
      no-repeat 0 0;
    background-size: 60px 60px;
  }
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
            menu: '.gnb',
            anchors: ['section1', 'section2', 'section3', 'section4'],
            afterLoad: (anchorLink, _index) => {
              // 모든 메뉴 항목에서 'on' 클래스 제거
              document.querySelectorAll('.gnb li').forEach(li => {
                li.classList.remove('on');
              });

              // 현재 활성화된 섹션에 해당하는 메뉴 항목에 'on' 클래스 추가
              const activeMenuItem = document.querySelector(
                `li[data-menuanchor="${anchorLink}"]`,
              );

              if (activeMenuItem) {
                activeMenuItem.classList.add('on');
              }
            },
          });
        });
      });
    });
  }, []);

  return (
    <>
      <Header />

      <Box id="fullpage">
        <SectionBox className="section" data-menuanchor="section1">
          <Box>
            <ShowGazaMap />
          </Box>
        </SectionBox>
        <SectionBox className="section" data-menuanchor="section2">
          <ShowInfo_1 />
        </SectionBox>
        <SectionBox className="section" data-menuanchor="section3">
          <ShowComment />
        </SectionBox>
        <SectionBox className="section" data-menuanchor="section4">
          <InputSection />
        </SectionBox>
      </Box>
      <UpButton>
        <a href="#section1" />
      </UpButton>
    </>
  );
};
export default Home;
