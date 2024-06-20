import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store';
import Image from 'next/image';

import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateContent from '@/component/Modals/Modules/DonateContent';
import IconBox from '@/component/Common/Attom/IconBox';

import InstaIcon from 'public/assets/svg/insta.svg';
import FaceIcon from 'public/assets/svg/facebook.svg';
import KakaoIcon from 'public/assets/svg/kakao.svg';
import CopyIcon from 'public/assets/svg/copyicon.svg';
import styles from './index.module.scss';

const DonateComplete = () => {
  const [animation, setAnimation] = useState<string>(styles.layout);
  const setModal = useSetRecoilState<string>(modalState);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onClickCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://gazas-child-read-hope.kr/');
      toast.success('클립보드에 복사했습니다.');
    } catch (e) {
      toast.error('일시적인 오류로 클립보드에 실패했습니다.');
      // toast 메세지 띄어주기
    } finally {
      setModal('');
    }
  };

  const onClickFaceBook = () => {
    window.open(
      'http://www.facebook.com/sharer.php?u=https://dc2348.tistory.com/',
    );
  };

  return (
    <div className={animation}>
      <div className={styles.closeCont}>
        <CloseButton theme="light" />
      </div>
      <div className={styles.donateCont}>
        <DonateContent
          title="Gaza's Child Read Hope"
          content="
          주변에 가자지구의 상황을 널리 알려주세요
        "
        />
      </div>
      <div className={styles.iconCont}>
        <IconBox name="인스타그램" iconsrc={InstaIcon.src} />
        <IconBox
          onClick={onClickFaceBook}
          name="페이스북"
          iconsrc={FaceIcon.src}
        />
        <IconBox name="카카오톡" iconsrc={KakaoIcon.src} />
      </div>
      <div className={styles.buttonCont}>
        <SmallButton
          background="gray"
          type="button"
          theme="black"
          onClick={onClickCopy}
        >
          <div className={styles.buttonInner}>
            URL 복사하기
            <Image src={CopyIcon.src} width={24} height={24} alt="복사아이콘" />
          </div>
        </SmallButton>
      </div>
    </div>
  );
};

export default DonateComplete;
