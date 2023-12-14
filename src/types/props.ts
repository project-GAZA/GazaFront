import { Dispatch, SetStateAction } from 'react';
import { MessageType } from './data';

export interface HeaderPropsType {
  onOpenMail(): void;
  onOpenShare(): void;
}

export interface MobileNavPropsType {
  onOpenMail(): void;
  onOpenShare(): void;
  isMobileNavShow: boolean;
  setIsMobileNavShow(): void;
  activeSection: string;
}

export interface CommentModalPropType {
  onClose: () => void;
  onSubmitForm?: (content: string, username: string) => void;
  mode?: string;
  setSaveInfo?: Dispatch<
    SetStateAction<{
      content: string;
      username: string;
    }>
  >;
  setPage?: Dispatch<SetStateAction<number>>;
}

export interface DonateModalPropType {
  onClose: () => void;
  onSubmitMessage?: (content: string, username: string) => void;
}

export interface ShowCommentPropType {
  messages?: Array<MessageType>;
  setSort: Dispatch<SetStateAction<string>>;
  fetchSearch: (username: string, size: number, page: number) => Promise<void>;
  fetchMessage?: (sort: string) => Promise<void>;
}

export interface InputSectionPropType {
  fetchMessage: (sort: string) => Promise<void>;
  sort: string;
  InputSectionText?: {
    topMessage: string;
    topeMessage2: string;
    topMessageInBox: string;
    CheerMessage: string;
    CheerMessageInfo: string;
    CheerMessageGo: string;
    DonateMessage: string;
    DonateMessageInfo: string;
    DonateMessageGo: string;
  };
}
