import SectionContainer from '@/component/SectionContainer';
import HeroMainTitle from './HeroMainTitle';
import GoButtons from './GoButtons';
import styles from './index.module.scss';

const HeroInfo = () => {
  return (
    <div className={styles.wrapper}>
      <SectionContainer>
        <div className={styles.inner}>
          <HeroMainTitle />
          <GoButtons />
        </div>
      </SectionContainer>
    </div>
  );
};

export default HeroInfo;
