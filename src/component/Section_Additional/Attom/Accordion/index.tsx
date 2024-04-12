import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import MinusIcon from 'public/assets/svg/minusIcon.svg';
import PlusIcon from 'public/assets/svg/plusIcon.svg';
import styles from './index.module.scss';

interface TitleProp {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: TitleProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<string>('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);
  return (
    <div className={styles.layout}>
      <div className={styles.topBox}>
        <h1>{title}</h1>
        <button onClick={() => setIsOpen(prev => !prev)}>
          <Image
            src={isOpen ? MinusIcon.src : PlusIcon.src}
            alt="설명토글버튼아이콘"
            width={32}
            height={32}
          />
        </button>
      </div>
      <div
        ref={contentRef}
        style={{
          paddingTop: contentHeight === '0px' ? '0px' : '16px',
          overflow: 'hidden',
          maxHeight: `${contentHeight}`,
          transition: 'max-height 0.5s ease,padding-top 0.5s ease',
        }}
      >
        <p className={styles.contentTypo}>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
