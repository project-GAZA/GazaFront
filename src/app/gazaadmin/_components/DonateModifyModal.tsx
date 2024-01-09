import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { fetchPatchDonate } from '@/utils/api';
import useCustomToast from '@/hooks/useCustomToast';

const DonateModifyModal = ({ onClose, donate }) => {
  const toast = useCustomToast();

  const moneyValid = money => {
    if (money.length === 0) {
      toast.createErrorMessage('금액을 입력해주세요');
      return false;
    }
    if (Number(money) >= 1000001) {
      toast.createErrorMessage('100만원 이하로 입력해주세요');
      return false;
    }
    return true;
  };

  const [value, setValue] = useState('');
  const onClickSubmit = async e => {
    e.preventDefault();
    if (moneyValid(value)) {
      toast.promiseToast(async () => {
        await fetchPatchDonate(donate.donateId, value);
      });
    }
    onClose();
  };
  return (
    <ModalContent>
      <ModalHeader>{`토스아이디:${donate.tossId} 메세지아이디:${donate.messageId}`}</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={onClickSubmit}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>수정할 금액입력</FormLabel>
            <Input
              value={value}
              onChange={e => setValue(e.target.value)}
              type="number"
              placeholder="금액 입력"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default DonateModifyModal;
