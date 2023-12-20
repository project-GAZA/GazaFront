import styled from '@emotion/styled';
import Image from 'next/image';

import {
  Stack,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Divider,
  Button,
} from '@chakra-ui/react';

export const DividerLine = styled(Divider)`
  height: 17px;
`;

export const ThirdSection = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  padding: 80px 0px 80px 0px;
  height: 100vh;
  @media (min-width: 890px) {
    padding: 92px 0px 80px 0px;
  }
`;

export const TitleBox = styled(Box)``;

export const ThirdHeaderText = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%;
  margin-bottom: 30px;
`;

export const ThirdHeaderTextStrong = styled.strong`
  font-size: 16px;
`;

export const CommentWrapper = styled(Box)`
  margin-top: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CommentHeader = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CommentSortButton = styled(Box)`
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
  &.SortOn {
    color: #ffc500;
    font-weight: 900;
  }
`;

export const Search = styled(InputGroup)`
  width: 50% !important;
  border-radius: 37px;
  border: 1px solid #fff;
  color: #fff;
`;

export const SearchInput = styled(Input)`
  padding: 5px 5px 5px 5px;
  margin-left: 10px;
`;

export const SearchIcon = styled(InputRightElement)`
  top: -4px !important;
`;

export const ShowCommentWrapper = styled(Stack)`
  max-height: calc(102.35vh - 275px);
  overflow-y: auto;
  margin-top: 30px;
  padding: 16px;
  @media (max-width: 890px) {
    max-height: calc(99.85vh - 275px);
  }
`;

export const GazaFullComponent = styled(Box)<{
  percentage: number;
  bgsrc: string;
}>`
  position: relative;
  clip-path: inset(${props => props.percentage}% 0px 0px);
  transition: 3s clip-path ease-in;
  background-image: url('${props => props.bgsrc}');
  background-size: contain;
  background-repeat: no-repeat;
  width: 241.73px;
  height: 348.717px;
  flex-shrink: 0;
  @media (min-width: 890px) {
    width: 281.73px;
    height: 388.717px;
  }
`;

export const EarthTextWrapper = styled(Box)`
  border-radius: 37px;
  border: 1px solid #000;
  width: fit-content;
  padding: 0 10px 5px 10px;
  position: relative;
`;
export const SecondSection = styled(Box)`
  padding: 0 0 100px 0;
  background-size: 1000%;
  background-position: 65% 50%;
  padding: 100px 0 100px 0;
`;

export const SecondTopText = styled(Text)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%;
`;

export const SecondExplainText = styled(Text)`
  margin-top: 23px;
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  & .redstrong {
    color: #dc0000;
  }
`;

export const EarthWrapper = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  background-size: 260px 260px;
  width: 260px;
  height: 260px;
  margin: 42px auto 0 auto;
`;

export const Pin = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  background-size: 56px 74px;
  width: 56px;
  height: 74px;
  position: relative;
  top: 24px;
  left: 119px;
`;
export const PinShadow = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  background-size: 15px 5px;
  width: 15px;
  height: 5px;
  position: relative;
  top: 24px;
  left: 139px;
`;
export const EarthText = styled(Text)`
  display: inline;
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 165%;
`;

export const FirstSction = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 890px) {
    margin-top: 90px;
    flex-direction: row;
    gap: 106px;
    height: 618px;
  }
`;

export const ShowGazaMapTitleFontOne = styled(Text)`
  position: relative;
  color: #fff;
  font-family: 'Paytone One', sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.828%;
  z-index: 2;
  @media (min-width: 890px) {
    margin: 0;
    font-size: 80px;
  }
`;

export const Two = styled.strong`
  color: #ffc500;
`;

export const Section1Header = styled(Box)`
  padding-top: 45px;
  text-align: center;
`;

export const SubTitle = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 215%;
  @media (min-width: 890px) {
    margin: 0;
    font-size: 25px;
  }
`;

export const GazaEmpty = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  background-size: contain;
  background-repeat: no-repeat;
  width: 221.73px;
  height: 328.717px;
  flex-shrink: 0;
  @media (min-width: 890px) {
    width: 281.73px;
    height: 388.717px;
  }
`;

export const GoalTextBox = styled(Box)``;
export const GoalText = styled(Text)`
  color: #ffc500;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 165%; /* 39.6px */
`;

export const GoalFixedText = styled.strong`
  font-size: 15px;
`;

export const SectionOneFooter = styled(Box)`
  position: relative;
  left: 42px;
  top: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const RealGoalText = styled(Text)`
  color: rgba(255, 255, 255, 0.71);
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
`;

export const RealGoalMoney = styled(Box)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
`;

export const MessageIconInTitle = styled(Image)`
  z-index: 1;
  position: relative;
  top: -108px;
  left: 290px;
`;

export const ExplainFooterText = styled(Text)`
  color: #8f8f8f;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%; /* 18.15px */
`;

export const ExplainSectionWrapper = styled(Box)`
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
`;
export const ExplainTitleText = styled(Text)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%; /* 33px */
`;

export const ExplainWrapper = styled(Box)`
  margin: 33px 15px 0 15px;
  & .chakra-accordion {
    border: none;
  }
  & .chakra-accordion__item {
    border: none;
    border-radius: 13px;
    background: #fff;
    margin-bottom: 10px;
  }
`;

export const SNSIconBox = styled(Box)`
  display: flex;
  gap: 10px;
  margin: 38px auto 18px auto;
`;

export const InputWrapper = styled(Box)`
  padding-top: 70px;
  padding-bottom: 40px;
  /*
  overflow: auto;
  max-height: 100vh;
  */
`;

export const InputTopMessage = styled(Text)`
  margin-top: 10px;
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
`;

export const InputTopMessage2 = styled(Text)`
  margin-top: 10px;
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%; /* 33px */
`;

export const InputMessageWrapper = styled(Box)`
  margin: 0 auto;
  width: 352px;
  height: 523px;
  flex-shrink: 0;
  border-radius: 46px;
  padding-top: 42px;
  margin-top: 30px;
  text-align: center;
  @media (min-width: 890px) {
    margin: 0;
  }
`;

export const TopMessageInbox = styled(Text)`
  color: #fff;
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%; /* 24.75px */
`;

export const SecondMessageInbox = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 26px;
  font-style: normal;
  font-weight: 800;
  line-height: 165%; /* 42.9px */
`;

export const IconCheerBox = styled(Image)`
  margin: 15px auto 0px auto;
`;

export const ComeCheerBox = styled(Box)`
  width: 215px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 12px;
  margin: 31px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComeCheerText = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 21.45px */
`;

export const CommentInputButton = styled(Button)`
  margin-top: 16px;
  width: 197px;
  height: 55px !important;
  flex-shrink: 0 !important;
  border-radius: 37px !important;
  background: #fff;
`;

export const CommentInputText = styled(Text)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 165%; /* 26.4px */
`;

export const ValuableBox = styled(Box)`
  position: relative;
  top: -220px;
  left: 60px;
`;

// JANG: 23.12.13 (후원금 내역 업데이트 임시 공지)
export const MoneyUpdateTextTemp = styled(Box)`
  color: red;
  font-size: 10px;
  position: relative;
  text-align: center;
  left: 70px;
  top: -50px;
  @media (max-width: 890px) {
    bottom: 20%;
  }
`;

export const MapWrapper = styled(Box)`
  @media (min-width: 890px) {
    padding-top: 80px;
  }
`;

export const MessageBoxWrapper = styled.div`
  @media (min-width: 890px) {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const StyledScrollbar = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  padding-right: 10px; // 여기에 추가

  ::-webkit-scrollbar {
    width: 13px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(
      to right,
      transparent,
      transparent calc(50% - 0.75px),
      #ffffff8a calc(50% - 0.75px),
      #ffffff8a calc(50% + 0.75px),
      transparent calc(50% + 0.75px),
      transparent
    );
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: #ffffff #ffffff8a;
`;
