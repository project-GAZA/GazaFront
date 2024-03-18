import React from 'react';
import Image from 'next/image';

import RoundedButton from '@/component/Section_Hero/Attom/RoundedButton';
import GoArrowRight from '@/assets/icon/GoArrowRight.svg';
import styles from './index.module.scss';

const GoDonateButton = () => {
  const onGoDonateClick = () => {};
  return (
    <RoundedButton onClick={onGoDonateClick}>
      <div className={styles.text}>
        <p className={styles.headbox}>
          지금
          <Image
            className={styles.img}
            width={0}
            height={0}
            src={GoArrowRight.src}
            alt="햐"
          />{' '}
        </p>
        후원하기
      </div>
    </RoundedButton>
  );
};

export default GoDonateButton;
