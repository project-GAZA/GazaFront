import HeroInfo, {
  HeroInfoType,
} from '@/component/Section_Hero/Organisms/HeroInfo';

import GoDonateButton, {
  GoDonateButtonType,
} from '@/component/Section_Hero/Molecule/GoDonateButton';
import MainPicture, {
  MainPictureType,
} from '@/component/Section_Hero/Attom/MainPicture';
import styles from './index.module.scss';

interface SectionHeroType {
  /**
   * Organisms를 참고해주세요
   */
  heroInfoData: HeroInfoType;
  /**
   * Molecule를 참고해주세요
   */
  goDonateButtonData: GoDonateButtonType;
  /**
   * Attom를 참고해주세요
   */
  mainPictureData: MainPictureType;
}

const SectionHero = ({
  heroInfoData,
  goDonateButtonData,
  mainPictureData,
}: SectionHeroType) => {
  return (
    <div className={styles.outer}>
      <div className={styles.goDonate}>
        <GoDonateButton onClick={goDonateButtonData.onClick} />
      </div>
      <div className={styles.picture}>
        <MainPicture
          urls={mainPictureData.urls}
          borderRadius={mainPictureData.borderRadius}
        />
      </div>
      <HeroInfo
        heroMainTitleData={heroInfoData.heroMainTitleData}
        goButtonsData={heroInfoData.goButtonsData}
        color={heroInfoData.color}
        borderRadius={heroInfoData.borderRadius}
      />
    </div>
  );
};

export default SectionHero;
