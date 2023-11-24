'use client';

import styled from '@emotion/styled';
import '@/app/style/header.css';
import { IconButton, Box } from '@chakra-ui/react';
import { CiShare1, CiMail, CiMenuBurger } from 'react-icons/ci';
import useWindowSize from '../hooks/useWindowSize';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  height: 58px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 12px 0px;
`;

const MenuInner = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.sz >= 900 ? 'center' : 'space-between')};
  ${props => props.sz < 900 && 'padding:0px 20px;'}
  gap: 10px;
  color: white;
  width: 100vw;
`;

const MenuWrapper = styled.div`
  display: ${props => props.ds};
  z-index: 999;
  position: fixed;
  top: 58px;
  height: calc(100vh - 58px);
  width: 100vw;
  overflow-y: auto;
  background-color: #fff;
`;

const Header = ({ onOpen }) => {
  const [display, setDisplay] = useState('none');

  const toggleDisplay = () => {
    setDisplay(prev => {
      if (prev === 'none') return 'block';
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
        <>
          <li>
            <a
              href="#section2"
              onClick={() => {
                toggleDisplay();
              }}
            >
              프로젝트 설명
            </a>
          </li>
          <li>
            <a href="#section3" onClick={toggleDisplay}>
              응원 메세지 보기
            </a>
          </li>
          <li>
            <a href="#section4" onClick={toggleDisplay}>
              응원 메세지 남기기
            </a>
          </li>
        </>
      </MenuWrapper>

      <HeaderWrapper>
        <MenuInner className="gnb" sz={size.width}>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <IconButton
              onClick={onOpen}
              colorScheme="black"
              aria-label="Send email"
              size="md"
              icon={<CiShare1 size="md" />}
            />
            <IconButton
              onClick={onOpen}
              colorScheme="black"
              aria-label="Send email"
              size="md"
              icon={<CiMail size="md" />}
            />
          </Box>
          {size.width >= 900 ? (
            <>
              <li className="on" data-menuanchor="section2">
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
              <IconButton
                onClick={() => {
                  toggleDisplay();
                }}
                colorScheme="black"
                aria-label="Send email"
                size="md"
                icon={<CiMenuBurger size="md" />}
              />
            </>
          )}
        </MenuInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
