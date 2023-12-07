'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconButton, Box } from '@chakra-ui/react';
import { CiShare1, CiMail, CiMenuBurger } from 'react-icons/ci';

import {
  MenuLink,
  HeaderWrapper,
  EmptyBox,
  MobileMenuTitle,
  HamIcon,
  LangChanBox,
  MobilLi,
  IconBoxMenu,
  LangChanText,
  IconInMenu,
  MenuInner,
  AWrapperMobile,
  MobileUlWrapper,
  MenuWrapper,
  DesktopIconBox,
} from './common.style';

import useWindowSize from '@/hooks/useWindowSize';
import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

const Header = ({ onOpenMail, onOpenShare }) => {
  const [display, setDisplay] = useState('none');

  const toggleDisplay = () => {
    setDisplay(prev => {
      if (prev === 'none') return 'flex';
      return 'none';
    });
  };

  const onClickHandle = e => {
    document.querySelectorAll('ul li').forEach(li => {
      li.classList.remove('on');
    });
    e.target.parentElement.classList.add('on');
  };
  const size = useWindowSize();
  return (
    <>
      <MenuWrapper ds={display}>
        <EmptyBox />

        <MobileUlWrapper className="gnb">
          <MobileMenuTitle>Gaza’s Child Read HOPE</MobileMenuTitle>
          <MobilLi data-menuanchor="section3">
            <AWrapperMobile
              href="#section3"
              onClick={() => {
                toggleDisplay();
              }}
            >
              응원메세지 보기
            </AWrapperMobile>
          </MobilLi>
          <MobilLi data-menuanchor="section4">
            <AWrapperMobile href="#section4" onClick={toggleDisplay}>
              응원메세지 남기기
            </AWrapperMobile>
          </MobilLi>
          <MobilLi data-menuanchor="section5">
            <AWrapperMobile href="#section5" onClick={toggleDisplay}>
              프로젝트 소개
            </AWrapperMobile>
          </MobilLi>
          <LangChanBox>
            <LangChanText>한국어/영어</LangChanText>
          </LangChanBox>
          <IconBoxMenu>
            <IconInMenu>
              <Image
                width={22}
                height={22}
                src={ShareIcon.src}
                alt="sharIcon"
              />
            </IconInMenu>
            <IconInMenu>
              <Image width={22} height={22} src={CallIcon.src} alt="CallIcon" />
            </IconInMenu>
          </IconBoxMenu>
        </MobileUlWrapper>
      </MenuWrapper>

      <HeaderWrapper ds={display}>
        <MenuInner className="gnb" sz={size.width}>
          {size.width >= 900 ? (
            <>
              <DesktopIconBox>
                <IconButton
                  onClick={onOpenShare}
                  colorScheme="black"
                  aria-label="Send email"
                  size="md"
                  icon={<CiShare1 size="md" />}
                />
                <IconButton
                  onClick={onOpenMail}
                  colorScheme="black"
                  aria-label="Send email"
                  size="md"
                  icon={<CiMail size="md" />}
                />
              </DesktopIconBox>
              <li data-menuanchor="section2">
                <MenuLink href="#section2" onClick={onClickHandle}>
                  프로젝트 설명
                </MenuLink>
              </li>
              <li data-menuanchor="section3">
                <MenuLink href="#section3" onClick={onClickHandle}>
                  응원 메세지 보기
                </MenuLink>
              </li>
              <li data-menuanchor="section4" style={{ marginRight: '50px' }}>
                <MenuLink href="#section4" onClick={onClickHandle}>
                  응원 메세지 남기기
                </MenuLink>
              </li>
              <li>English/한국어</li>
            </>
          ) : (
            <>
              <Box />
              <HamIcon
                onClick={() => {
                  toggleDisplay();
                }}
                aria-label="Menu"
                size="md"
                icon={
                  <CiMenuBurger
                    color={display === 'none' ? 'white' : 'black'}
                    size="md"
                  />
                }
              />
            </>
          )}
        </MenuInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
