'use clients';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import { dataTypes } from '@/types';
import { fetchLikeCountUp, fetchReportCountUp } from '@/utils/api';
import Common from './component.style';

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
    <Common.OneCommentWrapper key={message.username}>
      <Common.OneCommentHeader>
        <Common.OneCommentHeaderLeft>
          <Common.NickName>{message.username} 님</Common.NickName>
          <Common.Date>{message.createDt.slice(0, 10)}</Common.Date>
        </Common.OneCommentHeaderLeft>
        <Common.OneCommentHeaderRight>
          <FaHeart onClick={onClickLike} color="red" />
          <Common.LikeCountText>{like}</Common.LikeCountText>
          <Common.Report onClick={onClickReport}>신고하기</Common.Report>
        </Common.OneCommentHeaderRight>
      </Common.OneCommentHeader>
      <Common.OneCommentContent>{message.content}</Common.OneCommentContent>
    </Common.OneCommentWrapper>
  );
};

export default MessageComponent;
