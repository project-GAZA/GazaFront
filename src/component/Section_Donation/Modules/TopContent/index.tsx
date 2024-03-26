import React from 'react';
import Content from '@/component/Section_Donation/Attom/Content';
import Title from '@/component/Section_Donation/Attom/Title';
import styles from './index.module.scss';

const TopContent = () => {
  return (
    <div className={styles.layout}>
      <Title
        size="lg"
        title="가자지구 사람들을 위한 12번째 후원자가 되어주세요."
      />
      <div className={styles.content}>
        <Content content="<strong>1000원도 후원</strong>가능하며 후원과 함께 작성된 메세지는 책자로 만들어 가자지구에 전달할 예정이에요!" />
      </div>
    </div>
  );
};

export default TopContent;
