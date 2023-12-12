'use client';

import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import ReactFullpage from '@fullpage/react-fullpage';

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
    <ReactFullpage
      scrollingSpeed={1000} // Fullpage.js 옵션 설정 예시
      anchors={['section1', 'section2', 'section3', 'section4', 'section5']}
      controlArrows={false}
      scrollOverflow
      fixedElements="#header"
      credits={{ enabled: false }}
      normalScrollElements="#CommentStack"
      afterLoad={(origin, dest, direction, trigger) => {
        const orgDom = document.querySelectorAll(
          `[data-menuanchor=${origin.anchor}`,
        );
        const destDom = document.querySelectorAll(
          `[data-menuanchor=${dest.anchor}`,
        );
        if (orgDom) {
          for (let i = 0; i < orgDom.length; i += 1) {
            orgDom[i].classList.remove('on');
          }
        }
        if (destDom) {
          for (let i = 0; i < destDom.length; i += 1) {
            destDom[i].classList.add('on');
          }
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Box className="section" data-anchor="section1">
              <ShowGazaMap />
            </Box>
            <Box className="section" data-anchor="section2">
              <ShowInfo1 ShowInfoText={explain.ShowInfo} />
            </Box>
            <Box className="section" data-anchor="section3">
              <ShowComment />
            </Box>
            <Box className="section" data-anchor="section4">
              <InputSection InputSectionText={explain.InputSectionText} />
            </Box>
            <Box className="section" data-anchor="section5">
              <ExplainSectoin explain={explain} />
            </Box>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageSetup;
