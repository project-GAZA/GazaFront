import styled from '@emotion/styled';
import { IconButton, Box, Text } from '@chakra-ui/react';

export const MenuLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: -0.3px;
  padding: 7px 16px;
  border-radius: 16px;
`;

export const HeaderWrapper = styled(Box)`
  position: fixed;
  z-index: 99999;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-transition: background 0.1s linear;
  transition: background 0.1s linear;

  @media (min-width: 820px) {
    padding: 0 calc((100vw - 1200px) / 2);
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
`;

export const EmptyBox = styled(Box)`
  width: 107px;
  border-right: 1px solid black;
`;

export const MobileMenuTitle = styled(Text)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%; /* 36.3px */
  margin-bottom: 45px;
`;
export const HamIcon = styled(IconButton)`
  position: fixed;
  top: 15px;
  right: 24px;
  background: none !important;
  @media (min-width: 820px) {
    display: none;
    top: 24px;
  }
`;

export const MobilLi = styled.li`
  margin-bottom: 27px;
  &.on > a {
    padding: 7px 26px 7px 26px;
    -webkit-transition: background 0.25s linear;
    -o-transition: background 0.25s linear;
    transition: background 0.25s linear;
    color: white;
    border-radius: 37px;
    border: 1px solid #000;
    background: #000;
  }
`;
export const LangChanBox = styled(Box)`
  cursor: pointer;
  position: absolute;
  left: 150px;
  bottom: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 37px;
  border: 1px solid #6c6c6c;
  width: 144px;
  height: 41px;
  flex-shrink: 0;
`;
export const LangChanText = styled(Text)`
  color: #6c6c6c;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 165%;
`;

export const IconBoxMenu = styled(Box)`
  display: flex;
  gap: 11px;
  position: absolute;
  left: 168px;
  bottom: 60px;
`;
export const IconInMenu = styled(Box)`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeLanguageButton = styled.button`
  @media (max-width: 820px) {
    display: none;
  }
  width: 193px;
  height: 41px;
  border-radius: 37px;
  border: 2px solid #6c6c6c;
  color: #757575;

  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`;

export const MenuInner = styled.ul`
  @media (max-width: 820px) {
    display: none;
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuList = styled.li`
  flex-shrink: 0;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  margin-right: 20px;

  &.on > a {
    -webkit-transition: background 0.25s linear;
    -o-transition: background 0.25s linear;
    transition: background 0.25s linear;
    background-color: black;
    color: white;
    border-radius: 37px;
    border: 1px solid #000;
    background: #000;
  }
`;

export const MenuWrapper = styled.div<{ isOpen: boolean }>`
  ${props => props.isOpen === false && 'display:none;'}
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')}; // 왼쪽으로 이동시킴
  transition: left 0.3s ease; // 애니메이션 효과 추가
  height: calc(100vh);
  width: 100vw;
  overflow-y: auto;
  background-color: #fff;
`;

export const AWrapperMobile = styled.a`
  color: #000;
  text-align: center;
  font-family: NanumSquareNeo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%; /* 29.7px */
  margin-bottom: 27px;
`;
export const MobileUlWrapper = styled.ul`
  list-style: none;
  padding-top: 80px;
  padding-left: 30px;
`;

export const IconBox = styled(Box)`
  @media (max-width: 820px) {
    display: none;
  }
  display: flex;
  gap: 11px;
`;
