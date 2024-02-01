'use client';

import '@/style/globals.scss';

import { Global, css } from '@emotion/react';

import HelloSection from './_sections/HelloSection';
import CommentSection from './_sections/CommentSection';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  return (
    <>
      <Global
        styles={css`
          div {
            margin: 0;
            border: 1px solid black;
          }
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <HelloSection />
      <DeadInfoSection />
      <CommentSection />
      <DonateSection />
      <WhyDonateSection />
      <WhoAmISection />
    </>
  );
};

export default Home;
