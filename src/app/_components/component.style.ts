import styled from '@emotion/styled';
import { Box, Text, AccordionButton, AccordionPanel } from '@chakra-ui/react';

export const OneCommentWrapper = styled(Box)`
  border-radius: 13px;
  border: 1px solid #e2e2e2;
  background: #fff;
  box-shadow: 0px 2px 20.5px 0px rgba(160, 160, 160, 0.25);
  padding: 20px 22px 15px 22px;
  margin-bottom: 10px; // 여기에 추가
`;

export const NickName = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  line-height: 165%;
  margin-right: 10px;
`;
export const OneCommentHeaderRight = styled(Box)`
  display: flex;
  gap: 7px;
  align-items: center;
`;

export const OneCommentHeaderLeft = styled(Box)`
  color: #000;
  font-family: 'NanumSquareNeo';
  font-style: normal;
  display: flex;
`;
export const Date = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 180%;
`;

export const Report = styled(Text)`
  color: #676767;
  font-family: 'NanumSquareNeo';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 19.8px */
  text-decoration-line: underline;
`;

export const OneCommentContent = styled(Box)`
  color: #000;
  text-align: left;
  font-family: 'NanumSquareNeo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`;

export const OneCommentHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const LikeCountText = styled(Text)``;

export const ExplainButton = styled(AccordionButton)`
  padding: 22px 0px !important;
  background-color: #fff !important;
  border-radius: 13px;
  background: #fff;
  justify-content: center;
  &:hover: {
    background-color: #fff !important;
  }
`;

export const ExplainText = styled(Box)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 165%; /* 23.1px */
  margin-right: 10px;
`;

export const ArcdText = styled(AccordionPanel)`
  text-align: left;
`;
