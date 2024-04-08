import React from 'react';
import Button from '@/component/Common/Attom/Button';
import ShareLang from '@/component/Common/Attom/ShareLang';
import Menus from '@/component/Common/Attom/Menus';
import styles from './index.module.scss';

const HeadMenu = () => {
  const menus = [
    { name: '응원 메세지 보기', click: () => {} },
    { name: '프로젝트 더 알아보기', click: () => {} },
  ];
  return (
    <div className={styles.outer}>
      <div className={styles.layout}>
        <ShareLang />
        <Menus menus={menus} />
        <div className={styles.buttonWrapper}>
          <Button height={44} theme="secondary">
            후원하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeadMenu;
