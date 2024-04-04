import React from 'react';
import Title from '@/component/Modals/Attom/Title';
import Content from '@/component/Modals/Attom/Content';
import styles from './index.module.scss';

interface DonateContentProp {
  title: string;
  content: string;
}

const DonateContent = ({ title, content }: DonateContentProp) => {
  return (
    <div className={styles.layout}>
      <Title textAlign="center" color="black" title={title} fontSize={18} />
      <Content
        fontSize={17}
        align="center"
        lineheight="normal"
        color="black"
        content={content}
      />
    </div>
  );
};

export default DonateContent;
