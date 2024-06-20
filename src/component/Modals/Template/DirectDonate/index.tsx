import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store';

import CloseButton from '@/component/Modals/Attom/CloseButton';
import Title from '@/component/Modals/Attom/Title';
import Content from '@/component/Modals/Attom/Content';
import SmallButton from '@/component/Common/Attom/SmallButton';
import ExplainSvg from 'public/assets/content/toss.svg';

import styles from './index.module.scss';

const DirectDonate = () => {
  const setModal = useSetRecoilState<string>(modalState);
  const [animation, setAnimation] = useState<string>(styles.layout);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onClickTossLick = (): void => {
    // window.open('https://toss.me/peacegaza');
    setModal('directmessage');
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="light" />
      </div>
      <div className={styles.titleBox}>
        <Title
          textAlign="center"
          fontSize={18}
          color="black"
          title="후원하기 버튼 클릭시 토스로 이동해요"
        />
      </div>
      <div className={styles.imgBox}>
        <Image src={ExplainSvg.src} width={228} height={167} alt="토스설명" />
      </div>
      <div className={styles.contentBox}>
        <Content
          align="left"
          lineheight="200%"
          color="black"
          content={`
      <strong>천원</strong>도 후원 가능해요<br/>
      기부금 전액은 <strong>기부단체</strong>에 전달되요<br/>
      정기후원이 아닌, <strong>일시 후원</strong>이에요<br/>

      `}
        />
      </div>
      <div className={styles.buttonBox}>
        <SmallButton
          onClick={onClickTossLick}
          fontSize={15}
          theme="black"
          type="button"
        >
          후원하기
        </SmallButton>
      </div>
    </div>
  );
};

export default DirectDonate;
