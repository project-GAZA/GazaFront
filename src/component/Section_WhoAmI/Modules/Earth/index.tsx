import React from 'react';
import Image from 'next/image';

import Pin from '@/component/Section_WhoAmI/Attom/Pin';

import pinIcon from '@public/assets/svg/pin.svg';
import styles from './index.module.scss';

const Earth = () => {
  return (
    <div className={styles.layout}>
      <Image
        src={pinIcon.src}
        width={51}
        height={69}
        alt="핀"
        style={{ position: 'relative', left: '99px', top: '27px' }}
      />
      <Pin text="# GAZA" posx={105} posy={-5} />
      <Pin text="희망의 메세지를" posx={-45} posy={-10} />
      <Pin text="희망의 메세지를" color="orange" posx={180} posy={-30} />
      <Pin text="전달합니다" posx={23} posy={20} />
      <Pin text="전달합니다" color="orange" posx={-45} posy={0} posz={-1} />
    </div>
  );
};

export default Earth;
