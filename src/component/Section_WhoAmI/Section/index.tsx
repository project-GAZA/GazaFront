import React from 'react';
import Earth from '@/component/Section_WhoAmI/Modules/Earth';
import Middle from '@/component/Section_WhoAmI/Modules/Middle';
import Top from '@/component/Section_WhoAmI/Modules/Top';
import styles from './index.module.scss';

const SectionSituation = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <Top />
      </div>
      <div className={styles.middleEarth}>
        <div className={styles.middle}>
          <Middle />
        </div>
        <div className={styles.earth}>
          <Earth />
        </div>
      </div>
    </div>
  );
};

export default SectionSituation;
