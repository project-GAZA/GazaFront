'use client';

import React, { useEffect, useState } from 'react';
import { Box, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';
import $ from 'jquery';

import Header from './components/Header';

import ShowComment from './components/SectionComponents/ShowComment';
import InputSection from './components/SectionComponents/InputSection';
import SendMail from './components/SendMail';

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

const Home = () => {
  const [currentSection, setCurrentSection] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              setCurrentSection(anchorLink);
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

  // 완료창으로 보내기,
  // 공유하기 버튼
  // 공유버튼..?

  return (
    <>
      {currentSection !== 'section1' && <Header onOpen={onOpen} />}

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

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          {isOpen && <SendMail />}
        </Modal>
      </Box>
    </>
  );
};
export default Home;
