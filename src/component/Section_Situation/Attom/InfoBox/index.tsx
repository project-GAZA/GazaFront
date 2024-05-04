import React from 'react';
import styles from './index.module.scss';

export interface InfoBoxType {
  number: number;
  title: string;
  color?: 'white' | '#EB4511';
}

const InfoBox = ({ number, title, color = 'white' }: InfoBoxType) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.number} style={{ color }}>
        {number.toLocaleString()}
      </h1>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default InfoBox;
