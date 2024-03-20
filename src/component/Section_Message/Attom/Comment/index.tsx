import React from 'react';
import styles from './index.module.scss';

export interface CommentType {
  index: number;
  nick: string;
  date: string;
  isLike: boolean;
  onClick: () => void;
  content: string;
  isDonate: boolean;
}

const Comment = ({
  index,
  nick,
  date,
  isLike,
  onClick,
  content,
  isDonate,
}: CommentType) => {
  return (
    <div>
      {isDonate && (
        <div className={styles.donateContainer}>
          <div className={styles.gift}>
            <div className={styles.gift_icon} />
          </div>
          <p className={styles.donateText}>{index}번째후원자</p>
        </div>
      )}

      <div className={styles.commentLayout}>
        <div className={styles.topWrapper}>
          <div className={styles.leftContainer}>
            <p className={styles.nick}>{nick}님</p>
            <p className={styles.date}>{date}</p>
          </div>

          <div className={styles.rightContainer}>
            <div
              className={isLike ? styles.heart_active : styles.heart_unactive}
            />
            <button type="button" className={styles.call}>
              신고하기
            </button>
          </div>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
