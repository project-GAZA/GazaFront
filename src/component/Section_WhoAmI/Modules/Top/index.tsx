import React from 'react';
import styles from './index.module.scss';

const Earth = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>"아이들은 잘못이 없습니다!"</h1>
      <p className={styles.content}>
        10월 7일에 시작된
        <strong> 이스라엘 하마스 간의 분쟁</strong>은 가자지구의
        <strong> 수많은 아이들에게 깊은 상처</strong>를 남겼습니다.
      </p>
      <p className={styles.content}>
        이 아픔은 향후 분쟁이 끝난 가자지구 안에서 다시금
        <strong> 세상을 향한 분노와 증오의 불씨 </strong>로 남게 될 것이며,
      </p>
      <p className={styles.content}>
        이렇게 된다면 <strong> 전 세계 평화에도 큰 위협</strong>이 될 수
        있습니다.
      </p>
    </div>
  );
};

export default Earth;
