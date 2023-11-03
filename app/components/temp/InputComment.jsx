'use clients';

import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import {
  Modal,
  Heading,
  Stack,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
  Textarea,
  ModalFooter,
  ButtonGroup,
  Button,
  Input,
  Box,
  FormControl,
} from '@chakra-ui/react';

const postComment = async ({ content, username }) => {
  const response = await fetch('http://13.124.123.16:8080/api/message', {
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

const InputComment = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [nation, setNation] = useState('');

  const SubmitForm = async e => {
    e.preventDefault();
    console.log();
    toast.promise(postComment(content, username), {
      success: { title: '댓글작성완료', description: 'Looks great' },
      error: {
        title: '서버에 에러가 났습니다.',
        description: 'Something wrong',
      },
      loading: { title: '서버에 전송중입니다.', description: 'Please wait' },
    });
    onClose();
  };

  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent sx={{ margin: '0 auto' }} maxW="sm">
        <ModalHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button colorScheme="teal" size="xs">
            기부
          </Button>
          <Heading size="md">응원 메세지 입력창</Heading>
          <Box />
        </ModalHeader>
        <form onSubmit={SubmitForm}>
          <FormControl as="fieldset">
            <ModalBody>
              <Stack mt="6" spacing="3">
                <Textarea
                  value={content}
                  onChange={e => {
                    setContent(e.target.value);
                  }}
                  placeholder="댓글을 입력하세요"
                  mb={2} // 하단 마진 추가
                  resize="none"
                />
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: ' 1fr 1fr',
                    columnGap: '20px',
                  }}
                >
                  <Input
                    value={nation}
                    onChange={e => {
                      setNation(e.target.value);
                    }}
                    variant="outline"
                    placeholder="나라입력"
                  />
                  <Input
                    value={username}
                    onChange={e => {
                      setUsername(e.target.value);
                    }}
                    variant="outline"
                    placeholder="닉네임"
                  />
                </Box>
              </Stack>
            </ModalBody>
            <Divider />
            <ModalFooter>
              <Box>
                <ButtonGroup spacing="2">
                  <Button type="submit" variant="solid" colorScheme="blue">
                    보내기
                  </Button>
                </ButtonGroup>
              </Box>
            </ModalFooter>
          </FormControl>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default InputComment;
