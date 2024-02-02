import React from 'react';
import styles from './RoundedButton.module.scss';

interface RoundedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const RoundedButton = ({ children, onClick }: RoundedButtonProps) => {
  return (
    <button className={styles.roundedButton} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default RoundedButton;
