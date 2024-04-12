import React from 'react';

import IconBox from '@/component/Common/Attom/IconBox';

import FaceIcon from 'public/assets/svg/footerface.svg';
import InstaIcon from 'public/assets/svg/footerinsta.svg';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div>
      <div className={styles.iconBox}>
        <IconBox name="" iconsrc={InstaIcon.src} />
        <IconBox name="" iconsrc={FaceIcon.src} />
      </div>
      <p className={styles.footerTypo}>
        “프로젝트의 진행 과정을 SNS에서 함 께 지켜봐 주세요! 페이스북과
        인스타그램 팔로우로 이 여정에 동참해 주세요:)”
      </p>
    </div>
  );
};

export default Footer;
