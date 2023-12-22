'use clients';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import { dataTypes } from '@/types';
import { fetchLikeCountUp, fetchReportCountUp } from '@/utils/api';
import Component from './component.style';

const MessageComponent = ({ message }: { message: dataTypes.MessageType }) => {
  const [like, setLike] = useState(message.likeCount);

  const onClickLike = async () => {
    const res = await fetchLikeCountUp(message.messageId);
    if (res === 0) alert('이미 좋아요 눌렀습니다!');
    else setLike(prev => prev + 1);
  };
  const onClickReport = async () => {
    const res = await fetchReportCountUp(message.messageId);
    if (res === 0) alert('이미 신고하기 눌렀습니다!');
  };
  return (
    <Component.OneCommentWrapper key={message.username}>
      <Component.OneCommentHeader>
        <Component.OneCommentHeaderLeft>
          <Component.NickName>{message.username} 님</Component.NickName>
          <Component.Date>{message.createDt.slice(0, 10)}</Component.Date>
        </Component.OneCommentHeaderLeft>
        <Component.OneCommentHeaderRight>
          <FaHeart onClick={onClickLike} color="red" />
          <Component.LikeCountText>{like}</Component.LikeCountText>
          <Component.Report onClick={onClickReport}>신고하기</Component.Report>
        </Component.OneCommentHeaderRight>
      </Component.OneCommentHeader>
      <Component.OneCommentContent>
        {message.content}
      </Component.OneCommentContent>
    </Component.OneCommentWrapper>
  );
};

export default MessageComponent;
