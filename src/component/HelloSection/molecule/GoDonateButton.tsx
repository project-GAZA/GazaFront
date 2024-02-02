import React from 'react';
import Image from 'next/image';

import RoundedButton from '@/component/HelloSection/RoundedButton';
import GoArrowRight from '@/assets/icon/GoArrowRight.svg';
import styles from './GoDonateButton.module.scss';

interface GoDonateButtonType {
  onClick?: () => void;
}

const GoDonateButton = ({ onClick }: GoDonateButtonType) => {
  return (
    <RoundedButton onClick={onClick}>
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
