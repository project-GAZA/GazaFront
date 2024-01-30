'use clients';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import { dataTypes } from '@/types';
import { fetchLikeCountUp, fetchReportCountUp } from '@/utils/api';
import useCustomToast from '@/hooks/useCustomToast';

import GiftIcon from '@/assets/svg/gifticon.svg';
import styles from './MessageComponent.module.scss';
// eslint-disable-next-line import/order
import { Box, Text } from '@chakra-ui/react';

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
    <Box className={styles.oneCommentWrapper}>
      <Box className={styles.oneCommentHeader}>
        <Box className={styles.oneCommentHeaderLeft}>
          <Text className={styles.nickName}>{message.username} 님</Text>
          <Text className={styles.date}>{message.createDt.slice(0, 10)}</Text>
          {message.donateType === 'donate' && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="선물아이콘"
              src={GiftIcon.src}
              className={styles.giftIcon}
              width={19}
              height={19}
            />
          )}
        </Box>
        <Box className={styles.oneCommentHeaderRight}>
          <FaHeart onClick={onClickLike} color="red" />
          <Text className={styles.likeCountText}>{like}</Text>
          <Text className={styles.report} onClick={onClickReport}>
            신고하기
          </Text>
        </Box>
      </Box>
      <Box className={styles.oneCommentContent}>{message.content}</Box>
    </Box>
  );
};

export default MessageComponent;
