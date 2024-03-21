import React from 'react';
import styles from './index.module.scss';

const Content = ({ content }) => {
  return (
    <p className={styles.p} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Content;
