import React from 'react';
import styles from './index.module.scss';

const Earth = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>이제 우리가 행동할 때입니다.</h1>
      <p className={styles.content}>
        <strong>
          가자지구 아이들을 위한 후원금 및 희망 메세지 전달 프로젝트
        </strong>
        로 가자지구의 아이들이 분쟁의 어둠을 넘어 밝은 내일을 향해 나아가도록
        돕고자 합니다. 우리의 관심과 사랑이 이 아이들에게 긍정적인 변화를
        가져오고 전 세계에 평화의 메시지를 전파할 것입니다.
      </p>
    </div>
  );
};

export default Earth;
