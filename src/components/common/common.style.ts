import styled from '@emotion/styled';
import { IconButton, Box, Text } from '@chakra-ui/react';

export const MenuLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: -0.3px;
  padding: 7px 16px;
  border-radius: 16px;
  .on {
    -webkit-transition: background 0.25s linear;
    -o-transition: background 0.25s linear;
    transition: background 0.25s linear;
    background-color: black;
  }
  .on.MobilLi {
    -webkit-transition: background 0.25s linear;
    -o-transition: background 0.25s linear;
    transition: background 0.25s linear;
    color: white;
    border-radius: 37px;
    border: 1px solid #000;
    background: #000;
  }
`;

export const HeaderWrapper = styled(Box)<{ ds: string }>`
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

export const EmptyBox = styled(Box)`
  width: 107px;
  border-right: 1px solid black;
}
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
  background: none !important;
`;

export const MobilLi = styled.li`
  margin-bottom: 27px;
`;
export const LangChanBox = styled(Box)`
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
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuInner = styled.ul<{ sz: number }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.sz >= 900 ? 'center' : 'space-between')};
  ${props => props.sz < 900 && 'padding:0px 20px;'}
  gap: 10px;
  color: gray;
  width: 100vw;
`;

export const MenuWrapper = styled.div<{ ds: string }>`
  display: ${props => props.ds};
  z-index: 999;
  position: fixed;
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
  padding-left: 10px;
`;

export const DesktopIconBox = styled(Box)`
  display: flex;
  gap: 20px;
`;
