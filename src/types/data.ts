export interface MessageType {
  messageId: number;
  content: string;
  createDt: string;
  username: string;
  likeCount: number;
  cautionCount: number;
  donateType: string;
}
export interface ExplainType {
  title: string;
  content: string;
}

export interface InputSectionTextType {
  topMessage: string;
  topeMessage2: string;
  topMessageInBox: string;
  CheerMessage: string;
  CheerMessageInfo: string;
  CheerMessageGo: string;
  DonateMessage: string;
  DonateMessageInfo: string;
  DonateMessageGo: string;
  ModalText: ModalTextType;
}

export interface ModalTextType {
  CommentHeader: string;
  CommentInfoText: string;
  CommentInputPlaceholder: string;
  CommentInputNickPlaceholder: string;
  CommentButtonText: string;
  DonateCommentButtonText: string;
  RegistHeaderText: string;
  RegistInfoText: string;
  RegistButtonText: string;
  RegistPhonePlaceHolder: string;
  RegistPhoneLabel: string;
  RegistTossLabel: string;
  RegistTossPlaceHolder: string;
}
export interface ExplainSectionType {
  title: string;
  footerText: string;
}
export interface ShowInfoType {
  TopText: string;
  WordCloud: Array<string>;
  ExplainText: string;
}

export interface ServiceLanguage {
  InputSectionText: InputSectionTextType;
  Explain: Array<ExplainType>;
  ExplainSection: ExplainSectionType;
  ShowInfo: ShowInfoType;
}

export interface CustomToast {
  createAlertMessaeg: (message: string) => void;
}
