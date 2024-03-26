import React from 'react';
import child from '@public/assets/background/child.png';
import styles from './index.module.scss';

interface PictureProp {
  url: string;
}

const Picture = ({ url }: PictureProp) => {
  return (
    <div
      style={{ backgroundImage: `url("${url || child.src}")` }}
      className={styles.picture}
    >
      <div className={styles.inner} />
    </div>
  );
};

export default Picture;
