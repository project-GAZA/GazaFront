import HeroMainTitle from './HeroMainTitle';
import GoButtons from './GoButtons';
import styles from './index.module.scss';

const HeroInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <HeroMainTitle />
        <GoButtons />
      </div>
    </div>
  );
};

export default HeroInfo;
