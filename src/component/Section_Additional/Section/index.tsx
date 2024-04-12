import { RefObject } from 'react';

import Accordions from '@/component/Section_Additional/Modules/Accordions';
import Footer from '@/component/Section_Additional/Modules/Footer';

import styles from './index.module.scss';

interface SectionAdditionalProps {
  infoRef?: RefObject<HTMLDivElement>;
}

const SectionAdditional = ({ infoRef }: SectionAdditionalProps) => {
  return (
    <div className={styles.container} ref={infoRef}>
      <div className={styles.mobileFont}>
        <h1>Gaza’s Child Read HOPE 프로젝트를 소개합니다!</h1>
      </div>
      <div className={styles.layout}>
        <Accordions />
      </div>
      <Footer />
    </div>
  );
};

export default SectionAdditional;
