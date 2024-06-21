'use client';

import { RecoilRoot } from 'recoil';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  const onLoadKakao = () => {
    window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`);
  };
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        async
        onLoad={onLoadKakao}
      />
    </>
  );
};

export default RootTemplate;
