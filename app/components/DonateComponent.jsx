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
const PriceInputBox = styled(Box)`
  display: flex;
`;

const donateSection = ({ mode }) => {
  const [page, setPage] = useState(0);

  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [price, setPrice] = useState(0);
  const [disablePrcie, setDisablePrice] = useState(false);
  const [priceButtonText, setPriceButtonText] = useState('결정하기');
  const paymentWidgetRef = useRef();
  const paymentMethodsWidgetRef = useRef();

  // pageButton
  const onClickNext = () => {
    setPage(prev => prev + 1);
  };
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
      <ModalContent sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <ModalHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box color="teal" fontSize="sm">
            {mode === 'donate' ? '기부' : '응원'}
          </Box>
          <Heading size="md">응원 메세지 입력창(기부)</Heading>
          <Box />
        </ModalHeader>
        <ModalCloseButton />
        <FormControl as="fieldset">
          <ModalBody>
            <Stack mt="6" spacing="3">
              <Textarea
                value={content}
                onChange={e => {
                  setContent(e.target.value);
                }}
                placeholder="내용을 입력하세요"
                mb={2} // 하단 마진 추가
                resize="none"
              />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ' 1fr 1fr',
                  columnGap: '20px',
                }}
              ></Box>
            </Stack>
          </ModalBody>
          <Divider />
          <ModalFooter
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Input
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
              variant="outline"
              placeholder="닉네임"
              width="200px"
            />
            <Button onClick={onClickNext} variant="solid" colorScheme="blue">
              보내기
            </Button>
          </ModalFooter>
        </FormControl>
      </ModalContent>
    );
  } else if (page === 1) {
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
          <div id="payment-widget"></div>
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
