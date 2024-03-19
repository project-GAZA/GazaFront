import React, { useState } from 'react';
import SortButton from '@/component/Section_Message/Attom/SortButton';
import styles from './index.module.scss';

export interface SortButtonsType {
  theme: 'primary' | 'secondary';
}

const SortButtons = ({ theme = 'secondary' }: SortButtonsType) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.sortLayout}>
      <SortButton
        text="BEST"
        theme={theme}
        active={active === 0}
        onClick={() => {
          setActive(0);
        }}
      />
      |
      <SortButton
        text="NEW"
        theme={theme}
        active={active === 1}
        onClick={() => {
          setActive(1);
        }}
      />
    </div>
  );
};
export default SortButtons;
