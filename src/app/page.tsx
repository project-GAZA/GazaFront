/* eslint-disable react/jsx-pascal-case */

'use client';

import React, { useEffect, useState } from 'react';
import { Box, Modal, ModalOverlay } from '@chakra-ui/react';
import styled from '@emotion/styled';
// import $ from 'jquery';

import Header from '@/components/common/Header';

import ShowComment from '@/components/section_components/ShowComment';
import InputSection from '@/components/section_components/InputSection';
import ShowInfo_1 from '@/components/section_components/ShowInfo_1';
import ShowGazaMap from '@/components/section_components/ShowGazaMap';
import ExplainSectoin from '@/components/section_components/ExplainSectoin';

import SendMail from '@/components/modal/SendMail';
import ShareModal from '@/components/modal/ShareModal';

import { Korean } from '@/constants';
import MobileNav from '@/components/common/MobileNav';

const SectionBox = styled(Box)`
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; // 스크롤 시 배경 고정
`;

const Home = () => {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장합니다.
    // const commentWrapper = document.querySelector('.ShowCommentWrapper');
    // let handleScrollStart;
    // let handleScrollEnd;
    /*
    import('fullpage.js/vendors/scrolloverflow').then(() => {
      import('fullpage.js').then(() => {
        import('fullpage.js/dist/jquery.fullpage.min.css').then(() => {
          if ($.fn.fullpage && typeof $.fn.fullpage.destroy === 'function') {
            // 이미 인스턴스가 있다면 먼저 파괴
            $.fn.fullpage.destroy('all');
          }

          let section4Trigger = false;
          $('#fullpage').fullpage({
            normalScrollElements: '.ShowCommentWrapper',
            scrollOverflow: false,
            menu: '.gnb',
            anchors: [
              'section1',
              'section2',
              'section3',
              'section4',
              'section5',
            ],

            afterLoad: (anchorLink, _index) => {
              // 풀페이지 스크롤링 관련(섹션4는 풀페이지 스크롤이 잠시 멈춰야됨)!!
              if (_index === 4) {
                $.fn.fullpage.setAllowScrolling(false);
                section4Trigger = false;
              } else {
                $.fn.fullpage.setAllowScrolling(true);
                section4Trigger = true;
              }

              // 페이지가 스크롤 됬을 때 발생되는 이벤트 => 헤더 관련 부분!!
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
          commentWrapper = document.querySelector('.ShowCommentWrapper');
          // ShowCommnet에서 댓글영역에 마우스가 들어가면 풀페이지 멈추기!!
          handleScrollStart = () => {
            $.fn.fullpage.setAllowScrolling(false);
          };
          handleScrollEnd = () => {
            $.fn.fullpage.setAllowScrolling(true);
          };

          commentWrapper.addEventListener('mouseenter', handleScrollStart);
          commentWrapper.addEventListener('mouseleave', handleScrollEnd);
          // 풀페이지 스크롤링 관련(섹션4는 풀페이지 스크롤이 잠시 멈춰야됨)!
          const section4 = document.querySelector('.InputWrapper');
          section4.addEventListener('scroll', () => {
            section4Trigger = true;
            // 섹션 내부에서 스크롤이 끝에 도달했는지 확인
            const scrollHeight = section4.scrollHeight - section4.scrollTop;

            if (scrollHeight - section4.clientHeight === -0.5) {
              // Fullpage.js 스크롤 재활성화
              $.fn.fullpage.setAllowScrolling(true);
            } else if (scrollHeight - section4.clientHeight === 465) {
              $.fn.fullpage.setAllowScrolling(true);
            }
          });
        });
      });
    });
    return () => {
      commentWrapper.removeEventListener('mouseenter', handleScrollStart);
      commentWrapper.removeEventListener('mouseleave', handleScrollEnd);
    };
    */
  }, []);

  // 완료창으로 보내기,
  // 공유하기 버튼
  // 공유버튼..?

  // const [explain, setExplain] = useState(KoreanExplain);

  const [isMobileNavShow, setIsMobileNavShow] = useState(false);
  const [explain, setExplain] = useState(Korean);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentSection, setCurrentSection] = useState('');
  const [mailModal, setMailModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  return (
    <Box id="fullpage">
      {isMobileNavShow && (
        <MobileNav
          onOpenMail={() => setMailModal(true)}
          onOpenShare={() => setShareModal(true)}
          isMobileNavShow={isMobileNavShow}
          setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
        />
      )}
      <SectionBox className="section first_section" data-menuanchor="section1">
        <ShowGazaMap />
      </SectionBox>
      <Header
        onOpenMail={() => setMailModal(true)}
        onOpenShare={() => setShareModal(true)}
        isMobileNavShow={isMobileNavShow}
        setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
      />
      <SectionBox className="" data-menuanchor="section2">
        <ShowInfo_1 ShowInfoText={explain.ShowInfo} />
      </SectionBox>
      <SectionBox className="section" data-menuanchor="section3">
        <ShowComment />
      </SectionBox>
      <SectionBox className="" data-menuanchor="section4">
        <InputSection />
      </SectionBox>
      <SectionBox className="" data-menuanchor="section5">
        <ExplainSectoin explain={explain.Explain} />
      </SectionBox>

      <Modal
        isCentered
        onClose={() => setMailModal(false)}
        isOpen={mailModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {mailModal && <SendMail />}
      </Modal>
      <Modal
        isCentered
        onClose={() => setShareModal(false)}
        isOpen={shareModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {shareModal && <ShareModal />}
      </Modal>
    </Box>
  );
};
export default Home;
