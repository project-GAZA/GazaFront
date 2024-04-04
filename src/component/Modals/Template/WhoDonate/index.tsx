import React, { useState, useEffect } from 'react';
import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateNameInput from '@/component/Modals/Modules/DonateNameInput';
import DonateContent from '@/component/Modals/Modules/DonateContent';

import styles from './index.module.scss';

const WhoDonate = () => {
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

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
      <div className={styles.inputCont}>
        <DonateNameInput />
      </div>
      <div className={styles.buttonCont}>
        <SmallButton disabled theme="black">
          후원자 등록하기
        </SmallButton>
      </div>
    </div>
  );
};

export default WhoDonate;
