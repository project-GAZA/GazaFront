'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import ShowComment from '@/app/_components/Sections/ShowComment';
import InputSection from '@/app/_components/Sections/InputSection';
import ShowInfo1 from '@/app/_components/Sections/ShowInfo1';
import ShowGazaMap from '@/app/_components/Sections/ShowGazaMap';
import ExplainSectoin from '@/app/_components/Sections/ExplainSectoin';

import { fetchComments } from '@/utils/api';
import { dataTypes } from '@/types';

import useCustomToast from '@/hooks/useCustomToast';
import { fetchAndSet } from '@/utils/usefull';

import Common from './common.style';

const Main = ({ explain }) => {
  const [messages, setMessages] = useState<Array<dataTypes.MessageType>>([]);
  const toast = useCustomToast();

  const fetchAndSetMessage = fetchAndSet(
    setMessages,
    fetchComments,
    toast.createErrorMessage,
  );

  useEffect(() => {
    fetchAndSetMessage('', 'best', 100, 0);
  }, []);

  return (
    // FullPage 컴포넌트로 변경
    <Box>
      <Box id="section1" data-anchor="section1">
        <ShowGazaMap GazaMapText={explain.GazaMapText} />
      </Box>
      <Box id="section2" data-anchor="section2">
        <ShowInfo1 ShowInfoText={explain.ShowInfo} />
      </Box>
      <Common.SectionWrapper
        className="section"
        id="section3"
        data-anchor="section3"
      >
        <ShowComment
          ShowCommentText={explain.ShowComment}
          messages={messages}
          fetchMessage={fetchAndSetMessage}
        />
      </Common.SectionWrapper>
      <Common.SectionWrapper
        className="section"
        data-anchor="section4"
        id="section4"
      >
        <InputSection
          fetchMessage={fetchAndSetMessage}
          InputSectionText={explain.InputSectionText}
        />
      </Common.SectionWrapper>
      <Common.LastSectionBackgroundWrapper>
        <Common.LastSectionWrapper data-anchor="section5" id="section5">
          <ExplainSectoin explain={explain} />
        </Common.LastSectionWrapper>
      </Common.LastSectionBackgroundWrapper>
    </Box>
  );
};

export default Main;
