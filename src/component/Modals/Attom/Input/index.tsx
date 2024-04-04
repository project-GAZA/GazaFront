import React, { useState } from 'react';
import styles from './index.module.scss';

interface InputType {
  nickName: string;
  changeNickName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ nickName, changeNickName }: InputType) => {
  return (
    <div>
      <input
        className={styles.layout}
        type="text"
        value={nickName}
        onChange={changeNickName}
        placeholder="토스 송금아이디"
      />
      <p
        style={{ color: nickName.length < 2 ? 'red' : 'white' }}
        className={styles.errormessage}
      >
        두글자 이상 입력해주세요
      </p>
    </div>
  );
};

export default Input;
