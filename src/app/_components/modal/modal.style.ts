import {
  Box,
  ModalContent,
  ModalHeader,
  Text,
  ModalCloseButton,
  Textarea,
  ModalBody,
  Input,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CommentModalWrapper = styled(ModalContent)`
  width: 60% !important;
  min-width: 315px;
  max-width: 540px;
  height: 566px;
  margin: 0 auto;
  border-radius: 34px !important;
  background: #fff !important;
  box-shadow: 0px 0px 27.3px 0px rgba(90, 90, 90, 0.25) !important;
  @media (max-width: 890px) {
    width: 81% !important;
  }
`;

export const CommentModalHeader = styled(ModalHeader)`
  margin-top: 44px;
  padding: 0px !important;
  display: flex;
  justify-content: center;
`;

export const CommentModalHeaderText = styled(Text)`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 165%;
`;

export const ModalCloseIcon = styled(ModalCloseButton)`
  top: 20px;
  right: 20px;
  width: 12px;
  height: 12px;
`;
export const CommentModalInput = styled(Textarea)`
  margin: 0 auto;
  font-family: 'NanumSquareNeo';
  font-size: 13px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
  padding: 18px !important;
  background: #f3f3f3 !important;
  min-width: 253px !important;
  width: 80%;
  height: 222px !important;
  flex-shrink: 0;
`;

export const CommentModalBody = styled(ModalBody)`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalCommentAlertText = styled(Text)`
  margin-top: 17px;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
`;

export const CommentModalInputNickname = styled(Input)`
  font-family: 'NanumSquareNeo';
  font-size: 12px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;

  margin: 35px 66px 0 66px;
  width: calc(100% - 132px) !important;
  height: 40px !important;
  flex-shrink: 0 !important;
  border: 1px solid #cacaca !important;
  background: #fff !important;
`;

export const CommentModalSubmit = styled(Button)`
  margin: 14px 73px 0 73px;
  width: calc(100% - 146px) !important;
  height: 47px;
  flex-shrink: 0;
  border-radius: 37px !important;
  background: #ffc500 !important;
  color: black;
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
`;

export const DonateModalHeader = styled(Box)`
  margin-top: 44px;
  padding: 0px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DonateSubText = styled(Text)`
  color: #565656;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
  padding: 0 40px;
`;

export const DonateModalLinkBox = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 42px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  margin: 0 auto;
`;

export const DonateModalSubmit = styled(Button)`
  color: black !important;
  margin: 14px 73px 40px 73px;
  width: calc(100% - 146px) !important;
  height: 47px !important;
  flex-shrink: 0;
  border-radius: 37px !important;
  background: #ffc500 !important;
`;

export const DonateExplainBox = styled(Box)`
  margin: 60px auto 0 auto;
  width: 95%;
  color: #757575;
  text-align: left;
  font-family: 'NanumSquareNeo';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
export const ShareURLButton = styled(Button)`
  margin: 14px 40px 34px 40px;
  width: calc(100% - 80px) !important;
  height: 58px;
  flex-shrink: 0;
  border-radius: 9px;
  background: #eee;
  display: flex;
  justify-content: center;
  &:hover {
    background: #eee;
  }
`;

export const TextURL = styled(Text)`
  color: #5e5e5e;
  text-align: center;
  font-family: NanumSquareNeo;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: 165%; /* 21.45px */
  margin-right: 9px;
`;

export const ShareModalWrapper = styled(ModalContent)`
  width: 315px !important;
  margin: 0 auto;
  border-radius: 34px !important;
  background: #fff !important;
  box-shadow: 0px 0px 27.3px 0px rgba(90, 90, 90, 0.25) !important;
`;

export const ShareIconBox = styled(Box)`
  cursor: pointer;
  width: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const IconText = styled(Text)`
  color: #373737;

  text-align: center;
  font-family: NanumSquareNeo;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%; /* 21.45px */
`;

export const ShareModalBody = styled(ModalBody)`
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

export const SendMailBody = styled(ModalBody)`
  margin: 133px 5px 133px 5px;
`;
