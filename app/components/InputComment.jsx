'use clients';

import {
  Heading,
  Stack,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
  Textarea,
  ModalFooter,
  ButtonGroup,
  Button,
  Box,
} from '@chakra-ui/react';

const ShowComment = () => {
  return (
    <ModalContent sx={{ margin: '0 auto' }} maxW="sm">
      <ModalHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button colorScheme="teal" size="xs">
          기부
        </Button>
        <Heading size="md">응원 메세지 입력창</Heading>
        <Box />
      </ModalHeader>
      <ModalBody>
        <Stack mt="6" spacing="3">
          <Textarea
            placeholder="댓글을 입력하세요"
            mb={2} // 하단 마진 추가
            resize="none"
          />
        </Stack>
      </ModalBody>
      <Divider />
      <ModalFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  );
};

export default ShowComment;
