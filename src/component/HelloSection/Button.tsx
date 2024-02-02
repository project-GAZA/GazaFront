import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * 버튼안에 텍스트입니다.
   */
  label: string;
  /**
   *  버튼안에 색상을 채울지 여부입니다. false면 투명한 배경색의 버튼이됩니다.
   */
  fill: boolean;
  /**
   * onClick은 클릭시 실행할 함수입니다.
   */
  onClick?: () => void;
}

const Button = ({ label, fill, onClick }: ButtonProps) => {
  const buttonClasses = classNames(styles.button, {
    [styles.fill]: fill,
    [styles.unfill]: !fill,
  });

  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
