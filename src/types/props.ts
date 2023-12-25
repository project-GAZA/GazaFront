import { Dispatch, SetStateAction } from 'react';
import { ModalTextType, InputSectionTextType, MessageType } from './data';

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
  onSubmitForm?: (content: string, username: string) => void;
  mode?: string;
  setSaveInfo?: Dispatch<
    SetStateAction<{
      content: string;
      username: string;
    }>
  >;
  setPage?: Dispatch<SetStateAction<number>>;
  ModalText: ModalTextType;
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
  fetchAndSetMessage: (sort: string) => Promise<void>;
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
  InputSectionText: InputSectionTextType;
}
