import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

interface MoneySilderProp {
  current: number;
  goal: number;
}

const MoneySilder = ({ current, goal }: MoneySilderProp) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent((current / goal) * 100);
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.slideOuter}>
        <div style={{ width: `${percent}%` }} className={styles.slideInner} />
      </div>
      <div className={styles.botSect}>
        <div className={styles.leftCont}>
          <h3>총 모금액</h3>
          <h2>{current.toLocaleString()} 원</h2>
        </div>
        <div className={styles.rightCont}>
          <h3>총 모금액</h3>
          <h2>{goal.toLocaleString()} 원</h2>
        </div>
      </div>
      <p className={styles.p}>
        ※ 모금 현황은 9~21시 동안 3시간마다 업데이트 됩니다!
      </p>
    </div>
  );
};

export default MoneySilder;
