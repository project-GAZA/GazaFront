'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { IconButton, Box, Text } from '@chakra-ui/react';
import { CiShare1, CiMail, CiMenuBurger } from 'react-icons/ci';

import {
  MenuLink,
  HeaderWrapper,
  EmptyBox,
  MobileMenuTitle,
  HamIcon,
} from './style';

import useWindowSize from '@/hooks/useWindowSize';
import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

const MenuInner = styled.ul<{ sz: number }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.sz >= 900 ? 'center' : 'space-between')};
  ${props => props.sz < 900 && 'padding:0px 20px;'}
  gap: 10px;
  color: gray;
  width: 100vw;
`;

const MenuWrapper = styled.div<{ ds: string }>`
  display: ${props => props.ds};
  z-index: 999;
  position: fixed;
  height: calc(100vh);
  width: 100vw;
  overflow-y: auto;
  background-color: #fff;
`;

const AWrapperMobile = styled.a`
  color: #000;
  text-align: center;
  font-family: NanumSquareNeo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%; /* 29.7px */
  margin-bottom: 27px;
`;

const MobileUlWrapper = styled.ul`
  list-style: none;
  padding-top: 80px;
  padding-left: 10px;
`;

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
          <li className="MobilLi" data-menuanchor="section3">
            <AWrapperMobile
              href="#section3"
              onClick={() => {
                toggleDisplay();
              }}
            >
              응원메세지 보기
            </AWrapperMobile>
          </li>
          <li className="MobilLi" data-menuanchor="section4">
            <AWrapperMobile href="#section4" onClick={toggleDisplay}>
              응원메세지 남기기
            </AWrapperMobile>
          </li>
          <li className="MobilLi" data-menuanchor="section5">
            <AWrapperMobile href="#section5" onClick={toggleDisplay}>
              프로젝트 소개
            </AWrapperMobile>
          </li>
          <Box className="LangChanBox">
            <Text className="LangChanText">한국어/영어</Text>
          </Box>
          <Box className="IconBoxMenu">
            <Box className="IconInMenu">
              <Image
                width={22}
                height={22}
                src={ShareIcon.src}
                alt="sharIcon"
              />
            </Box>
            <Box className="IconInMenu">
              <Image width={22} height={22} src={CallIcon.src} alt="CallIcon" />
            </Box>
          </Box>
        </MobileUlWrapper>
      </MenuWrapper>

      <HeaderWrapper ds={display}>
        <MenuInner className="gnb" sz={size.width}>
          {size.width >= 900 ? (
            <>
              <Box sx={{ display: 'flex', gap: '20px' }}>
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
              </Box>
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
                className="HamIcon"
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
