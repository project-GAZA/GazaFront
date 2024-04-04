import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateContent from '@/component/Modals/Modules/DonateContent';
import IconBox from '@/component/Modals/Attom/IconBox';

import InstaIcon from 'public/assets/svg/insta.svg';
import FaceIcon from 'public/assets/svg/facebook.svg';
import KakaoIcon from 'public/assets/svg/kakao.svg';
import CopyIcon from 'public/assets/svg/copyicon.svg';
import styles from './index.module.scss';

const DonateComplete = () => {
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
          title="후원자로 등록되었습니다"
          content="
          주변에 가자지구의 상황을 널리 알려주세요
        "
        />
      </div>
      <div className={styles.iconCont}>
        <IconBox name="인스타그램" iconsrc={InstaIcon.src} />
        <IconBox name="페이스북" iconsrc={FaceIcon.src} />
        <IconBox name="카카오톡" iconsrc={KakaoIcon.src} />
      </div>
      <div className={styles.buttonCont}>
        <SmallButton disabled theme="black">
          <div className={styles.buttonInner}>
            URL 복사하기
            <Image src={CopyIcon.src} width={24} height={24} alt="복사아이콘" />
          </div>
        </SmallButton>
      </div>
    </div>
  );
};

export default DonateComplete;
