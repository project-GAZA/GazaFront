import React from 'react';
import Content from '@/component/Section_Donation/Attom/Content';
import Title from '@/component/Section_Donation/Attom/Title';
import styles from './index.module.scss';

const BottomContent = () => {
  const content = `
    <strong>50,000원</strong>이 모이면<br/>
추위에 떠는 사람들에게 <strong>10개의 따뜻한 담요</strong>를,<br/>
<strong>100,000원</strong>이 모이면 <br/>
가족에게 <strong>한달동안 음식</strong>을,<br/> 
<strong>200,000원</strong>이 모이면<br/>
<strong>20명의 어린이</strong>들에게 <strong>심리사회적 지원</strong>을 제공 할 수 있어요.`;
  return (
    <div className={styles.layout}>
      <div className={styles.width}>
        <Title
          size="md"
          title="여러분의 후원이 가자지구에 어떻게 도움이 될까요?"
        />
      </div>
      <Content content={content} />
    </div>
  );
};

export default BottomContent;
