import React from 'react';
import Comment from '@/component/Section_Message/Attom/Comment';
import styles from './index.module.scss';

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
  {
    index: 6,
    nick: '진',
    date: '2024.03.01',
    isLike: true,
    onClick: () => {
      console.log('hi2');
    },
    content: '콘텐츠 내용입니다.',
    isDonate: true,
  },
  {
    index: 7,
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

const Comments = () => {
  return (
    <div className={styles.commentLayout}>
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
  );
};

export default Comments;
