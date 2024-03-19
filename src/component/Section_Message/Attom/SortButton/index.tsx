import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface SortButtonType {
  text: string;
  active: boolean;
  theme: 'primary' | 'secondary';
  onClick: () => void;
}

const SortButton = ({
  text,
  active = false,
  theme,
  onClick,
}: SortButtonType) => {
  const sortButtonStyle = classNames(styles.base, {
    [styles.primary]: theme === 'primary',
    [styles.secondary]: theme === 'secondary',
    [styles.active]: active,
  });
  return (
    <button type="button" onClick={onClick} className={sortButtonStyle}>
      {text}
    </button>
  );
};

export default SortButton;
