import GoDonateButton from '@/component/Section_Hero/Modules/GoDonateButton';
import MainPicture from '@/component/Section_Hero/Attom/MainPicture';
import GoButtons from '@/component/Section_Hero/Modules/GoButtons';
import HeroMainTitle from '@/component/Section_Hero/Modules/HeroMainTitle';

import SectionContainer from '@/component/SectionContainer';

import Children_1 from '@/assets/svg/background/children1.png';
import Children_2 from '@/assets/svg/background/children2.png';
import styles from './index.module.scss';
// 그림에 대한 URL만 넣어주면 됨

const SectionHero = () => {
  const HeroSectionMook = {
    borderRadius: 20,
    urls: [Children_1.src, Children_2.src],
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
            <GoButtons />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default SectionHero;
