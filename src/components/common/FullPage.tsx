'use client';

import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import ShowComment from '@/components/section_components/ShowComment';
import InputSection from '@/components/section_components/InputSection';
import ShowInfo1 from '@/components/section_components/ShowInfo1';
import ShowGazaMap from '@/components/section_components/ShowGazaMap';
import ExplainSectoin from '@/components/section_components/ExplainSectoin';
import { Korean } from '@/constants';

import { SectionWrapper, LastSectionWrapper } from './common.style';

const FullPageSetup = () => {
  const [explain, setExplain] = useState(Korean);

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
        <ShowComment />
      </SectionWrapper>
      <SectionWrapper className="section" data-anchor="section4" id="section4">
        <InputSection InputSectionText={explain.InputSectionText} />
      </SectionWrapper>
      <LastSectionWrapper data-anchor="section5" id="section5">
        <ExplainSectoin explain={explain} />
      </LastSectionWrapper>
    </Box>
  );
};

export default FullPageSetup;
