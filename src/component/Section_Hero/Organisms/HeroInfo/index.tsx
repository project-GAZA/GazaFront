import GoButtons, {
  GoButtonsType,
} from '@/component/Section_Hero/Molecule/GoButtons';
import HeroMainTitle, {
  HeroMainTitleType,
} from '@/component/Section_Hero/Molecule/HeroMainTitle';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface HeroInfoType {
  /**
   * Organisms를 참고해주세요
   */
  goButtonsData: GoButtonsType;
  /**
   * Organisms를 참고해주세요
   */
  heroMainTitleData: HeroMainTitleType;
  /**
   * borderRadius값입니다.
   */
  borderRadius: number;
  /**
   * 배경색 지정입니다.
   */
  color: 'background_light';
}
const HeroInfo = ({
  goButtonsData,
  heroMainTitleData,
  borderRadius,
  color,
}: HeroInfoType) => {
  const wrapperclass = classNames(styles.wrapper, {
    [styles.background_light]: color === 'background_light',
  });

  return (
    <div className={wrapperclass} style={{ borderRadius }}>
      <div className={styles.inner}>
        <HeroMainTitle
          title={heroMainTitleData.title}
          projectTitle={heroMainTitleData.projectTitle}
          projectSubTitle={heroMainTitleData.projectSubTitle}
        />
        <GoButtons Buttons={goButtonsData.Buttons} gap={goButtonsData.gap} />
      </div>
    </div>
  );
};

export default HeroInfo;
