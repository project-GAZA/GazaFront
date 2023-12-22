'use client';

import { useState } from 'react';
import { FormControl, ModalBody } from '@chakra-ui/react';
import { dataTypes } from '@/types';
import Modal from './modal.style';

const RegistModal = ({ ModalText }: { ModalText: dataTypes.ModalTextType }) => {
  const [phone, setPhone] = useState('');
  const [tossid, setTossid] = useState('');
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
        <FormControl>
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
      </ModalBody>
    </Modal.RegistModalWrapper>
  );
};

export default RegistModal;
