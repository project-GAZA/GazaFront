import React, { useState } from 'react';
import styles from './index.module.scss';

interface InputType {
  content: string;
  changeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MessageInput = ({ content, changeContent }: InputType) => {
  return (
    <div>
      <textarea
        className={styles.layout}
        rows={4}
        value={content}
        placeholder="응원메세지를 입력해주세요."
      />
      <p className={styles.infoTypo}>
        나쁜 말은 피하고, 따뜻한 말로 마음을 전해주세요.
        <br />
        (부적절한 내용은 삭제될 수 있습니다.)
      </p>
    </div>
  );
};

export default MessageInput;
