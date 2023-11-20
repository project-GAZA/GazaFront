'use clients';
// test_section_4 : 응원 메시지 확인 창

import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardHeader,
  Heading,
  Stack,
  Box,
  Text,
  CardBody,
  IconButton,
  InputGroup,
  InputLeftElement,
  Button,
  Icon,
  Input,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaHeart, FaSearch } from 'react-icons/fa';

import useWindowSize from '../hooks/useWindowSize';

// JANG: API URL 변경
const API_URL = '//13.124.123.16:8080/api/home';

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

// GET `/api/home` : [{content, createDt, likeCount, username}..]

const getComments = async () => {
  const response = await fetch('http://13.124.123.16:8080/api/home', {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    setMessages(data);
    console.log(data);
  }
  return;
};

// 좋아요 버튼 핸들러
const handleLike = async messageId => {
  try {
    await axios.post(`${API_URL}/like/${messageId}`); // 좋아요 요청
    // 좋아요 수 업데이트 로직
    setMessages(
      messages.map(message => {
        message.createDt === messageId
          ? { ...message, likeCount: message.likeCount + 1 }
          : message;
      }),
    );
  } catch (error) {
    console.log(error);
  }
};

const cardBackground = ['#343540', '#23242b'];

// Start Component
const ShowComment = () => {
  const [messages, setMessages] = useState([
    {
      content: '..',
      createDt: '..',
      likeCount: 2,
      username: '주경진진진진진진진진진',
    },
  ]);

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
    <>
      <Card
        className="nonfullpage"
        onScroll={handlePopupScroll}
        sx={{
          backgroundColor: '#23242b',
          display: 'flex',
          maxHeight: '80%',

          flexDirection: 'column', // 내용을 세로로 정렬
          // alignItems: 'center',
          justifyContent: 'flex-start', // 내용을 위에서부터 시작하도록 정렬
          margin: '0 20px',
          overflowY: 'auto', // 세로 스크롤만 허용
        }}
      >
        <CardHeader
          sx={{
            backgroundColor: '#85f9ad',
            height: `${size.width >= 900 ? 45 : 35}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Heading
            sx={{
              fontSize: `${size.width >= 900 ? 18 : 16}px`,
              fontWeight: 700,
            }}
          >
            응원 메시지
          </Heading>
        </CardHeader>

        <CardBody
          sx={{
            padding: '0px',
            overscrollBehavior: 'contain',
            overflowY: 'auto', // CardBody 내부에서 스크롤 가능하도록 설정
          }}
        >
          <Box
            sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '150px', minWidth: '150px' }}>
              <Button sx={{ marginRight: '10px' }} colorScheme="teal" size="sm">
                Best
              </Button>
              <Button colorScheme="teal" size="sm">
                New
              </Button>
            </Box>
            <InputGroup sx={{ minWidth: 130, maxWidth: 300 }}>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.300" />
              </InputLeftElement>
              <Input color="white" type="text" placeholder="Input Nickname" />
            </InputGroup>
          </Box>

          <Stack spacing="0">
            {messages.map((v, index) => (
              <Box
                sx={{ backgroundColor: cardBackground[index % 2] }}
                key={index}
              >
                <Box
                  sx={{
                    padding: '10px',
                  }}
                >
                  <CommentHeader actBtn="red">
                    <Heading size="xs" textAlign="left" color="#2c7ca3">
                      From. {v.username}
                    </Heading>
                    <LikeWrapper
                      isRound={true}
                      variant="solid"
                      backgroundColor="#23242b"
                      color="#eee"
                      colorScheme="red"
                      fontSize="12px"
                      icon={<FaHeart />}
                    />
                    <Text
                      sx={{
                        color: '#babdce',
                        fontSize: '14px',
                        fontWeight: '400',
                      }}
                    >
                      {v.likeCount}
                    </Text>
                  </CommentHeader>
                  <Text
                    pt="2"
                    fontSize="sm"
                    textAlign="left"
                    color="#eee"
                    fontWeight="600"
                  >
                    {v.content}
                  </Text>
                </Box>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ShowComment;
