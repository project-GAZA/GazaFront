import React from 'react';
import styles from './index.module.scss';

export interface InfoBoxType {
  name: string;
  value: number;
  color?: 'white' | '#EB4511';
}

const InfoBox = ({ value, name, color = 'white' }: InfoBoxType) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.number} style={{ color }}>
        {value.toLocaleString()}
      </h1>
      <h3 className={styles.title}>{name}</h3>
    </div>
  );
};

export default InfoBox;
