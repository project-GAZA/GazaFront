'use client';

import { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';

import MobileNav from '@/app/_components/common/MobileNav';

import Common from './common.style';

const Header = ({ onClickLange, MenuText, onOpenShare }) => {
  const [isMobileNavShow, setIsMobileNavShow] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | undefined>('');

  useEffect(() => {
    const handleScroll = (): void => {
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
      const active: string | undefined = sections.find(section => {
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
        MenuText={MenuText}
        onOpenShare={onOpenShare}
        isMobileNavShow={isMobileNavShow}
        setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
        activeSection={activeSection}
        onClickLange={onClickLange}
      />
      <Common.HeaderWrapper>
        <Common.IconBox>
          <Common.IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </Common.IconInMenu>
        </Common.IconBox>
        <Common.MenuInner className="gnb">
          <Common.MenuList className={activeSection === 'section3' ? 'on' : ''}>
            <ScrollLink
              style={Common.MenuLink}
              to="section3"
              spy
              smooth
              duration={800}
            >
              {MenuText.menu1}
            </ScrollLink>
          </Common.MenuList>
          <Common.MenuList
            className={activeSection === 'section4' ? 'on' : ''}
            style={{ marginRight: '50px' }}
          >
            <ScrollLink
              style={Common.MenuLink}
              to="section4"
              spy
              smooth
              duration={800}
            >
              {MenuText.menu2}
            </ScrollLink>
          </Common.MenuList>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ScrollLink
              style={{
                ...Common.MenuLink,
                cursor: 'pointer',
                color: '#8f8f8f',
                fontSize: '14px',
              }}
              to="section5"
              spy
              smooth
              duration={800}
            >
              {MenuText.descript}
            </ScrollLink>
            <Common.MenuList
              className={activeSection === 'section5' ? 'on' : ''}
            >
              <ScrollLink
                style={Common.MenuLink}
                to="section5"
                spy
                smooth
                duration={800}
              >
                {MenuText.menu3}
              </ScrollLink>
            </Common.MenuList>
          </div>
        </Common.MenuInner>
        <Common.ChangeLanguageButton onClick={onClickLange}>
          한국어/English
        </Common.ChangeLanguageButton>
        <Box />
        <Common.HamIcon
          aria-label="Menu"
          size="md"
          icon={<CiMenuBurger color="white" size="md" />}
          onClick={() => setIsMobileNavShow(prev => !prev)}
        />
      </Common.HeaderWrapper>
    </>
  );
};

export default Header;
