import React from 'react';
import { MessageType } from '@/types/dataType';
import Comment from '@/component/Section_Message/Attom/Comment';
import styles from './index.module.scss';

const Comments = ({ comments }: { comments: MessageType[] }) => {
  return (
    <div className={styles.commentLayout}>
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
  );
};

export default Comments;
