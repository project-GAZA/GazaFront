import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Comment from '@/component/Section_Message/Attom/Comment';
import CloseSquareBlack from '@public/assets/svg/Close_square_black.svg';
import styles from './index.module.scss';

/* Todo 분리 - Drawer */

const temp = [
  {
    index: 1,
    nick: '주경진',
    date: '2024.03.04',
    isLike: true,
    onClick: () => {
      console.log('hi');
    },
    content: '콘텐츠 내용입니다.',
    isDonate: true,
  },
  {
    index: 2,
    nick: '진',
    date: '2024.03.01',
    isLike: true,
    onClick: () => {
      console.log('hi2');
    },
    content: '콘텐츠 내용입니다.',
    isDonate: false,
  },
  {
    index: 3,
    nick: '주진',
    date: '2024.03.03',
    isLike: false,
    onClick: () => {
      console.log('hi1');
    },
    content: '콘텐츠입니다.',
    isDonate: false,
  },
  {
    index: 4,
    nick: '진',
    date: '2024.03.01',
    isLike: true,
    onClick: () => {
      console.log('hi2');
    },
    content: '콘텐츠 내용입니다.',
    isDonate: false,
  },
  {
    index: 5,
    nick: '진',
    date: '2024.03.01',
    isLike: true,
    onClick: () => {
      console.log('hi2');
    },
    content: '콘텐츠 내용입니다.',
    isDonate: false,
  },
];

const Drawer = ({ isOpen, onClose, children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setAnimate(true); // 드로어 열기
    } else {
      setAnimate(false); // 애니메이션 후 드로어 숨기기
      timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 300); // 300ms는 transition 지속 시간과 일치해야 합니다.
    }

    return () => {
      clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.drawer} ${animate ? styles.open : ''}`}>
        <div className={styles.closeCont}>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
          >
            <Image
              src={CloseSquareBlack.src}
              alt="닫기버튼"
              width={24}
              height={24}
            />
          </button>
        </div>
        {children}
      </div>
      {animate && (
        <div
          className={styles.background}
          onClick={onClose}
          role="button"
          aria-label="닫기"
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              onClose();
            }
          }}
        />
      )}
    </>
  );
};

const Comments = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={styles.commentLayout}>
      <div className={styles.commentBox}>
        {temp.map(v => (
          <Comment
            key={v.index}
            index={v.index}
            nick={v.nick}
            date={v.date}
            isLike={v.isLike}
            content={v.content}
            onClick={v.onClick}
            isDonate={v.isDonate}
          />
        ))}
      </div>
      <div className={styles.buttonBox}>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={styles.buttonCont}
        >
          20+ 응원 메세지 보기
        </button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className={`${styles.commentDrawer} ${styles.commentBox}`}>
          {temp.map(v => (
            <Comment
              key={v.index}
              index={v.index}
              nick={v.nick}
              date={v.date}
              isLike={v.isLike}
              content={v.content}
              onClick={v.onClick}
              isDonate={v.isDonate}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Comments;
