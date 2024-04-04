import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface IconBoxProp {
  iconsrc: string;
  name: string;
}

const IconBox = ({ iconsrc, name }: IconBoxProp) => {
  return (
    <div className={styles.layout}>
      <Image src={iconsrc} width={59} height={59} alt={name} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default IconBox;
