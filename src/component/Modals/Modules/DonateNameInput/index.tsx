import React, { useState } from 'react';
import Input from '@/component/Modals/Attom/Input';
import Title from '@/component/Modals/Attom/Title';
import styles from './index.module.scss';

const DonateNameInput = () => {
  const [nick, setNick] = useState('');
  return (
    <div className={styles.layout}>
      <Title
        textAlign="left"
        color="black"
        fontSize={16}
        title="어떤 이름으로 송금하셨나요?"
      />
      <Input nickName={nick} changeNickName={e => setNick(e.target.value)} />
    </div>
  );
};

export default DonateNameInput;
