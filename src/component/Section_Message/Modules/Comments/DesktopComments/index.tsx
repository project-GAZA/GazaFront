import React from 'react';
import { MessageType } from '@/types/dataType';
import Comment from '@/component/Section_Message/Attom/Comment';
import styles from './index.module.scss';

const Comments = ({ comments }: { comments: MessageType[] }) => {
  return (
    <div className={styles.commentLayout}>
      {comments.map(v => {
        return (
          <Comment
            like_count={v.like_count}
            key={v.message_id}
            index={v.message_id}
            nick={v.username}
            date={v.created_dt}
            isLike={v.user_liked}
            content={v.content}
            isDonate={false}
          />
        );
      })}
    </div>
  );
};

export default Comments;
