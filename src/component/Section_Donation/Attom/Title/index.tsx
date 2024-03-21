import React from 'react';
import styles from './index.module.scss';

const Title = ({ title, content }) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Title;
