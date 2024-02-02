import React from 'react';
import { useToast, Box } from '@chakra-ui/react';
import { errorToString } from '@/utils/usefull';

const useCustomToast = () => {
  const toast = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createErrorMessage = (error: any): void => {
    toast({
      position: 'bottom',
      render: (): JSX.Element => (
        <Box color="white" p={3} bg="red.500">
          에러내용: {errorToString(error)} <br />
          서버에러가 났습니다 관리자에게 문의해주세요.
        </Box>
      ),
    });
  };

  const successCopyClip = () => {
    toast({
      title: '클립보드에 복사되었습니다!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  const failCopyClip = () => {
    toast({
      title: '클립보드 복사에 실패했습니다.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const createAlertMessaeg = (str: string) => {
    toast({
      position: 'bottom',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          {str}
        </Box>
      ),
    });
  };

  const promiseToast = (asyncfunc: () => Promise<void>) => {
    toast.promise(asyncfunc(), {
      success: { title: '처리완료되었습니다.', description: 'Looks great' },
      error: (e: Error): { title: string; description: string } => {
        return {
          title: '경고',
          description: e.message,
        };
      },
      loading: { title: '서버에서 처리중입니다.', description: 'Please wait' },
    });
  };

  return {
    promiseToast,
    createAlertMessaeg,
    createErrorMessage,
    successCopyClip,
    failCopyClip,
  };
};

export default useCustomToast;
