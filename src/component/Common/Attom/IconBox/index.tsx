import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface IconBoxProp {
  iconsrc: string;
  name: string;
  onClick?: () => void;
}

const IconBox = ({
  iconsrc,
  name,
  onClick = () => console.log('Test'),
}: IconBoxProp) => {
  return (
    <button onClick={onClick} className={styles.layout}>
      <Image src={iconsrc} width={59} height={59} alt={name} />
      <p className={styles.name}>{name}</p>
    </button>
  );
};

export default IconBox;
