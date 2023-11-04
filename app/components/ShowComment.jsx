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

// ★ API URL 변경할 것! 
const API_URL = 'http://13.124.123.16:8080/api/home';

// (JSONPlaceholder) 더미 API 사용 -> 서버 통신 없이 UI 확인 가능
// const API_URL = 'https://jsonplaceholder.typicode.com/comments';


const ShowComment = () => {

  // DB에서 GET하면 : [{content, createDt, likeCount, username}..]
  // messages 안에서 content, likeCount, usename 참고할 것

  const [messages, setMessages] = useState([]); 

  useEffect(()=>{
    async function fetchComments() {
      try{
        const response = await axios.get(API_URL);
        setMessages(response.data); // 응답 데이터를 messages에 저장 
      } catch(error){
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
  const handleLike = async (messageId) => {
    try{
      await axios.post(`${API_URL}/like/${messageId}`); // 좋아요 요청
      // 좋아요 수 업데이트 로직
      setMessages(messages.map((message) => {
        message.createDt === messageId
        ? { ...message, likeCount : message.likeCount + 1}
        : message
      }));
    } catch(error){
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
      <Card sx={{ margin: '0 auto' }}>
        <CardHeader>
          <Heading size="md" textAlign="center">응원 메시지</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {/* 테스트 코드 */}


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
                  <Text sx={{ color: 'gray' }}>좋아요: {message.likeCount}</Text>
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
