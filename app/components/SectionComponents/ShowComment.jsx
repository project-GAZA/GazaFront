'use clients';

import React, { useState, useEffect, useRef } from 'react';
import {
  Divider,
  Stack,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { FaHeart, FaSearchengin } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

const ShowComment = () => {
  const [messages, setMessages] = useState([]);
  const newButton = useRef();
  const BestButton = useRef();

  // const size = useWindowSize(); 윈도우 사이즈 조정되면...

  const getComments = async (sort, size = 100, page = 0) => {
    const response = await fetch(
      `/api/message?sort=${sort}&page=${page}&size=${size}`,
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
      setMessages(data);
    }
  };
  useEffect(() => {
    getComments('new');
  }, []);

  const BestClick = e => {
    BestButton.current.classList.add('SortOn');
    newButton.current.classList.remove('SortOn');
    getComments('best');
  };
  const NewClick = e => {
    BestButton.current.classList.remove('SortOn');
    newButton.current.classList.add('SortOn');
    getComments('new');
  };
  return (
    <Box className="ThirdSection">
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
          <Box
            ref={BestButton}
            onClick={BestClick}
            className="SortOn CommentSortButton"
          >
            Best
          </Box>
          <Divider height="17px" orientation="vertical" />
          <Box ref={newButton} onClick={NewClick} className="CommentSortButton">
            New
          </Box>
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
                  <Text className="Date">{v.createDt.slice(0, 10)}</Text>
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
