'use client';

import { useState } from 'react';
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

  const onClickHandle = e => {
    document.querySelectorAll('ul li').forEach(li => {
      li.classList.remove('on');
    });
    e.target.parentElement.classList.add('on');
  };
  return (
    <>
      <MobileNav
        onOpenMail={onOpenMail}
        onOpenShare={onOpenShare}
        isMobileNavShow={isMobileNavShow}
        setIsMobileNavShow={() => setIsMobileNavShow(prev => !prev)}
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
          <MenuList data-menuanchor="section3">
            <MenuLink href="#section3" onClick={onClickHandle}>
              응원 메세지 보기
            </MenuLink>
          </MenuList>
          <MenuList data-menuanchor="section4" style={{ marginRight: '50px' }}>
            <MenuLink href="#section4" onClick={onClickHandle}>
              응원 메세지 남기기
            </MenuLink>
          </MenuList>
          <MenuList data-menuanchor="section5">
            <MenuLink href="#section5" onClick={onClickHandle}>
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
