import React from 'react';
import styles from './index.module.scss';

export interface ButtonType {
  /**
   * 버튼의 색깔테마입니다(primary,secondary) fill일때만 유효합니다.
   */
  theme: 'black' | 'white';
  /**
   * 버튼안에 텍스트입니다.
   */
  children: string;
  /**
   *  버튼안에 색상을 채울지 여부입니다. false면 투명한 배경색의 버튼이됩니다.
   */
  background?: 'primary' | 'secondary' | 'white' | 'red' | 'gray';
  /**
   * onClick은 클릭시 실행할 함수입니다.
   */
  onClick?: () => void;
}

const SmallButton = ({
  theme = 'primary',
  children,
  background = 'primary',
  onClick,
}: ButtonType) => {
  let cls = styles.button;

  if (background === 'primary') {
    cls += ` ${styles.bgprimary}`;
  } else if (background === 'secondary') {
    cls += ` ${styles.bgsecondary}`;
  } else if (background === 'red') {
    cls += ` ${styles.bgred}`;
  } else if (background === 'white') {
    cls += ` ${styles.bgwhite}`;
  } else if (background === 'gray') {
    cls += ` ${styles.bglightgray}`;
  }

  if (theme === 'white') {
    cls += ` ${styles.white}`;
  }

  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default SmallButton;
