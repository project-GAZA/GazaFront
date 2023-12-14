'use client';

import React, { useState, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import ShowComment from '@/components/section_components/ShowComment';
import InputSection from '@/components/section_components/InputSection';
import ShowInfo1 from '@/components/section_components/ShowInfo1';
import ShowGazaMap from '@/components/section_components/ShowGazaMap';
import ExplainSectoin from '@/components/section_components/ExplainSectoin';
import { Korean } from '@/constants';

import { SectionWrapper, LastSectionWrapper } from './common.style';

import { fetchComments, fetchSearchComments } from '@/utils/api';

import { dataTypes } from '@/types';

const Main = () => {
  const toast = useToast();
  const [explain, setExplain] = useState(Korean);
  const [messages, setMessages] = useState<Array<dataTypes.MessageType>>([]);
  const [sort, setSort] = useState('best');

  const CreateErrorMessage = (str: string) => {
    toast({
      position: 'bottom',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          에러내용: {str} <br />
          서버에러가 났습니다 관리자에게 문의해주세요.
        </Box>
      ),
    });
  };

  const fetchAndSetMessage = async (
    sortstr: string,
    size: number = 100,
    page: number = 0,
  ) => {
    try {
      const result = await fetchComments(sortstr, size, page);
      setMessages(result);
    } catch (error) {
      CreateErrorMessage(error.message);
    }
  };

  const SearchAndSetMessage = async (
    username: string,
    size: number = 100,
    page: number = 0,
  ) => {
    try {
      const result = await fetchSearchComments(username, size, page);
      setMessages(result);
    } catch (error) {
      CreateErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchAndSetMessage(sort);
  }, []);

  return (
    // FullPage 컴포넌트로 변경
    <Box>
      <SectionWrapper className="section" id="section1" data-anchor="section1">
        <ShowGazaMap />
      </SectionWrapper>
      <SectionWrapper className="section" id="section2" data-anchor="section2">
        <ShowInfo1 ShowInfoText={explain.ShowInfo} />
      </SectionWrapper>
      <SectionWrapper className="section" id="section3" data-anchor="section3">
        <ShowComment
          setSort={setSort}
          messages={messages}
          fetchSearch={SearchAndSetMessage}
          fetchMessage={fetchAndSetMessage}
        />
      </SectionWrapper>
      <SectionWrapper className="section" data-anchor="section4" id="section4">
        <InputSection
          fetchMessage={fetchAndSetMessage}
          sort={sort}
          InputSectionText={explain.InputSectionText}
        />
      </SectionWrapper>
      <LastSectionWrapper data-anchor="section5" id="section5">
        <ExplainSectoin explain={explain} />
      </LastSectionWrapper>
    </Box>
  );
};

export default Main;
