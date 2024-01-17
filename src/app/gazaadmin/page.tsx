'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button, Text } from '@chakra-ui/react';

import { fetchAdminLogin } from '@/utils/api';
import useCustomToast from '@/hooks/useCustomToast';

const Gazaadmin = () => {
  const navigator = useRouter();
  const [password, setPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const toast = useCustomToast();
  const onClickLogin = async (e: FormEvent, user: string, pwd: string) => {
    e.preventDefault();
    try {
      await fetchAdminLogin(user, pwd);
      if (localStorage.getItem('token')) {
        navigator.push('/gazaadmin/donate');
      }
    } catch (err) {
      toast.createErrorMessage(err);
    }
  };

  return (
    <form
      style={{
        margin: 'auto',
        maxWidth: '800px',
      }}
      onSubmit={e => {
        onClickLogin(e, adminName, password);
      }}
    >
      <Text>어드민페이지로그인</Text>
      <Input
        placeholder="아이디 입력하세요"
        type="text"
        value={adminName}
        onChange={e => setAdminName(e.target.value)}
      />
      <Input
        placeholder="패스워드 입력하세요"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit">입력하기</Button>
    </form>
  );
};

export default Gazaadmin;
