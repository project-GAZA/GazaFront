import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import Image from 'next/image';

import { modalState } from '@/store';

import SmallButton from '@/component/Common/Attom/SmallButton';
import CloseButton from '@/component/Modals/Attom/CloseButton';
import DonateContent from '@/component/Modals/Modules/DonateContent';
import IconBox from '@/component/Common/Attom/IconBox';

import InstaIcon from 'public/assets/svg/insta.svg';
import FaceIcon from 'public/assets/svg/facebook.svg';
import KakaoIcon from 'public/assets/svg/kakao.svg';
import CopyIcon from 'public/assets/svg/copyicon.svg';
import styles from './index.module.scss';

const GazaURL = 'https://gazas-child-read-hope.kr';

const DonateComplete = () => {
  const [animation, setAnimation] = useState<string>(styles.layout);
  const setModal = useSetRecoilState<string>(modalState);
  useEffect(() => {
    setAnimation(`${styles.layout} ${styles.active}`);
  }, []);

  const onClickInsta = () => {
    const url = `https://instagram.com`;
    const shareLink = `${url}?text=${encodeURIComponent('가자지구 아이드을 도와주세요!')}&url=${encodeURIComponent(GazaURL)}`;

    window.open(shareLink, '_blank');
  };

  const onClickKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '가자지구 난민을 도와주세요',
        description: '여러분의 따듯한 응원 한마디가 큰 힘을 줍니다.',
        imageUrl:
          'https://gazas-child-read-hope.kr/_next/static/media/children1.625c3dab.png',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: `${process.env.NEXT_PUBLIC_KAKAO_URL}`,
          webUrl: `${process.env.NEXT_PUBLIC_KAKAO_URL}`,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '응원 메세지 남기기',
          link: {
            mobileWebUrl: GazaURL,
            webUrl: GazaURL,
          },
        },
      ],
    });
  };

  const onClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(GazaURL);
      toast.success('클립보드에 복사했습니다.');
    } catch (e) {
      toast.error('일시적인 오류로 클립보드에 실패했습니다.');
      // toast 메세지 띄어주기
    } finally {
      setModal('');
    }
  };

  const onClickFaceBook = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${GazaURL}`);
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
        <IconBox
          onClick={onClickInsta}
          name="인스타그램"
          iconsrc={InstaIcon.src}
        />
        <IconBox
          onClick={onClickFaceBook}
          name="페이스북"
          iconsrc={FaceIcon.src}
        />
        <IconBox
          onClick={onClickKakao}
          name="카카오톡"
          iconsrc={KakaoIcon.src}
        />
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
