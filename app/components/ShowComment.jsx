'use clients';
// test_section_3 : 응원 메시지 확인 창

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  Heading,
  Stack,
  Box,
  Text,
  CardBody,
  StackDivider,
  Button,
  useToast,
} from '@chakra-ui/react';

// JANG: API URL 변경
const API_URL = 'http://13.124.123.16:8080/api/home';

const ShowComment = () => {
  // GET `/api/home` : [{content, createDt, likeCount, username}..]

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(API_URL);
        setMessages(response.data); // 응답 데이터를 messages에 저장
      } catch (error) {
        // toast({
        //   title: '메시지 불러오기 실패',
        //   description: '메시지를 불러오는데 실패했습니다.',
        //   status: 'error',
        //   duration: 3000,
        //   isClosable: true,
        // })
      }
    }

    fetchComments();
  }, []);

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
      // toast({
      //   title: '좋아요 실패',
      //   description: '좋아요에 실패했습니다.',
      //   status: 'error',
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  return (
    <>
      <Card
        sx={{
          width: '60%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column', // 내용을 세로로 정렬
          // alignItems: 'center',
          justifyContent: 'flex-start', // 내용을 위에서부터 시작하도록 정렬
          margin: '0 auto',
          overflowY: 'auto', // 세로 스크롤만 허용
        }}
      >
        <CardHeader>
          <Heading size="md" textAlign="center">
            응원 메시지
          </Heading>
        </CardHeader>

        <CardBody
          sx={{
            overflowY: 'auto', // CardBody 내부에서 스크롤 가능하도록 설정
          }}
        >
          <Stack divider={<StackDivider />} spacing="4">
            {/* JANG: 테스트용 (이후 지우기!) */}
            {Array.from({ length: 5 }, (_, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    bg: 'gray.200',
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Heading size="xs" textAlign="left">
                    닉네임: nickname_{index}
                  </Heading>
                  <Text pt="2" fontSize="sm" textAlign="left">
                    메시지: message_{index}
                  </Text>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    color="blue"
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    좋아요
                  </Button>
                  <Text sx={{ color: 'gray' }}>좋아요: {index} </Text>
                </Box>
              </Box>
            ))}

            {/* JANG: 실제 메시지들 (이후 이거 사용) */}
            {messages.map((message, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    bg: 'gray.200',
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Heading size="xs" textAlign="left">
                    닉네임: {message.username}
                  </Heading>
                  <Text pt="2" fontSize="sm" textAlign="left">
                    메시지: {message.content}
                  </Text>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    color="blue"
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                    onClick={() => setLikes(message.createDt + 1)}
                  >
                    좋아요
                  </Button>
                  <Text sx={{ color: 'gray' }}>
                    좋아요: {message.likeCount}
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
