import HeroInfo from '@/component/Section_Hero/Modules/HeroInfo';
import GoDonateButton from '@/component/Section_Hero/Modules/GoDonateButton';
import MainPicture, {
  MainPictureType,
} from '@/component/Section_Hero/Attom/MainPicture';
import styles from './index.module.scss';

interface SectionHeroType {
  /**
   * Organisms를 참고해주세요
   */
  mainPictureData: MainPictureType;
}

const SectionHero = ({ mainPictureData }: SectionHeroType) => {
  return (
    <div className={styles.outer}>
      <div className={styles.goDonate}>
        <GoDonateButton />
      </div>
      <div className={styles.picture}>
        <MainPicture
          urls={mainPictureData.urls}
          borderRadius={mainPictureData.borderRadius}
        />
      </div>
      <HeroInfo />
    </div>
  );
};

export default SectionHero;
