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
} from './component.style';
import { MessageType } from '@/types';

const MessageComponent = ({ message }: { message: MessageType }) => {
  return (
    <OneCommentWrapper key={message.username}>
      <Box>
        <OneCommentHeaderLeft>
          <NickName>{message.username} 님</NickName>
          <Date>{message.createDt.slice(0, 10)}</Date>
        </OneCommentHeaderLeft>
        <OneCommentHeaderRight>
          {message.likeCount ? <CiHeart /> : <FaHeart color="red" />}
          <Report>신고하기</Report>
        </OneCommentHeaderRight>
      </Box>
      <OneCommentContent>{message.content}</OneCommentContent>
    </OneCommentWrapper>
  );
};
export default MessageComponent;
