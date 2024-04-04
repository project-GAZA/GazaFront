import React from 'react';
import Content from '@/component/Modals/Attom/Content';
import Title from '@/component/Modals/Attom/Title';
import styles from './index.module.scss';

const EndDonateContent = () => {
  return (
    <div>
      <Title color="black" title="후원자님의 정보를 남겨주세요!" />
      <Content
        align="center"
        lineheight="normal"
        color="black"
        content="후원확인 후 후원자님의 메세지에 특별한 표시를 남겨드립니다."
      />
    </div>
  );
};

export default EndDonateContent;
