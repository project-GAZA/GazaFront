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
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  fetchPatchDonate,
  fetchGetMessage,
  fetchPatchMessageType,
} from '@/utils/api';
import useCustomToast from '@/hooks/useCustomToast';

import MessageComponent from '@/app/_components/MessageComponent';

const DonateModifyModal = ({ fetchAndSetData, onClose, donate }) => {
  const toast = useCustomToast();
  const [message, setMessage] = useState(null);
  const [cash, setCash] = useState('');
  const [type, setType] = useState('donate');
  const moneyValid = (money: string) => {
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

  const onClickSubmit = async e => {
    e.preventDefault();
    if (moneyValid(cash)) {
      toast.promiseToast(async () => {
        await fetchPatchDonate(donate.donateId, cash);
        await fetchPatchMessageType(donate.messageId, type);
        await fetchAndSetData();
        onClose();
      });
    }
  };

  const fetchAndSetMessage = async () => {
    try {
      const { data } = await fetchGetMessage(donate.messageId);
      setMessage(data);
      setType(data.donateType);
      setCash(donate.amount);
    } catch (err: any) {
      toast.createErrorMessage(
        `메세지를 불러올 수 없습니다.${err.data.message}`,
      );
    }
  };

  useEffect(() => {
    fetchAndSetMessage();
  }, []);
  if (!message) return null;
  return (
    <ModalContent>
      <ModalHeader>{`토스아이디:${donate.tossId} 메세지아이디:${donate.messageId}`}</ModalHeader>
      <ModalCloseButton />
      <MessageComponent message={message} />
      <form onSubmit={onClickSubmit}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>수정할 금액입력</FormLabel>
            <Input
              value={cash}
              onChange={e => setCash(e.target.value)}
              type="number"
              placeholder="금액 입력"
            />
            <RadioGroup onChange={setType} value={type}>
              <Stack direction="column">
                <Radio value="donate">donate</Radio>
                <Radio value="message">message</Radio>
              </Stack>
            </RadioGroup>
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
