import React from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { modalState } from '@/store';
import ShareIcon from 'public/assets/svg/share_outline.svg';
import LangIcon from 'public/assets/svg/globe.svg';
import styles from './index.module.scss';

const ShareLang = () => {
  const setModal = useSetRecoilState(modalState);
  return (
    <div className={styles.layout}>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => setModal('share')}
          className={styles.shareButton}
        >
          <Image src={ShareIcon.src} width={24} height={24} alt="공유아이콘" />
          <span className={styles.shareText}>공유하기</span>
        </button>
      </div>
      <button className={styles.langbutton}>
        <Image src={LangIcon.src} width={24} height={24} alt="언어선택아이콘" />
        한국어
      </button>
    </div>
  );
};

export default ShareLang;
