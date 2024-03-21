import React from 'react';
import Picture from '@/component/Section_Donation/Attom/Picture';
import MoneySlider from '@/component/Section_Donation/Attom/MoneySlider';
import styles from './index.module.scss';

const MainContent = () => {
  return (
    <div className={styles.layout}>
      <Picture url="" />
      <div className={styles.moneySection}>
        <MoneySlider current={3000} goal={10000} />
      </div>
    </div>
  );
};

export default MainContent;
