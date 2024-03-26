import React from 'react';
import Image from 'next/image';
import CloseSquareBlack from '@public/assets/svg/Close_square_black.svg';
import CloseSquareLight from '@public/assets/svg/Close_square_light.svg';
import styles from './index.module.scss';

interface TitleProp {
  onClick: () => void;
  theme: 'light' | 'dark';
}

const CloseButton = ({ onClick, theme = 'light' }: TitleProp) => {
  let imgsrc: string = '';
  let cls: string = '';

  if (theme === 'light') {
    imgsrc = CloseSquareBlack.src;
    cls = styles.light;
  } else if (theme === 'dark') {
    imgsrc = CloseSquareLight.src;
    cls = styles.dark;
  }
  cls += ` ${styles.layout}`;

  return (
    <button type="button" className={cls}>
      <Image src={imgsrc} alt="닫기버튼" width={20} height={20} />
    </button>
  );
};

export default CloseButton;
