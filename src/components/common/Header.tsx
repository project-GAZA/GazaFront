'use client';

import { CiMenuBurger } from 'react-icons/ci';

import Image from 'next/image';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

import {
  MenuLink,
  HeaderWrapper,
  MenuList,
  HamIcon,
  MenuInner,
  DesktopIconBox,
  IconInMenu,
  ChangeLanguageButton,
} from './common.style';

const Header = ({
  onOpenMail,
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
}) => {
  const onClickHandle = e => {
    document.querySelectorAll('ul li').forEach(li => {
      li.classList.remove('on');
    });
    e.target.parentElement.classList.add('on');
  };
  return (
    <>
      <HeaderWrapper>
        <DesktopIconBox>
          <IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </IconInMenu>
          <IconInMenu onClick={onOpenMail}>
            <Image width={22} height={22} src={CallIcon.src} alt="CallIcon" />
          </IconInMenu>
        </DesktopIconBox>
        <MenuInner className="gnb">
          <MenuList data-menuanchor="section2">
            <MenuLink href="#section2" onClick={onClickHandle}>
              프로젝트 설명
            </MenuLink>
          </MenuList>
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
        </MenuInner>
        <ChangeLanguageButton>English/한국어</ChangeLanguageButton>
      </HeaderWrapper>
      <HamIcon
        aria-label="Menu"
        size="md"
        icon={
          <CiMenuBurger color={isMobileNavShow ? 'black' : 'white'} size="md" />
        }
        onClick={setIsMobileNavShow}
      />
    </>
  );
};

export default Header;
