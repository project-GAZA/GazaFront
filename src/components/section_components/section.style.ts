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
} from '@chakra-ui/react';

export const DividerLine = styled(Divider)`
  height: 17px;
`;

export const ThirdSection = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  height: 100vh;
`;

export const TitleBox = styled(Box)`
  padding-top: 56px;
`;

export const ThirdHeaderText = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%;
`;

export const ThirdHeaderTextStrong = styled.strong`
  font-size: 16px;
`;

export const CommentWrapper = styled(Box)`
  margin-top: 30px;
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
  max-height: 70vh;
  overflow-y: auto;
  margin-top: 30px;
  padding: 16px;
`;

export const GazaFullComponent = styled(Box)<{
  percentage: string;
  bgsrc: string;
}>`
  position: relative;
  clip-path: inset(${props => props.percentage}% 0px 0px);
  transition: 3s clip-path ease-in;
  background-image: url('${props => props.bgsrc}');
  background-size: contain;
  background-repeat: no-repeat;
  width: 221.73px;
  height: 328.717px;
  flex-shrink: 0;
`;

export const EarthTextWrapper = styled(Box)`
  border-radius: 37px;
  border: 1px solid #000;
  width: fit-content;
  padding: 0 10px 5px 10px;
  position: relative;
`;
export const SecondSection = styled(Box)`
  padding: 100px 0 100px 0;
  &.mobile {
    background-size: 1000%;
    background-position: 65% 50%;
  }
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
  @media (min-width: 824px) {
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
`;

export const Two = styled.strong`
  color: #ffc500;
`;

export const Section1Header = styled(Box)`
  padding-top: 45px;
`;

export const SubTitle = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 215%;
`;

export const GazaEmpty = styled(Box)<{ bgsrc: string }>`
  background-image: url('${props => props.bgsrc}');
  background-size: contain;
  background-repeat: no-repeat;
  width: 221.73px;
  height: 328.717px;
  flex-shrink: 0;
`;

export const GoalTextBox = styled(Box)`
  position: relative;
  top: -200px;
  left: 60px;
`;
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
  margin-top: -100px;
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
