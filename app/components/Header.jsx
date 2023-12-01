'use client';

import styled from '@emotion/styled';
import { IconButton, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { CiShare1, CiMail, CiMenuBurger } from 'react-icons/ci';
import useWindowSize from '../hooks/useWindowSize';
import { useState } from 'react';
import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

const MenuInner = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.sz >= 900 ? 'center' : 'space-between')};
  ${props => props.sz < 900 && 'padding:0px 20px;'}
  gap: 10px;
  color: gray;
  width: 100vw;
`;
const HeaderWrapper = styled(Box)`
  z-index: 1000;
  ${props => props.ds === 'none' && `backdrop-filter: blur(15px)`};
  height: 58px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 12px 0px;
`;

const MenuWrapper = styled.div`
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
      else return 'none';
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
        <Box className="EmptyBox" />

        <MobileUlWrapper className="gnb">
          <Text className="MobileMenuTitle">Gaza’s Child Read HOPE</Text>
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
                <a href="#section2" onClick={onClickHandle}>
                  프로젝트 설명
                </a>
              </li>
              <li data-menuanchor="section3">
                <a href="#section3" onClick={onClickHandle}>
                  응원 메세지 보기
                </a>
              </li>
              <li data-menuanchor="section4" style={{ marginRight: '50px' }}>
                <a href="#section4" onClick={onClickHandle}>
                  응원 메세지 남기기
                </a>
              </li>
              <li>English/한국어</li>
            </>
          ) : (
            <>
              <Box />
              <IconButton
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
