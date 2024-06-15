import React from 'react';
import useRefreshMessage from '@/hooks/useRefreshMessage';
import instance from '@/utils/clientaxios';
import styles from './index.module.scss';

export interface CommentType {
  index: number;
  nick: string;
  date: string;
  isLike: boolean;
  content: string;
  isDonate: boolean;
  like_count: number;
}

const Comment = ({
  index,
  nick,
  date,
  isLike,
  content,
  isDonate,
  like_count,
}: CommentType) => {
  const refreshMessage = useRefreshMessage();
  const onClickLike = () => {
    instance.post(`like/${index}`).then(res => {
      refreshMessage();
    });
  };

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
            <span className={styles.count}>{like_count}</span>
            <button
              onClick={onClickLike}
              className={isLike ? styles.heart_active : styles.heart_unactive}
            />
          </div>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
