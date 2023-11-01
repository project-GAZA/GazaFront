'use client';

import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

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
      <SectionBox cr="blue" className="section">
        댓글 보여지는 화면
      </SectionBox>
      <SectionBox cr="red" className="section">
        댓글 입력하는 화면
      </SectionBox>
      <Box className="section fp-scrollable">
        <Box style={{ height: '200vh' }}>페이지 설명화면</Box>
      </Box>
    </Box>
  );
};

export default Home;
