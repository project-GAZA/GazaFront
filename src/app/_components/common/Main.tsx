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
import { Korean } from '@/constants';

import useCustomToast from '@/hooks/useCustomToast';

import Common from './common.style';

const Main = () => {
  const [explain, setExplain] = useState(Korean.mobile);
  const [messages, setMessages] = useState<Array<dataTypes.MessageType>>([]);
  const [sort, setSort] = useState('best');
  const toast = useCustomToast();

  const fetchAndSetMessage = async (
    sortstr: string,
    size: number = 100,
    page: number = 0,
  ) => {
    try {
      const result = await fetchComments('', sortstr, size, page);
      setMessages(result);
    } catch (error) {
      toast.createErrorMessage(error);
    }
  };

  const SearchAndSetMessage = async (
    username: string,
    size: number = 100,
    page: number = 0,
    sortstr: string = 'new',
  ) => {
    try {
      const result = await fetchComments(username, sortstr, size, page);
      setMessages(result);
    } catch (error) {
      toast.createErrorMessage(error);
    }
  };

  // window 창 크기 변경될때 실행되는 핸들러
  const handleResize = () => {
    if (window.innerWidth >= 890) {
      setExplain(Korean.pc);
    } else {
      setExplain(Korean.mobile);
    }
  };

  useEffect(() => {
    fetchAndSetMessage(sort);
    // Initial check
    handleResize();
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // FullPage 컴포넌트로 변경
    <Box>
      <Box id="section1" data-anchor="section1">
        <ShowGazaMap />
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
          setSort={setSort}
          messages={messages}
          fetchSearch={SearchAndSetMessage}
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
          sort={sort}
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
