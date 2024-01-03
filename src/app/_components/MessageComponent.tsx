'use clients';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import { dataTypes } from '@/types';
import { fetchLikeCountUp, fetchReportCountUp } from '@/utils/api';
import useCustomToast from '@/hooks/useCustomToast';

import GiftIcon from '@/assets/svg/gifticon.svg';
import Component from './component.style';

const MessageComponent = ({ message }: { message: dataTypes.MessageType }) => {
  const [like, setLike] = useState(message.likeCount);
  const [likeClicked, setLikeClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const toast = useCustomToast();

  const onClickLike = async () => {
    if (likeClicked) {
      toast.createAlertMessaeg('이미 좋아요를 눌렀습니다!');
      return;
    }
    setLikeClicked(true);
    const res = await fetchLikeCountUp(message.messageId);
    if (res !== 0) {
      setLike(prev => prev + 1);
    }
  };

  const onClickReport = async () => {
    if (reportClicked) {
      toast.createAlertMessaeg('이미 신고하기를 눌렀습니다!');
      return;
    }
    setReportClicked(true);
    await fetchReportCountUp(message.messageId);
  };

  return (
    <Component.OneCommentWrapper key={message.username}>
      s
      <Component.OneCommentHeader>
        <Component.OneCommentHeaderLeft>
          <Component.NickName>{message.username} 님</Component.NickName>
          <Component.Date>{message.createDt.slice(0, 10)}</Component.Date>
          {message.donateType === 'donate' && (
            <Component.GiftIcon
              alt="선물아이콘"
              src={GiftIcon.src}
              width={19}
              height={19}
            />
          )}
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
