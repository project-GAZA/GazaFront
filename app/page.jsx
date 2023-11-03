'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

import ShowComment from './components/ShowComment';
import ShowInfo from './components/ShowInfo';
import ShowInputComment from './components/ShowInputComment';

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
      <Box className="section fp-scrollable">
        <ShowInfo />
      </Box>
      <SectionBox cr="gray" className="section">
        <ShowInputComment />
      </SectionBox>
      <SectionBox cr="gray" className="section">
        <ShowComment />
      </SectionBox>
      <SectionBox cr="gray" className="section">
        <Box>가자지구 지도 화면</Box>
      </SectionBox>
    </Box>
  );
};

export default Home;
