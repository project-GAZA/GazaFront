'use client';

import { RefObject } from 'react';

import GoDonateButton from '@/component/Section_Hero/Modules/GoDonateButton';
import MainPicture from '@/component/Section_Hero/Attom/MainPicture';
import GoButtons from '@/component/Section_Hero/Modules/GoButtons';
import HeroMainTitle from '@/component/Section_Hero/Modules/HeroMainTitle';

import SectionContainer from '@/component/SectionContainer';

import Children_1 from '@/assets/svg/background/children1.png';
import Children_2 from '@/assets/svg/background/children2.png';

import scrollTo from '@/utils/scroll';
import styles from './index.module.scss';

// 그림에 대한 URL만 넣어주면 됨
interface SectionHeroProps {
  msgRef?: RefObject<HTMLDivElement>;
}

const SectionHero = ({ msgRef }: SectionHeroProps) => {
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
        <SectionContainer>
          <GoDonateButton />
        </SectionContainer>
      </div>
      <div className={styles.picture}>
        <MainPicture
          borderRadius={HeroSectionMook.borderRadius}
          urls={HeroSectionMook.urls}
        />
      </div>
      <div className={styles.wrapper}>
        <SectionContainer>
          <div className={styles.inner}>
            <HeroMainTitle />
            <GoButtons onClickGoMessage={onClickGoMessage} />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default SectionHero;
