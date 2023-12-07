'use clients';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import {
  NickName,
  OneCommentWrapper,
  OneCommentHeaderRight,
  OneCommentHeaderLeft,
  Date,
  OneCommentContent,
  Report,
  OneCommentHeader,
  LikeCountText,
} from './component.style';
import { MessageType } from '@/types';
import { fetchLikeCountUp, fetchReportCountUp } from '@/utils/api';

const MessageComponent = ({ message }: { message: MessageType }) => {
  const [like, setLike] = useState(message.likeCount);
  const [report, setReport] = useState(message.cautionCount);

  const onClickLike = async () => {
    const res = await fetchLikeCountUp(message.messageId);
    if (res === 0) alert('이미 좋아요 눌렀습니다!');
    else setLike(prev => prev + 1);
  };
  const onClickReport = async () => {
    const res = await fetchReportCountUp(message.messageId);
    if (res === 0) alert('이미 신고하기 눌렀습니다!');
    else setReport(prev => prev + 1);
  };
  return (
    <OneCommentWrapper key={message.username}>
      <OneCommentHeader>
        <OneCommentHeaderLeft>
          <NickName>{message.username} 님</NickName>
          <Date>{message.createDt.slice(0, 10)}</Date>
        </OneCommentHeaderLeft>
        <OneCommentHeaderRight>
          <FaHeart onClick={onClickLike} color="red" />
          <LikeCountText>{like}</LikeCountText>
          <Report onClick={onClickReport}>신고하기</Report>
          <LikeCountText>{report}</LikeCountText>
        </OneCommentHeaderRight>
      </OneCommentHeader>
      <OneCommentContent>{message.content}</OneCommentContent>
    </OneCommentWrapper>
  );
};
export default MessageComponent;
