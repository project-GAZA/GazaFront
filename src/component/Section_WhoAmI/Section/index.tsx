import React, { useEffect, useState } from 'react';
import Earth from '@/component/Section_WhoAmI/Modules/Earth';
import styles from './index.module.scss';

const SectionSituation = () => {
  return (
    <div className={styles.layout}>
      <Earth />
    </div>
  );
};

export default SectionSituation;
