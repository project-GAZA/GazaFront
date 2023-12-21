'use clients';

// test_section_3 : 응원 메시지 입력창

import { FormEvent, useState } from 'react';
import { useToast, FormControl, Box } from '@chakra-ui/react';

import { propsTypes } from '@/types';
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

const CommentModal = ({
  onClose,
  onSubmitForm,
  mode = 'Comment',
  setSaveInfo,
  setPage,
  ModalText,
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
        <CommentModalHeaderText>
          {ModalText.CommentHeader}
        </CommentModalHeaderText>
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
              placeholder={ModalText.CommentInputPlaceholder}
              mb={2} // 하단 마진 추가
              resize="none"
            />
            <ModalCommentAlertText
              dangerouslySetInnerHTML={{ __html: ModalText.CommentInfoText }}
            />
          </CommentModalBody>
          <CommentModalInputNickname
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder={ModalText.CommentInputNickPlaceholder}
          />
          <CommentModalSubmit type="submit" variant="solid" colorScheme="blue">
            {mode === 'Comment'
              ? ModalText.CommentButtonText
              : ModalText.DonateCommentButtonText}
          </CommentModalSubmit>
        </FormControl>
      </form>
    </CommentModalWrapper>
  );
};

export default CommentModal;
