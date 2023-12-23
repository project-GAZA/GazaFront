'use client';

import { useState } from 'react';
import { FormControl, ModalBody } from '@chakra-ui/react';
import { propsTypes } from '@/types';
import { fetchPostDonate } from '@/utils/api';
import { idValid, phoneValid } from '@/utils/usefull';
import useCustomToast from '@/hooks/useCustomToast';
import Modal from './modal.style';

const RegistModal = ({
  saveInfo,
  onClose,
  ModalText,
}: propsTypes.RegistModalPropType) => {
  const toast = useCustomToast();
  const [phone, setPhone] = useState('');
  const [tossid, setTossid] = useState('');

  const PostDonateAndComment = async (p, toss, username, content) => {
    await fetchPostDonate(p, toss, username, content);
  };

  const onClickSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (idValid(toast, tossid) && phoneValid(toast, phone)) {
      PostDonateAndComment(phone, tossid, saveInfo.username, saveInfo.content);
      onClose();
    }
  };
  return (
    <Modal.RegistModalWrapper>
      <Modal.CommentModalHeader>
        <Modal.RegistHeaderText>
          {ModalText.RegistHeaderText}
        </Modal.RegistHeaderText>
        <Modal.RegistCloseIcon width={12} height={12} />
      </Modal.CommentModalHeader>
      <ModalBody>
        <Modal.RegistInfoText>{ModalText.RegistInfoText}</Modal.RegistInfoText>
        <form onSubmit={onClickSubmit}>
          <FormControl as="fieldset">
            <Modal.RegistInputBox>
              <Modal.RegistInputLabel>
                {ModalText.RegistPhoneLabel}
              </Modal.RegistInputLabel>
              <Modal.RegistInput
                value={phone}
                type="number"
                onChange={e => {
                  setPhone(e.target.value);
                }}
                placeholder={ModalText.RegistPhonePlaceHolder}
              />
            </Modal.RegistInputBox>
            <Modal.RegistInputBox>
              <Modal.RegistInputLabel>
                {ModalText.RegistTossLabel}
              </Modal.RegistInputLabel>
              <Modal.RegistInput
                value={tossid}
                type="text"
                onChange={e => {
                  setTossid(e.target.value);
                }}
                placeholder={ModalText.RegistTossPlaceHolder}
              />
            </Modal.RegistInputBox>
            <Modal.RegistSubmitButton
              type="submit"
              variant="solid"
              colorScheme="blue"
            >
              {ModalText.RegistButtonText}
            </Modal.RegistSubmitButton>
          </FormControl>
        </form>
      </ModalBody>
    </Modal.RegistModalWrapper>
  );
};

export default RegistModal;
