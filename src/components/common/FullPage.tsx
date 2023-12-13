'use client';

import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import ShowComment from '@/components/section_components/ShowComment';
import InputSection from '@/components/section_components/InputSection';
import ShowInfo1 from '@/components/section_components/ShowInfo1';
import ShowGazaMap from '@/components/section_components/ShowGazaMap';
import ExplainSectoin from '@/components/section_components/ExplainSectoin';
import { Korean } from '@/constants';

const FullPageSetup = () => {
  const [explain, setExplain] = useState(Korean);

  return (
    // FullPage 컴포넌트로 변경
    <Box>
      <Box className="section" data-anchor="section1">
        <ShowGazaMap />
      </Box>
      <Box className="section" data-anchor="section2">
        <ShowInfo1 ShowInfoText={explain.ShowInfo} />
      </Box>
      <Box className="section" data-anchor="section3">
        <ShowComment />
      </Box>
      <Box data-anchor="section4">
        <InputSection InputSectionText={explain.InputSectionText} />
      </Box>
      <Box data-anchor="section5">
        <ExplainSectoin explain={explain} />
      </Box>
    </Box>
  );
};

export default FullPageSetup;
