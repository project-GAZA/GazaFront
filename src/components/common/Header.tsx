'use client';

import { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

import {
  MenuLink,
  HeaderWrapper,
  MenuList,
  HamIcon,
  MenuInner,
  IconBox,
  IconInMenu,
} from './common.style';
import MobileNav from '@/components/common/MobileNav';

const Header = ({ onOpenMail, onOpenShare }) => {
  const [isMobileNavShow, setIsMobileNavShow] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // 스크롤 바닥 위치 구함 아래로 내려갈수록 위치값이 커짐
      const scrollBottom = scrollPosition + windowHeight;
      const sections = [
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
      ];

      // Find the section that is currently in view
      const active = sections.find(section => {
        const target = document.getElementById(section);
        if (target) {
          // 타겟의 바닥 위치 구함
          const offsetBottom = target.offsetTop + target.offsetHeight;
          return (
            scrollBottom <= offsetBottom && scrollBottom > target.offsetTop // 타겟의 탑
          );
        }
        return false;
      });

      setActiveSection(active);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MobileNav
        onOpenMail={onOpenMail}
        onOpenShare={onOpenShare}
        isMobileNavShow={isMobileNavShow}
        setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
        activeSection={activeSection}
      />
      <HeaderWrapper>
        <IconBox>
          <IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </IconInMenu>
          <IconInMenu onClick={onOpenMail}>
            <Image width={22} height={22} src={CallIcon.src} alt="CallIcon" />
          </IconInMenu>
        </IconBox>
        <MenuInner className="gnb">
          <MenuList className={activeSection === 'section3' ? 'on' : ''}>
            <MenuLink to="section3" spy smooth duration={800}>
              응원 메세지 보기
            </MenuLink>
          </MenuList>
          <MenuList
            className={activeSection === 'section4' ? 'on' : ''}
            style={{ marginRight: '50px' }}
          >
            <MenuLink to="section4" spy smooth duration={800}>
              응원 메세지 남기기
            </MenuLink>
          </MenuList>
          <MenuList className={activeSection === 'section5' ? 'on' : ''}>
            <MenuLink to="section5" spy smooth duration={800}>
              프로젝트 설명
            </MenuLink>
          </MenuList>
        </MenuInner>
        {/* <ChangeLanguageButton>한국어/영어</ChangeLanguageButton> */}
        <Box />
        <HamIcon
          aria-label="Menu"
          size="md"
          icon={<CiMenuBurger color="white" size="md" />}
          onClick={() => setIsMobileNavShow(prev => !prev)}
        />
      </HeaderWrapper>
    </>
  );
};

export default Header;
