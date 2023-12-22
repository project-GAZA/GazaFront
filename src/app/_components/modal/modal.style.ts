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

const Modal = {
  RegistSubmitButton: styled(Button)`
    height: 47px;
    border-radius: 37px;
    background: #ffc500 !important;
    color: black;
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 700;

    font-size: 15px;
    margin: 14px 73px 0 73px;
    width: calc(100% - 146px) !important;

    @media (max-width: 890px) {
      margin: 14px 50px 0 50px;
      width: calc(100% - 100px) !important;
      font-size: 13px;
    }
  `,
  RegistCloseIcon: styled(ModalCloseButton)`
    top: 50px;
    right: 20px;
    width: 12px;
    height: 12px;
    @media (min-width: 890px) {
      top: 55px;
      right: 40px;
    }
  `,
  RegistInput: styled(Input)`
    font-family: 'NanumSquareNeo';
    font-size: 12px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 165%;

    height: 40px !important;
    flex-shrink: 0 !important;
    border: 1px solid #cacaca !important;
    background: #fff !important;
  `,
  RegistInputLabel: styled.label`
    color: #676767;
    text-align: center;
    font-family: NanumSquareNeo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    @media (max-width: 890px) {
      font-size: 11px;
    }
  `,
  RegistInputBox: styled(Box)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 60px;
    align-items: center;
  `,
  RegistInfoText: styled(Text)`
    color: #dc0000;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    font-family: 'NanumSquareNeo';
    margin: 30px auto;
    @media (max-width: 890px) {
      font-size: 9px;
      margin: 10px auto;
    }
  `,
  RegistHeaderText: styled(Text)`
    color: #000;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 165%;
    @media (min-width: 890px) {
      font-size: 22px;
    }
  `,
  RegistModalWrapper: styled(ModalContent)`
    width: 60% !important;
    min-width: 315px;
    max-width: 540px;
    border-radius: 34px;
    box-shadow: 0px 0px 27.3px 0px rgba(90, 90, 90, 0.25);
    padding-bottom: 20px;
    @media (max-width: 890px) {
      width: 81% !important;
    }
  `,

  CommentModalWrapper: styled(ModalContent)`
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
  `,

  DonateModalWrapper: styled(ModalContent)`
    width: 690px;
    margin: 0 auto;
    padding-bottom: 20px;
    max-width: inherit;
    border-radius: 34px !important;
    background: #fff !important;
    box-shadow: 0px 0px 27.3px 0px rgba(90, 90, 90, 0.25) !important;

    @media (max-width: 890px) {
      width: 81% !important;
    }
  `,

  CommentModalHeader: styled(ModalHeader)`
    margin-top: 44px;
    padding: 0px !important;
    display: flex;
    justify-content: center;
  `,

  CommentModalHeaderText: styled(Text)`
    color: #000;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 165%;
    @media (min-width: 890px) {
      font-size: 25px;
    }
  `,

  ModalCloseIcon: styled(ModalCloseButton)`
    top: 50px;
    right: 40px;
    width: 12px;
    height: 12px;
    @media (min-width: 890px) {
      top: 60px;
    }
  `,
  CommentModalInput: styled(Textarea)`
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
  `,

  CommentModalBody: styled(ModalBody)`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  ModalCommentAlertText: styled(Text)`
    margin-top: 17px;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 200%;
  `,

  CommentModalInputNickname: styled(Input)`
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
  `,

  CommentModalSubmit: styled(Button)`
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
  `,

  DonateModalHeader: styled(Box)`
    margin-top: 44px;
    padding: 0px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  DonateSubText: styled(Text)`
    color: #565656;
    text-align: center;
    font-family: 'NanumSquareNeo';
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 250%;
    padding: 0 40px;
    @media (min-width: 890px) {
      font-size: 12px;
    }
    & strong {
      color: red;
    }
  `,

  DonateModalLinkBox: styled(Box)`
    background: #1f4ef5;
    cursor: pointer;
    width: 70%;
    height: 50px;
    border: 1px solid #d1d1d1;
    border-radius: 37px;
    margin: 0 auto;
    color: #fff;

    font-family: NanumSquareNeo;
    font-size: 17px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 890px) {
      font-size: 12px;
    }
  `,

  DonateModalSubmit: styled(Button)`
    color: black !important;
    margin: 14px 73px 40px 73px;
    width: calc(100% - 146px) !important;
    height: 47px !important;
    flex-shrink: 0;
    border-radius: 37px !important;
    background: #ffc500 !important;
  `,

  DonateExplainBox: styled(Box)`
    margin: 60px 10px 0 10px;
    padding: 58px 10px 10px 10px;
    background: #b7b7b7;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 890px) {
      padding-top: 0px;
      grid-template-columns: 1fr;
      height: 370px;
      overflow: scroll;
    }
  `,
  DonateExplainText: styled(Text)`
    color: #fff;
    text-align: center;
    font-family: NanumSquareNeo;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 165%;
  `,
  DonateExplainMoney: styled(Box)`
    width: 200px;
    text-align: center;
    margin: 0 auto;
  `,

  ShareURLButton: styled(Button)`
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
  `,

  TextURL: styled(Text)`
    color: #5e5e5e;
    text-align: center;
    font-family: NanumSquareNeo;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: 165%; /* 21.45px */
    margin-right: 9px;
  `,

  ShareModalWrapper: styled(ModalContent)`
    width: 315px !important;
    margin: 0 auto;
    border-radius: 34px !important;
    background: #fff !important;
    box-shadow: 0px 0px 27.3px 0px rgba(90, 90, 90, 0.25) !important;
  `,

  ShareIconBox: styled(Box)`
    cursor: pointer;
    width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  `,

  IconText: styled(Text)`
    color: #373737;

    text-align: center;
    font-family: NanumSquareNeo;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 165%; /* 21.45px */
  `,

  ShareModalBody: styled(ModalBody)`
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  `,

  SendMailBody: styled(ModalBody)`
    margin: 133px 5px 133px 5px;
  `,
};

export default Modal;
