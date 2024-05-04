import React, { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@/store/modalState';
import { messageState } from '@/store/postState';

import CloseButton from '@/component/Modals/Attom/CloseButton';
import Content from '@/component/Modals/Attom/Content';

import Image from 'next/image';
import QR from '@public/assets/svg/qr.svg';
import SmallButton from '@/component/Common/Attom/SmallButton';
import Title from '@/component/Common/Attom/Title';
import styles from './index.module.scss';

const DesktopDonate = () => {
  const setModal = useSetRecoilState<string>(modalState);
  const message = useRecoilValue(messageState);
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onClickNext = (): void => {
    if (message === null) setModal('directmessage');
    else setModal('who');
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="lightdark" />
      </div>
      <div className={styles.topCont}>
        <Title
          color="black"
          title="카메라로 스캔후 링크를 클릭하면 토스로 넘어가요!"
          fontSize={18}
        />
      </div>
      <div className={styles.icon}>
        <Image src={QR.src} alt="큐알코드" width={141} height={134} />
      </div>
      <div className={styles.botCont}>
        <Content
          fontSize={16}
          align="left"
          color="black"
          lineheight="200%"
          content="
<strong>천원</strong>도 후원 가능해요<br/>
          기부금 전액은 <strong>기부단체</strong>에 전달되요<br/>
          정기후원이 아닌, <strong>일시 후원</strong>이에요
          "
        />
      </div>
      <div className={styles.buttonsCont}>
        <SmallButton
          theme="black"
          onClick={onClickNext}
          background="lightyellow"
        >
          후원완료했어요
        </SmallButton>
      </div>
    </div>
  );
};

export default DesktopDonate;
