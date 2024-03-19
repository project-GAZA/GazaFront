import React from 'react';
import Image from 'next/image';
import SendIcon from '@public/assets/svg/sendicon.svg';
import styles from './index.module.scss';

export interface InputCommentType {
  placeholder: string;
  onSubmit: (e: any) => void;
}

const InputComment = ({ placeholder, onSubmit }: InputCommentType) => {
  return (
    <form className={styles.inputCommentLayout} onSubmit={onSubmit}>
      <input placeholder={placeholder} />
      <button type="submit">
        <Image
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
