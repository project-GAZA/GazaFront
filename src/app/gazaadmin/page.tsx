'use client';

import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

import { fetchAdminLogin } from '@/utils/api';
import DonateTable from './_components/DonateTable';

const Gazaadmin = () => {
  const [pwd, setPwd] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const onClickLogin = async () => {
    const login = await fetchAdminLogin(pwd);
    setIsLogin(login);
  };

  return isLogin ? (
    <DonateTable />
  ) : (
    <>
      <Input
        placeholder="패스워드 입력하세요"
        type="password"
        value={pwd}
        onChange={e => setPwd(e.target.value)}
      />
      <Button onClick={onClickLogin} />
    </>
  );
};

export default Gazaadmin;
