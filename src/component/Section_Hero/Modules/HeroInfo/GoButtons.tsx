import React from 'react';
import Button from '@/component/Section_Hero/Attom/Button';
import styles from './index.module.scss';

const GoButtons = () => {
  const onClickGoView = () => {};
  return (
    <div className={styles.gobutton}>
      <Button fill={false} theme="primary" onClick={onClickGoView}>
        희망 메세지 보러가기
      </Button>
      <Button fill theme="primary" onClick={onClickGoView}>
        후원하기
      </Button>
    </div>
  );
};

export default GoButtons;
