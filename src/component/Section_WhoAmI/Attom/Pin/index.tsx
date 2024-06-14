import React from 'react';
import styles from './index.module.scss';

export interface PinType {
  text: string;
  posx?: number;
  posy?: number;
  posz?: number;
  color?: 'white' | 'orange';
}

const Pin = ({
  text = '',
  posx = 0,
  posy = 0,
  posz = 0,
  color = 'white',
}: PinType) => {
  return (
    <div
      style={{
        left: posx,
        top: posy,
        zIndex: posz,
        backgroundColor: color === 'white' ? 'white' : '#ffde6d',
      }}
      className={styles.layout}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Pin;
