'use client';

import React from 'react';
import Button from '@/component/Common/Attom/Button';
import ShareLang from '@/component/Common/Attom/ShareLang';
import Menus from '@/component/Common/Attom/Menus';
import scrollTo from '@/utils/scroll';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { deviceState, modalState } from '@/store';
import styles from './index.module.scss';

interface HeadMenuProp {
  msgRef: React.RefObject<HTMLDivElement> | null;
  infoRef: React.RefObject<HTMLDivElement> | null;
}

const HeadMenu = ({ msgRef, infoRef }: HeadMenuProp) => {
  const setModal = useSetRecoilState(modalState);
  const device = useRecoilValue(deviceState);
  const menus = [
    {
      name: '응원 메세지 보기',
      click: () => {
        if (msgRef && msgRef.current) {
          scrollTo(msgRef);
        }
      },
    },
    {
      name: '프로젝트 더 알아보기',
      click: () => {
        if (infoRef && infoRef.current) {
          scrollTo(infoRef);
        }
      },
    },
  ];
  return (
    <div className={styles.outer}>
      <div className={styles.layout}>
        <ShareLang />
        <Menus menus={menus} />
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              if (device === 'mobile') {
                setModal('direct');
              } else {
                setModal('desktop');
              }
            }}
            height={44}
            theme="secondary"
          >
            후원하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeadMenu;
