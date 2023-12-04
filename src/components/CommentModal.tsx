'use clients';

// test_section_3 : 응원 메시지 입력창

import { useState } from 'react';
import {
  useToast,
  Text,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  Button,
  Input,
  FormControl,
  Box,
} from '@chakra-ui/react';

const InputComment = ({
  onClose,
  onSubmitForm,
  mode = 'Comment',
  setSaveInfo,
  setPage,
}) => {
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const toast = useToast();

  const CheckValid = () => {
    if (username.length < 2) {
      toast({
        position: 'bottom-center',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            닉네임은 2자 이상 입력해주세요
          </Box>
        ),
      });
      return false;
    }
    if (username.length > 8) {
      toast({
        position: 'bottom-center',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            닉네임은 8자 이하로 입력해주세요
          </Box>
        ),
      });
      return false;
    }
    if (content.length === 0) {
      toast({
        position: 'bottom-center',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            내용을 입력해주세요.
          </Box>
        ),
      });
      return false;
    }
    return true;
  };
  const onSubmitComment = e => {
    e.preventDefault();
    if (!CheckValid()) return;
    if (mode === 'Comment') {
      onSubmitForm(content, username);
      onClose();
    } else {
      setSaveInfo({
        content,
        username,
      });
      setPage(1);
    }
  };

  return (
    <ModalContent className="CommentModalWrapper">
      <ModalHeader className="CommentModalHeader">
        <Text className="CommentModalHeaderText">응원메세지 한 줄 보내기</Text>
      </ModalHeader>
      <ModalCloseButton className="ModalCloseIcon" width={12} height={12} />
      <form onSubmit={onSubmitComment}>
        <FormControl as="fieldset">
          <ModalBody className="CommentModalBody">
            <Textarea
              className="CommentModalInput"
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              placeholder="응원메세지를 입력해주세요."
              mb={2} // 하단 마진 추가
              resize="none"
            />
            <Text className="ModalCommentAlertText">
              ”어린이들에게 전하는 따뜻한 응원의 말 남겨주세요!
              <br />
              나쁜 말은 피하고, 따뜻한 말로 마음을 전해주세요.
              <br />
              (부적절한 내용은 삭제될 수 있습니다.)”
              <br />
            </Text>
          </ModalBody>
          <Input
            className="CommentModalInputNickname"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder="작성자를 입력해주세요."
          />
          <Button
            className="CommentModalSubmit"
            type="submit"
            variant="solid"
            colorScheme="blue"
          >
            {mode === 'Comment' ? '보내기' : '다음으로'}
          </Button>
        </FormControl>
      </form>
    </ModalContent>
  );
};

export default InputComment;
