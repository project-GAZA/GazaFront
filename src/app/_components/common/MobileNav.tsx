/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';

import Common from './common.style';

const MobileNav = ({
  MenuText,
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
  activeSection,
  onClickLange,
}) => {
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
            {MenuText.menu1}
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
            {MenuText.menu2}
          </ScrollLink>
        </Common.MobilLi>
        <Common.MobilLi>
          <ScrollLink
            style={{
              ...Common.MenuLink,
              cursor: 'pointer',
              color: '#8f8f8f',
              fontSize: '13px',
              padding: '0px',
            }}
            to="section5"
            spy
            smooth
            duration={800}
            onClick={toggleMobileNav}
          >
            {MenuText.descript}
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
            {MenuText.menu3}
          </ScrollLink>
        </Common.MobilLi>
        <Common.LangChanBox onClick={onClickLange}>
          <Common.LangChanText>한국어/English</Common.LangChanText>
        </Common.LangChanBox>
        <Common.IconBoxMenu>
          <Common.IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </Common.IconInMenu>
        </Common.IconBoxMenu>
      </Common.MobileUlWrapper>
    </Common.MenuWrapper>
  );
};

export default MobileNav;
