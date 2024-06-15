import React from 'react';
import Image from 'next/image';

import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store';

import CloseSquareBlack from '@public/assets/svg/Close_square_black.svg';
import CloseSquareLight from '@public/assets/svg/Close_square_light.svg';
import styles from './index.module.scss';

interface TitleProp {
  theme: 'light' | 'dark' | 'lightdark';
}

const CloseButton = ({ theme = 'light' }: TitleProp) => {
  const setModal = useSetRecoilState(modalState);

  let imgsrc: string = '';
  let cls: string = '';
  if (theme === 'light' || theme === 'lightdark') {
    imgsrc = CloseSquareBlack.src;
    if (theme === 'lightdark') {
      cls = styles.lightdark;
    } else cls = styles.light;
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
