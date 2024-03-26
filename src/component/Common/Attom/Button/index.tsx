import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface ButtonType {
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;

  /**
   * 버튼의 색깔테마입니다(primary,secondary) fill일때만 유효합니다.
   */
  theme: 'primary' | 'secondary';
  /**
   * 버튼안에 텍스트입니다.
   */
  children: string;
  /**
   *  버튼안에 색상을 채울지 여부입니다. false면 투명한 배경색의 버튼이됩니다.
   */
  fill?: boolean;
  /**
   * onClick은 클릭시 실행할 함수입니다.
   */
  onClick?: () => void;
}

const Button = ({
  marginBottom = 0,
  marginRight = 0,
  marginLeft = 0,
  marginTop = 0,
  theme = 'primary',
  children,
  fill = true,
  onClick,
}: ButtonType) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.fill]: fill,
    [styles.unfill]: !fill,
  });

  return (
    <button
      style={{ marginBottom, marginRight, marginTop, marginLeft }}
      className={buttonClasses}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
