import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import InfoBox, {
  InfoBoxType,
} from '@/component/Section_Situation/Attom/InfoBox';
import instance from '@/utils/clientaxios';
import styles from './index.module.scss';

interface InfoBoxType2 extends InfoBoxType {
  id: number;
}

const SectionSituation = () => {
  const [infos, setInfos] = useState<InfoBoxType2[]>([]);
  useEffect(() => {
    instance
      .get(`/situation`)
      .then(res => setInfos(res.data))
      .catch(_e => toast.error('서버에서 에러가 났습니다.'));
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>가자지구 최근 현황</h1>
        <div className={styles.numberContainer}>
          {infos.map(v => (
            <InfoBox
              name={v.name}
              value={v.value}
              key={v.id}
              color={v.name === '어린이사망' ? '#EB4511' : 'white'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSituation;
