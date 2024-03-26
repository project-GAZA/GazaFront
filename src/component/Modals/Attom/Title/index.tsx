import React from 'react';
import styles from './index.module.scss';

interface TitleProp {
  title: string;
}

const Title = ({ title }: TitleProp) => {
  return <h1 className={styles.h1}>{title}</h1>;
};

export default Title;
