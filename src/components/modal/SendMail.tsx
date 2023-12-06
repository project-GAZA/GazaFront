'use clients';

// test_section_3 : 응원 메시지 입력창

import { useState } from 'react';
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
  Box,
  Divider,
  FormControl,
} from '@chakra-ui/react';

const SendMail = () => {
  const [content, setContent] = useState('');

  return (
    <ModalContent sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <ModalHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box color="teal" fontSize="sm">
          문의
        </Box>
        <Heading size="md">불편사항 또는 개선사항 입력해주세요!</Heading>
        <Box />
      </ModalHeader>
      <ModalCloseButton />
      <form>
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
              />
            </Stack>
          </ModalBody>
          <Divider />
          <ModalFooter
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button type="submit" variant="solid" colorScheme="blue">
              보내기
            </Button>
          </ModalFooter>
        </FormControl>
      </form>
    </ModalContent>
  );
};

export default SendMail;
