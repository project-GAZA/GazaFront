'use client';

import { Center } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

const FailPage = () => {
  const params = useSearchParams();
  const msg = params.get('message');

  return (
    <Center
      sx={{ height: '100vh', fontSize: '40px' }}
    >{`결제실패사유:${msg}`}</Center>
  );
};

export default FailPage;
