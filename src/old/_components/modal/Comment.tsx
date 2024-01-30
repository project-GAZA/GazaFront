'use clients';

import { FormEvent, useState } from 'react';
import { FormControl } from '@chakra-ui/react';

import { fetchPostCommnet } from '@/utils/api';
import { idValid } from '@/utils/usefull';
import useCustomToast from '@/hooks/useCustomToast';
import { propsTypes } from '@/types';
import Modal from './modal.style';

const CommentModal = ({
  onClose,
  fetchMessage,
  mode = 'Comment',
  setSaveInfo,
  setPage,
  ModalText,
}: propsTypes.CommentPropType) => {
  const [content, setContent] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const toast = useCustomToast();

  const SubmitAndSetMessage = async (detail: string, user: string) => {
    await fetchPostCommnet(detail, user); // Comment를 입력한다.
    await fetchMessage('', 'new', 100, 0); // Comment 목록을 불러온다.
  };

  const onSubmit = (detail: string, user: string) => {
    toast.promiseToast(async () => {
      await SubmitAndSetMessage(detail, user);
    });
  };

  const onSubmitComment = (e: FormEvent): void => {
    e.preventDefault();
    if (idValid(toast, username, content)) {
      if (mode === 'Comment') {
        onSubmit(content, username);
        onClose();
      } else {
        if (setSaveInfo)
          setSaveInfo({
            content,
            username,
          });
        if (setPage) setPage(1);
      }
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
