'use client';

import { FadeInDiv } from 'react-trend-animation';
import { RefObject } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@/store/modalState';
import { deviceState } from '@/store/deviceState';

import GoDonateButton from '@/component/Section_Hero/Modules/GoDonateButton';
import MainPicture from '@/component/Section_Hero/Attom/MainPicture';
import GoButtons from '@/component/Section_Hero/Modules/GoButtons';
import HeroMainTitle from '@/component/Section_Hero/Modules/HeroMainTitle';

import Children_1 from '@/assets/svg/background/children1.png';
import Children_2 from '@/assets/svg/background/children2.png';

import scrollTo from '@/utils/scroll';
import styles from './index.module.scss';

// 그림에 대한 URL만 넣어주면 됨
interface SectionHeroProps {
  msgRef?: RefObject<HTMLDivElement>;
}

const SectionHero = ({ msgRef }: SectionHeroProps) => {
  const device = useRecoilValue(deviceState);
  const setModal = useSetRecoilState(modalState);
  const onGoDonateClick = () => {
    if (device === 'mobile') setModal('direct');
    else setModal('desktop');
  };
  const HeroSectionMook = {
    borderRadius: 20,
    urls: [Children_1.src, Children_2.src],
  };

  const onClickGoMessage = () => {
    if (msgRef && msgRef.current) {
      scrollTo(msgRef);
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.goDonate}>
        <FadeInDiv>
          <GoDonateButton onClick={onGoDonateClick} />
        </FadeInDiv>
      </div>
      <div className={styles.picture}>
        <MainPicture
          borderRadius={HeroSectionMook.borderRadius}
          urls={HeroSectionMook.urls}
        />
      </div>
      <div className={styles.wrapper}>
        <FadeInDiv>
          <div className={styles.inner}>
            <HeroMainTitle />
            <GoButtons
              onClickDonate={onGoDonateClick}
              onClickGoMessage={onClickGoMessage}
            />
          </div>
        </FadeInDiv>
      </div>
    </div>
  );
};

export default SectionHero;
