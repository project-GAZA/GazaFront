import React from 'react';
import Button from '@/component/Common/Attom/SmallButton';
import styles from './index.module.scss';

interface ButtonsProps {
  onClickHeart: () => void;
  onClickDonate: () => void;
}

const Buttons = ({ onClickHeart, onClickDonate }: ButtonsProps) => {
  return (
    <div className={styles.layout}>
      <Button onClick={onClickHeart} theme="white" background="red">
        마음만 전달하기
      </Button>
      <Button onClick={onClickDonate} theme="black" background="white">
        후원하기
      </Button>
    </div>
  );
};

export default Buttons;
