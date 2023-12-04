/* eslint-disable react-hooks/rules-of-hooks */

'use clients';

import { useEffect, useState, useRef } from 'react';
import {
  Heading,
  Stack,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  ModalFooter,
  Button,
  Input,
  Box,
  Divider,
  FormControl,
} from '@chakra-ui/react';
import { loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import styled from '@emotion/styled';
import CommentModal from '@/components/CommentModal';

const PriceInputBox = styled(Box)`
  display: flex;
`;

const donateSection = ({ onClose, onSubmitMessage }) => {
  const [page, setPage] = useState(0);

  const [SaveInfo, setSaveInfo] = useState(undefined);
  const [price, setPrice] = useState(0);
  const [disablePrcie, setDisablePrice] = useState(false);
  const [priceButtonText, setPriceButtonText] = useState('결정하기');
  const paymentWidgetRef = useRef();
  const paymentMethodsWidgetRef = useRef();

  // pageButton
  const onClickBack = () => {
    setPage(prev => prev - 1);
  };

  // Click Price Input
  const onClickPrice = () => {
    if (priceButtonText === '결정하기') {
      setDisablePrice(true);
      setPriceButtonText('다시입력하기');
      main();
    } else {
      setDisablePrice(false);
      setPriceButtonText('결정하기');
      document.querySelector('#payment-widget').innerHTML = '';
    }
  };

  const clientKey = 'test_ck_6bJXmgo28ePqp91750NWrLAnGKWx';
  const customerKey = 'aMGlwwOysBBaXhJKMIKMh';

  // 결제위젯 초기화: async/await을 사용하는 경우
  async function main() {
    const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS);
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      price,
    );
    paymentWidgetRef.current = paymentWidget;
    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }
  // 결제하기 버튼
  const onClickPayment = async () => {
    const paymentWidget = paymentWidgetRef.current;
    console.log(new Date());
    try {
      await paymentWidget.requestPayment({
        amount: price,
        orderId: +new Date(),
        orderName: +new Date(),
        customerName: username,
        successUrl: `http://192.168.0.67:8080/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // if (page === 1) main();
  }, [page]);

  if (page === 0) {
    return (
      <CommentModal
        mode="Donate"
        onClose={onClose}
        setSaveInfo={setSaveInfo}
        setPage={setPage}
      />
    );
  }
  if (page === 1) {
    return (
      <ModalContent>
        <ModalHeader
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button onClick={onClickBack} color="teal" fontSize="sm">
            뒤로가기
          </Button>
          <Heading size="md">기부금 입력하고 결제하기(테스트입니다)</Heading>
          <Box />
        </ModalHeader>
        <ModalBody>
          <PriceInputBox>
            <Input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              disabled={disablePrcie}
            />
            <Button onClick={onClickPrice}>{priceButtonText}</Button>
          </PriceInputBox>
          <div id="payment-widget" />
        </ModalBody>
        <Divider />
        <ModalFooter sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={onClickPayment} variant="solid" colorScheme="teal">
            결제하기
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  }
};

export default donateSection;
