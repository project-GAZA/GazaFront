import React, { useState } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-hot-toast';

import instance from '@/utils/clientaxios';
import GenerateNickName from '@/utils/randKakaoNick';
import { modalState } from '@/store/modalState';
import { messageState } from '@/store/postState';

import SendIcon from '@public/assets/svg/sendicon.svg';
import { MessageType } from '@/types/dataType';
import styles from './index.module.scss';

export interface InputCommentType {
  placeholder: string;
  setComments: React.Dispatch<MessageType[]>;
}

const InputComment = ({ placeholder, setComments }: InputCommentType) => {
  const setModal = useSetRecoilState(modalState);
  const setMessageState = useSetRecoilState(messageState);
  const [content, setContent] = useState('');
  const onSubmitForm = async e => {
    try {
      e.preventDefault();
      if (content.length === 0) {
        toast.error('메세지를 입력하세요!!');
        return;
      }
      const nick = GenerateNickName();
      const res = await instance.post('/message', { nick, content });
      setMessageState(res.data);

      toast.success('메세지 입력이 완료되었습니다.');
      const { data } = await instance.get<MessageType[]>(
        `/message?size=100&page=1&sort=time`,
      );
      setComments(data);
      setModal('cheer');
    } catch (_err) {
      toast.error('메세지 입력이 실패되었습니다. 관리자에게 문의해주세요');
    }
  };
  return (
    <form className={styles.inputCommentLayout} onSubmit={onSubmitForm}>
      <input
        placeholder={placeholder}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit">
        <Image
          priority
          style={{ verticalAlign: 'middle' }}
          width={32}
          height={32}
          alt="보내기버튼"
          src={SendIcon.src}
        />
      </button>
    </form>
  );
};

export default InputComment;
