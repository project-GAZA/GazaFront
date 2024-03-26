import React from 'react';
import styles from './index.module.scss';

interface TitleProp {
  title: string;
  size: 'lg' | 'md';
}

const Title = ({ title, size = 'lg' }: TitleProp) => {
  let cls = size === 'lg' ? styles.lg : styles.md;
  cls += ` ${styles.h1}`;
  return <h1 className={cls}>{title}</h1>;
};

export default Title;
//      <p className={styles.p} dangerouslySetInnerHTML={{ __html: content }} />
