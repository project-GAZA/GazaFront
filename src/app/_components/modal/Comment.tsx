'use clients';

// test_section_3 : 응원 메시지 입력창

import { FormEvent, useState } from 'react';
import { FormControl } from '@chakra-ui/react';

import { propsTypes } from '@/types';
import useCustomToast from '@/hooks/useCustomToast';
import Modal from './modal.style';

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
  const toast = useCustomToast();

  const CheckValid = (user: string, text: string): boolean => {
    if (user.length < 2) {
      toast.createAlertMessaeg('닉네임은 2자 이상 입력해주세요');
      return false;
    }
    if (user.length > 8) {
      toast.createAlertMessaeg('닉네임은 8자 이하 입력해주세요');
      return false;
    }
    if (text.length === 0) {
      toast.createAlertMessaeg('내용을 입력해주세요.');
      return false;
    }
    return true;
  };

  const onSubmitComment = (e: FormEvent): void => {
    e.preventDefault();
    if (!CheckValid(username, content)) return;
    if (mode === 'Comment') {
      if (onSubmitForm) onSubmitForm(content, username);
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
    <Modal.CommentModalWrapper>
      <Modal.CommentModalHeader>
        <Modal.CommentModalHeaderText>
          {ModalText.CommentHeader}
        </Modal.CommentModalHeaderText>
      </Modal.CommentModalHeader>
      <Modal.ModalCloseIcon width={12} height={12} />
      <form onSubmit={onSubmitComment}>
        <FormControl as="fieldset">
          <Modal.CommentModalBody>
            <Modal.CommentModalInput
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              placeholder={ModalText.CommentInputPlaceholder}
              mb={2} // 하단 마진 추가
              resize="none"
            />
            <Modal.ModalCommentAlertText
              dangerouslySetInnerHTML={{ __html: ModalText.CommentInfoText }}
            />
          </Modal.CommentModalBody>
          <Modal.CommentModalInputNickname
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder={ModalText.CommentInputNickPlaceholder}
          />
          <Modal.CommentModalSubmit
            type="submit"
            variant="solid"
            colorScheme="blue"
          >
            {mode === 'Comment'
              ? ModalText.CommentButtonText
              : ModalText.DonateCommentButtonText}
          </Modal.CommentModalSubmit>
        </FormControl>
      </form>
    </Modal.CommentModalWrapper>
  );
};

export default CommentModal;
