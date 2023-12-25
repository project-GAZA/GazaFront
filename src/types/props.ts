import { Dispatch, SetStateAction } from 'react';
import {
  ShowCommentTextType,
  ModalTextType,
  InputSectionTextType,
  MessageType,
} from './data';

export interface HeaderPropsType {
  onOpenShare(): void;
}

export interface MobileNavPropsType {
  onOpenShare(): void;
  isMobileNavShow: boolean;
  setIsMobileNavShow(): void;
  activeSection: string | undefined;
}

export interface CommentPropType {
  onClose: () => void;
  mode?: string;
  setSaveInfo?: Dispatch<
    SetStateAction<{
      content: string;
      username: string;
    }>
  >;
  setPage?: Dispatch<SetStateAction<number>>;
  ModalText: ModalTextType;
  fetchMessage?: any;
}

export interface DonateModalPropType {
  onClose: () => void;
  ModalText: ModalTextType;
  fetchAndSetMessage: (sort: string) => Promise<void>;
}

export interface RegistModalPropType {
  onClose: () => void;
  saveInfo: {
    content: string;
    username: string;
  };
  ModalText: ModalTextType;
  fetchAndSetMessage: any;
}

export interface ShowCommentPropType {
  messages?: Array<MessageType>;
  fetchMessage?: any;
  ShowCommentText: ShowCommentTextType;
}

export interface InputSectionPropType {
  fetchMessage: any;
  InputSectionText: InputSectionTextType;
}
