import React from 'react';
import styles from './index.module.scss';

interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return (
    <p className={styles.p} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Content;
