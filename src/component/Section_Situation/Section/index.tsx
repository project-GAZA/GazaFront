import React, { useEffect, useState } from 'react';
import InfoBox, {
  InfoBoxType,
} from '@/component/Section_Situation/Attom/InfoBox';
import styles from './index.module.scss';

const SectionSituation = () => {
  const [infos, setInfos] = useState<InfoBoxType[]>([]);
  useEffect(() => {
    setInfos([
      { title: '사망자', number: 24620 },
      { title: '부상자', number: 60800 },
      { title: '어린이사망', number: 60800, color: '#EB4511' },
      { title: '굶주린 사람들', number: 60800 },
    ]);
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>가자지구 최근 현황</h1>
        <div className={styles.numberContainer}>
          {infos.map(v => (
            <InfoBox
              title={v.title}
              number={v.number}
              key={v.title}
              color={v.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSituation;
