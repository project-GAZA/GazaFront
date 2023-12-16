'use clients';

// test_section_3 : 응원 메시지 입력창

import { FormEvent, useState } from 'react';
import { useToast, FormControl, Box } from '@chakra-ui/react';

import {
  CommentModalWrapper,
  CommentModalHeader,
  CommentModalHeaderText,
  ModalCloseIcon,
  CommentModalInput,
  CommentModalBody,
  ModalCommentAlertText,
  CommentModalSubmit,
  CommentModalInputNickname,
} from './modal.style';

import { propsTypes } from '@/types';

const CommentModal = ({
  onClose,
  onSubmitForm,
  mode = 'Comment',
  setSaveInfo,
  setPage,
}: propsTypes.CommentPropType) => {
  const [content, setContent] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const toast = useToast();
  const CreateAlertToast = (str: string): void => {
    toast({
      position: 'bottom',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          {str}
        </Box>
      ),
    });
  };

  const CheckValid = (user: string, text: string): boolean => {
    if (user.length < 2) {
      CreateAlertToast('닉네임은 2자 이상 입력해주세요');
      return false;
    }
    if (user.length > 8) {
      CreateAlertToast('닉네임은 8자 이하 입력해주세요');
      return false;
    }
    if (text.length === 0) {
      CreateAlertToast('내용을 입력해주세요.');
      return false;
    }
    return true;
  };

  const onSubmitComment = (e: FormEvent): void => {
    e.preventDefault();
    if (!CheckValid(username, content)) return;
    if (mode === 'Comment') {
      onSubmitForm(content, username);
      onClose();
    } else {
      if (setSaveInfo)
        setSaveInfo({
          content,
          username,
        });
      if (setPage) setPage(1);
    }
  };

  return (
    <CommentModalWrapper>
      <CommentModalHeader>
        <CommentModalHeaderText>응원메세지 한 줄 보내기</CommentModalHeaderText>
      </CommentModalHeader>
      <ModalCloseIcon width={12} height={12} />
      <form onSubmit={onSubmitComment}>
        <FormControl as="fieldset">
          <CommentModalBody>
            <CommentModalInput
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              placeholder="응원메세지를 입력해주세요."
              mb={2} // 하단 마진 추가
              resize="none"
            />
            <ModalCommentAlertText>
              ”어린이들에게 전하는 따뜻한 응원의 말 남겨주세요!
              <br />
              나쁜 말은 피하고, 따뜻한 말로 마음을 전해주세요.
              <br />
              (부적절한 내용은 삭제될 수 있습니다.)”
              <br />
            </ModalCommentAlertText>
          </CommentModalBody>
          <CommentModalInputNickname
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder="작성자를 입력해주세요."
          />
          <CommentModalSubmit type="submit" variant="solid" colorScheme="blue">
            {mode === 'Comment' ? '보내기' : '다음으로'}
          </CommentModalSubmit>
        </FormControl>
      </form>
    </CommentModalWrapper>
  );
};

export default CommentModal;
