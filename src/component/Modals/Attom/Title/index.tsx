import React from 'react';
import styles from './index.module.scss';

interface TitleProp {
  title: string;
  color: 'white' | 'black';
  fontSize: number;
  textAlign: 'center' | 'left' | 'right';
}

const Title = ({
  title,
  color = 'white',
  fontSize = 16,
  textAlign = 'center',
}: TitleProp) => {
  return (
    <h1
      style={{ fontSize, textAlign }}
      className={`${styles.h1} ${color === 'black' && styles.black}`}
    >
      {title}
    </h1>
  );
};

export default Title;
