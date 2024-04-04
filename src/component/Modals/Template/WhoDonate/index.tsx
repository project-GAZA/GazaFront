import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';

import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateNameInput from '@/component/Modals/Modules/DonateNameInput';
import DonateContent from '@/component/Modals/Modules/DonateContent';

import styles from './index.module.scss';

const WhoDonate = () => {
  const [nick, setNick] = useState('');
  const [animation, setAnimation] = useState<string>(styles.layout);
  const setModal = useSetRecoilState<string>(modalState);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`서버에 ${nick}을 제출합니다.`);
    setModal('complete');
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="light" />
      </div>
      <div className={styles.donateCont}>
        <DonateContent
          title="후원자님의 정보를 남겨주세요!"
          content="
        후원확인 후 후원자님의 메세지에
        특별한 표시를 남겨드립니다.
        "
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.inputCont}>
          <DonateNameInput nick={nick} setNick={setNick} />
        </div>
        <div className={styles.buttonCont}>
          <SmallButton type="submit" disabled={nick.length < 2} theme="black">
            후원자 등록하기
          </SmallButton>
        </div>
      </form>
    </div>
  );
};

export default WhoDonate;
