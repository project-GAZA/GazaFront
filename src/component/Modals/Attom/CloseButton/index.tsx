import React from 'react';
import Image from 'next/image';

import { useRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';

import CloseSquareBlack from '@public/assets/svg/Close_square_black.svg';
import CloseSquareLight from '@public/assets/svg/Close_square_light.svg';
import styles from './index.module.scss';

interface TitleProp {
  theme: 'light' | 'dark';
}

const CloseButton = ({ theme = 'light' }: TitleProp) => {
  const [modal, setModal] = useRecoilState(modalState);

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
    <button
      type="button"
      onClick={() => {
        setModal('');
      }}
      className={cls}
    >
      <Image src={imgsrc} alt="닫기버튼" width={20} height={20} />
    </button>
  );
};

export default CloseButton;
