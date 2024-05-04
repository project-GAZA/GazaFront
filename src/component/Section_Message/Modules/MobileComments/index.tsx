import React, { useEffect, useState } from 'react';
import { MessageType } from '@/types/dataType';
import Image from 'next/image';
import Comment from '@/component/Section_Message/Attom/Comment';
import CloseSquareBlack from '@public/assets/svg/Close_square_black.svg';
import styles from './index.module.scss';

const Drawer = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer: any;
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

const Comments = ({ comments }: { comments: MessageType[] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={styles.commentLayout}>
      <div className={styles.commentBox}>
        {comments.map(v => (
          <Comment
            key={v.id}
            index={v.id}
            nick={v.username}
            date={v.created_dt}
            isLike={false}
            content={v.content}
            isDonate={false}
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
          {comments.map(v => (
            <Comment
              key={v.id}
              index={v.id}
              nick={v.username}
              date={v.created_dt}
              isLike={false}
              content={v.content}
              isDonate={false}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Comments;
