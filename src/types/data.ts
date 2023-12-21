export interface MessageType {
  messageId: number;
  content: string;
  createDt: string;
  username: string;
  likeCount: number;
  cautionCount: number;
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
}
