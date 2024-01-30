/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import { propsTypes } from '@/types';
import styles from './MobileNav.module.scss';

const MobileNav = ({
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
  activeSection,
}: propsTypes.MobileNavPropsType) => {
  const toggleMobileNav = () => {
    setIsMobileNavShow();
  };

  return (
    <div
      className={`${styles.menuWrapper} ${isMobileNavShow ? styles.open : ''}`}
    >
      <div
        aria-label="Menu"
        className={styles.hamIcon}
        onClick={toggleMobileNav}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMobileNav();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <CiMenuBurger color={isMobileNavShow ? 'black' : 'white'} size="24" />
      </div>

      <ul className={styles.mobileUlWrapper}>
        <li className={styles.mobileMenuTitle}>Gaza’s Child Read HOPE</li>
        <li
          className={`${styles.mobileLi} ${
            activeSection === 'section3' ? 'on' : ''
          }`}
          data-menuanchor="section3"
        >
          <ScrollLink
            to="section3"
            spy
            smooth
            duration={800}
            onClick={toggleMobileNav}
          >
            응원메세지 보기
          </ScrollLink>
        </li>
        <li
          className={`${styles.mobileLi} ${
            activeSection === 'section4' ? 'on' : ''
          }`}
          data-menuanchor="section4"
        >
          <ScrollLink
            to="section4"
            spy
            smooth
            duration={800}
            onClick={toggleMobileNav}
          >
            응원메세지 남기기
          </ScrollLink>
        </li>
        <li
          className={`${styles.mobileLi} ${
            activeSection === 'section5' ? 'on' : ''
          }`}
          data-menuanchor="section5"
        >
          <ScrollLink
            to="section5"
            spy
            smooth
            duration={800}
            onClick={toggleMobileNav}
          >
            메시지 하나로 가자지구의 평화 만드는 방법
          </ScrollLink>
        </li>
        <li
          className={`${styles.mobileLi} ${
            activeSection === 'section5' ? 'on' : ''
          }`}
          data-menuanchor="section5"
        >
          <ScrollLink
            to="section5"
            spy
            smooth
            duration={800}
            onClick={toggleMobileNav}
          >
            더 알아보기
          </ScrollLink>
        </li>
        <div className={styles.iconBoxMenu}>
          <div
            className={styles.iconInMenu}
            onClick={onOpenShare}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpenShare();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Image
              width={22}
              height={22}
              src={ShareIcon.src}
              alt="Share Icon"
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
