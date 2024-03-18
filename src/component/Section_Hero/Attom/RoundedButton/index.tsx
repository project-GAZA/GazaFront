import React from 'react';
import styles from './index.module.scss';

interface RoundedButtonType {
  children: React.ReactNode;
  onClick?: () => void;
}

const RoundedButton = ({ children, onClick }: RoundedButtonType) => {
  return (
    <button className={styles.roundedButton} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default RoundedButton;
