'use clients';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

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

const MessageComponent = ({ message }: { message: MessageType }) => {
  return (
    <OneCommentWrapper key={message.username}>
      <OneCommentHeader>
        <OneCommentHeaderLeft>
          <NickName>{message.username} 님</NickName>
          <Date>{message.createDt.slice(0, 10)}</Date>
        </OneCommentHeaderLeft>
        <OneCommentHeaderRight>
          <FaHeart color="red" />
          <LikeCountText>{message.likeCount}</LikeCountText>
          <Report>신고하기</Report>
          <LikeCountText>{message.cautionCount}</LikeCountText>
        </OneCommentHeaderRight>
      </OneCommentHeader>
      <OneCommentContent>{message.content}</OneCommentContent>
    </OneCommentWrapper>
  );
};
export default MessageComponent;
