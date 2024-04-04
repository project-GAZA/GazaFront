import React from 'react';
import Title from '@/component/Modals/Attom/Title';
import Content from '@/component/Modals/Attom/Content';
import styles from './index.module.scss';

const CheerTop = () => {
  return (
    <div className={styles.layout}>
      <Title color="white" title="응원 댓글이 등록되었습니다." />
      <Content
        align="center"
        lineheight="normal"
        color="white"
        content="
        마지막으로 가자지구 아이들에게
        따듯함을 선물해 보시겠어요?
        "
      />
    </div>
  );
};

export default CheerTop;
