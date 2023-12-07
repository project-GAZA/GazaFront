import styled from '@emotion/styled';
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
