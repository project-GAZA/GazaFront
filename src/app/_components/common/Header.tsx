'use client';

import { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import MobileNav from '@/app/_components/common/MobileNav';
import { propsTypes } from '@/types';
import styles from './Header.module.scss';

const Header = ({ onOpenShare }: propsTypes.HeaderPropsType) => {
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
        onOpenShare={onOpenShare}
        isMobileNavShow={isMobileNavShow}
        setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
        activeSection={activeSection}
      />
      <div className={styles.headerWrapper}>
        <div className={styles.iconBox}>
          <div
            className={styles.iconInMenu}
            onClick={onOpenShare}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') onOpenShare();
            }}
            role="button"
            tabIndex={0}
            aria-label="Share"
          >
            <Image
              width={22}
              height={22}
              src={ShareIcon.src}
              alt="Share Icon"
            />
          </div>
        </div>
        <ul className={styles.menuInner}>
          <li
            className={`${styles.menuList} ${
              activeSection === 'section3' ? styles.on : ''
            }`}
          >
            <ScrollLink to="section3" spy smooth duration={800}>
              응원 메세지 보기
            </ScrollLink>
          </li>
          <li
            className={`${styles.menuList} ${
              activeSection === 'section4' ? styles.on : ''
            }`}
            style={{ marginRight: '50px' }}
          >
            <ScrollLink to="section4" spy smooth duration={800}>
              응원 메세지 남기기
            </ScrollLink>
          </li>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ScrollLink
              to="section5"
              spy
              smooth
              duration={800}
              style={{ cursor: 'pointer', color: '#8f8f8f', fontSize: '14px' }}
            >
              메시지 하나로 가자지구의 평화 만드는 방법
            </ScrollLink>
            <li
              className={`${styles.menuList} ${
                activeSection === 'section5' ? styles.on : ''
              }`}
            >
              <ScrollLink to="section5" spy smooth duration={800}>
                더 알아보기
              </ScrollLink>
            </li>
          </div>
        </ul>
        <Box />
        <div
          aria-label="Menu"
          className={styles.hamIcon}
          onClick={() => setIsMobileNavShow(prev => !prev)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ')
              setIsMobileNavShow(prev => !prev);
          }}
          role="button"
          tabIndex={0}
        >
          <CiMenuBurger color="white" size="24" />
        </div>
      </div>
    </>
  );
};

export default Header;
