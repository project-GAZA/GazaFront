import React from 'react';
import Button from '@/component/Common/Attom/Button';
import styles from './index.module.scss';

interface GoButtonsProps {
  onClickGoMessage: () => void;
  onClickDonate: () => void;
}

const GoButtons = ({ onClickGoMessage, onClickDonate }: GoButtonsProps) => {
  return (
    <div className={styles.gobutton}>
      <Button fill={false} theme="primary" onClick={onClickGoMessage}>
        희망 메세지 보러가기
      </Button>
      <Button fill theme="primary" onClick={onClickDonate}>
        후원하기
      </Button>
    </div>
  );
};

export default GoButtons;
