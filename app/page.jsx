'use client';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';

const Home = () => {
  return (
    <FullPage isScrollingEnabled={true}>
      <Slide>
        <h1>Inner slide content</h1>
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
};

export default Home;
