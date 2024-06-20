import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState, deviceState } from '@/store';
import BottomContent from '@/component/Section_Donation/Modules/BottomContent';
import TopContent from '@/component/Section_Donation/Modules/TopContent';
import MainContent from '@/component/Section_Donation/Modules/MainContent';
import Button from '@/component/Common/Attom/Button';
import SectionContainer from '@/component/SectionContainer';
import styles from './index.module.scss';

const SectionDonation = () => {
  const setModal = useSetRecoilState(modalState);
  const device = useRecoilValue(deviceState);
  const onGoDonateClick = () => {
    if (device === 'mobile') setModal('direct');
    else setModal('desktop');
  };

  return (
    <SectionContainer>
      <div className={styles.layout}>
        <TopContent />
        <div className={styles.mainContent}>
          <div className={styles.mainSect}>
            <MainContent />
          </div>
          <div className={styles.botCont}>
            <div className={styles.buttonSect}>
              <Button theme="secondary" fill onClick={onGoDonateClick}>
                후원하기
              </Button>
            </div>
            <div className={styles.botSect}>
              <BottomContent />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionDonation;
