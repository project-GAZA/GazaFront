'use clients';
// test_section_3 : 응원 메시지 입력창

import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import {
  Heading,
  Stack,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  ModalFooter,
  Button,
  Input,
  Box,
  Divider,
  FormControl,
} from '@chakra-ui/react';

const postComment = async (content, username) => {
  const response = await fetch('http://api.peace-in-gaza.kr:8080/api/message', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      content,
      username,
    }),
  });
  return response.status;
};

const InputComment = ({ mode, onClose }) => {
  const toast = useToast();
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [disable, setDisable] = useState(false);

  const SubmitForm = e => {
    e.preventDefault();
    toast.promise(postComment(content, username), {
      success: { title: '댓글작성완료', description: 'Looks great' },
      error: {
        title: '서버에 에러가 났습니다.',
        description: 'Something wrong',
      },
      loading: { title: '서버에 전송중입니다.', description: 'Please wait' },
    });
    setDisable(true);
    onClose();
  };

  return (
    <ModalContent sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <ModalHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box color="teal" fontSize="sm">
          {mode === 'donate' ? '기부' : '응원'}
        </Box>
        <Heading size="md">응원 메세지 입력창</Heading>
        <Box />
      </ModalHeader>
      <ModalCloseButton />
      <form onSubmit={SubmitForm}>
        <FormControl as="fieldset">
          <ModalBody>
            <Stack mt="6" spacing="3">
              <Textarea
                value={content}
                onChange={e => {
                  setContent(e.target.value);
                }}
                placeholder="내용을 입력하세요"
                mb={2} // 하단 마진 추가
                resize="none"
              />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ' 1fr 1fr',
                  columnGap: '20px',
                }}
              ></Box>
            </Stack>
          </ModalBody>
          <Divider />
          <ModalFooter
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Input
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
              variant="outline"
              placeholder="닉네임"
              width="200px"
            />
            <Button
              isDisabled={disable}
              type="submit"
              variant="solid"
              colorScheme="blue"
            >
              보내기
            </Button>
          </ModalFooter>
        </FormControl>
      </form>
    </ModalContent>
  );
};

export default InputComment;
