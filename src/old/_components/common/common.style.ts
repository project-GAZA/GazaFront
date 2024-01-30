import styled from '@emotion/styled';
import { IconButton, Box, Text } from '@chakra-ui/react';

const Common = {
  MenuLink: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '18px',
    letterSpacing: '-0.3px',
    padding: '7px 16px',
    borderRadius: '16px',
  },
  AWrapperMobile: {
    textAlign: 'center' as const,
    fontFamily: 'NanumSquareNeo',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '165%',
    marginBottom: '27px',
  },

  HeaderWrapper: styled(Box)`
    position: fixed;
    z-index: 99999;

    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-transition: background 0.1s linear;
    transition: background 0.1s linear;

    @media (min-width: 890px) {
      padding: 0 calc((100vw - 1200px) / 2);
      height: 92px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
    }
  `,

  EmptyBox: styled(Box)`
    width: 107px;
    border-right: 1px solid black;
  `,

  MobileMenuTitle: styled(Text)`
    color: #000;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 22px;
    font-style: normal;
    font-weight: 900;
    line-height: 165%; /* 36.3px */
    margin-bottom: 45px;
  `,
  HamIcon: styled(IconButton)`
    position: fixed;
    top: 15px;
    right: 24px;
    background: none !important;
    @media (min-width: 890px) {
      display: none;
      top: 24px;
    }
  `,

  MobilLi: styled.li`
    margin-bottom: 27px;
    cursor: pointer;
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
    &:first-child {
      pointer-events: none; // Disable pointer events for the first li
    }
  `,

  LangChanBox: styled(Box)`
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
  `,
  LangChanText: styled(Text)`
    color: #6c6c6c;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 165%;
  `,

  IconBoxMenu: styled(Box)`
    display: flex;
    gap: 11px;
    position: absolute;
    left: 168px;
    bottom: 60px;
  `,
  IconInMenu: styled(Box)`
    cursor: pointer;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  ChangeLanguageButton: styled.button`
    @media (max-width: 890px) {
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
  `,

  MenuInner: styled.ul`
    @media (max-width: 890px) {
      display: none;
    }
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  MenuList: styled.li`
    cursor: pointer;
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
  `,

  MenuWrapper: styled.div<{ isOpen: boolean }>`
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
  `,

  MobileUlWrapper: styled.ul`
    list-style: none;
    padding-top: 80px;
    padding-left: 30px;
  `,

  IconBox: styled(Box)`
    @media (max-width: 890px) {
      display: none;
    }
    margin-left: 20px;
    display: flex;
    gap: 11px;
  `,
  SectionWrapper: styled(Box)`
    height: 102vh;
    @media (max-width: 890px) {
      height: inherit;
    }
  `,
  LastSectionWrapper: styled(Box)`
    max-width: 900px;
    margin: 0 auto;
    @media (max-width: 890px) {
      height: inherit;
    }
  `,
  LastSectionBackgroundWrapper: styled(Box)`
    background: #f5f5f5;
  `,
};

export default Common;
