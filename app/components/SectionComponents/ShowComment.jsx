'use clients';

import React, { useState, useEffect } from 'react';
import {
  Heading,
  Divider,
  Stack,
  Box,
  Text,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaHeart, FaSearchengin } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

import useWindowSize from '../../hooks/useWindowSize';

const LikeWrapper = styled(IconButton)`
  height: 20px;
  min-width: 20px;
  width: 20px;
  padding: 0px;
  & :hover {
    background: ${props => props.actBtn};
  }
`;
const CommentHeader = styled(Box)`
  display: flex;
  alignitems: center;
  gap: 5px;
  & button {
    background: ${props => props.actBtn};
  }
`;

const cardBackground = ['#343540', '#23242b'];

const ShowComment = () => {
  const [messages, setMessages] = useState([]);

  const getComments = async () => {
    const response = await fetch(
      'http://localhost:8080/api/home?page=0&size=100&sort=new',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setMessages(data);
    }
    return;
  };

  const handlePopupScroll = event => {
    // 이벤트 전파를 막음
    event.preventDefault();
    // event.stopPropagation();
  };

  const size = useWindowSize();
  useEffect(() => {
    // getComments();
  }, []);

  return (
    <Box className="ThirdSection" onScroll={handlePopupScroll}>
      <Box className="TitleBox">
        <Text className="ThirdHeaderText">
          <strong className="ThirdHeaderTextStrong">전세계 각지에서</strong>
          <br />
          많은 사람들이 응원글 작성에
          <br /> 참여하고 있어요
        </Text>
      </Box>
      <Box className="CommentWrapper">
        <Box className="CommentHeader">
          <Box className="SortOn CommentSortButton">Best</Box>
          <Divider height="17px" orientation="vertical" />
          <Box className="CommentSortButton">New</Box>
          <InputGroup className="Search">
            <Input
              className="SearchInput"
              variant="unstyled"
              placeholder="닉네임 검색"
            />
            <InputRightElement className="SearchIcon">
              <FaSearchengin color="white" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Stack className="ShowCommentWrapper">
          {messages.map((v, index) => (
            <Box className="OneCommentWrapper" key={v.username}>
              <Box className="OneCommentHeader">
                <Box className="OneCommentHeaderLeft">
                  <Text className="NickName">{v.username} 님</Text>
                  <Text className="Date">{v.create_dt}</Text>
                </Box>
                <Box className="OneCommentHeaderRight">
                  {v.likeHeat ? <CiHeart /> : <FaHeart color="red" />}
                  <Text className="Report">신고하기</Text>
                </Box>
              </Box>
              <Box className="OneCommentContent">{v.content}</Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ShowComment;
