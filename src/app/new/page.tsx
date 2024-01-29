'use client';

import { Global, css } from '@emotion/react';
import CommentSection from './_sections/CommentSection';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
import HelloSection from './_sections/HelloSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const Home = () => {
  return (
    <>
      <Global
        styles={css`
          div {
            border: 1px solid black;
          }
        `}
      />
      <div>
        <HelloSection />
        <DeadInfoSection />
        <WhyDonateSection />
        <CommentSection />
        <DonateSection />
        <WhoAmISection />
      </div>
    </>
  );
};

export default Home;
