import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';

import CloseButton from '@/component/Modals/Attom/CloseButton';
import CheerTop from '@/component/Modals/Modules/CheerTop';
import Content from '@/component/Modals/Attom/Content';
import Buttons from '@/component/Modals/Modules/Buttons';

import Image from 'next/image';
import HandHeart from '@public/assets/svg/HandHeart.svg';
import styles from './index.module.scss';

const CheerPopup = () => {
  const setModal = useSetRecoilState<string>(modalState);
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onClickTossLick = (): void => {
    // window.open('https://toss.me/peacegaza');
    setModal('who');
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="dark" />
      </div>
      <div className={styles.topCont}>
        <CheerTop />
      </div>
      <div className={styles.icon}>
        <Image src={HandHeart.src} alt="손하트" width={141} height={134} />
      </div>
      <div className={styles.botCont}>
        <Content
          fontSize={16}
          align="left"
          color="white"
          lineheight="200%"
          content="
<strong>천원</strong>도 후원 가능해요<br/>
          기부금 전액은 <strong>기부단체</strong>에 전달되요<br/>
          정기후원이 아닌, <strong>일시 후원</strong>이에요
          "
        />
      </div>
      <div className={styles.buttonsCont}>
        <Buttons
          onClickDonate={onClickTossLick}
          onClickHeart={() => setModal('')}
        />
      </div>
    </div>
  );
};

export default CheerPopup;
