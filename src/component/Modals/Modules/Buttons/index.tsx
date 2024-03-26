import React from 'react';
import Button from '@/component/Common/Attom/SmallButton';
import styles from './index.module.scss';

const Buttons = () => {
  return (
    <div className={styles.layout}>
      <Button theme="white" background="red">
        마음만 전달하기
      </Button>
      <Button theme="black" background="white">
        후원하기
      </Button>
    </div>
  );
};

export default Buttons;
