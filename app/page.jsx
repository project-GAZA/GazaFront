'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

import ShowComment from './components/ShowComment';
import InputComment from './components/InputComment';
import ShowInfo from './components/ShowInfo';

const SectionBox = styled(Box)`
  text-align: center;
  background-color: ${props => props.cr};
`;

const Home = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#fullpage').fullpage({
        scrollOverflow: true,
      });
    });
  }, []);

  return (
    <Box id="fullpage">
      <SectionBox cr="gray" className="section">
        <ShowComment />
      </SectionBox>
      <SectionBox cr="gray" className="section">
        <InputComment />
      </SectionBox>
      <Box className="section fp-scrollable">
        <ShowInfo />
      </Box>
    </Box>
  );
};

export default Home;
