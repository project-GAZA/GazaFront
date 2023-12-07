import styled from '@emotion/styled';
import { Box, Text } from '@chakra-ui/react';

export const OneCommentWrapper = styled(Box)`
  border-radius: 13px;
  border: 1px solid #e2e2e2;
  background: #fff;
  box-shadow: 0px 2px 20.5px 0px rgba(160, 160, 160, 0.25);
  padding: 20px 22px 15px 22px;
`;
export const NickName = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  line-height: 165%;
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
