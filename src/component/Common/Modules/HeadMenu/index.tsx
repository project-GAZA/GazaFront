import React from 'react';
import Button from '@/component/Common/Attom/Button';
import ShareLang from '@/component/Common/Attom/ShareLang';
import Menus from '@/component/Common/Attom/Menus';
import scrollTo from '@/utils/scroll';

import { useSetRecoilState } from 'recoil';
import { modalState } from '@/store/modalState';
import styles from './index.module.scss';

interface HeadMenuProp {
  msgRef: React.RefObject<HTMLDivElement>;
}

const HeadMenu = ({ msgRef }: HeadMenuProp) => {
  const setModal = useSetRecoilState(modalState);
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
      click: () => {},
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
              setModal('direct');
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
