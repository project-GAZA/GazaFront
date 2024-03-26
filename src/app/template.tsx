'use client';

import { RecoilRoot } from 'recoil';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RootTemplate;
