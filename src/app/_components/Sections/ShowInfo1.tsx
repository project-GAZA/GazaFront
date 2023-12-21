'use client';

import Icon_Earth from '@/assets/svg/Icon_Earth.png';
import EarthPin from '@/assets/svg/EarthPin.svg';
import PinShadowIcon from '@/assets/svg/PinShadow.svg';
import { dataTypes } from '@/types';
import {
  EarthTextWrapper,
  SecondSection,
  SecondTopText,
  SecondExplainText,
  EarthWrapper,
  Pin,
  PinShadow,
  EarthText,
} from './section.style';

const ShowInfo = ({
  ShowInfoText,
}: {
  ShowInfoText: dataTypes.ShowInfoType;
}) => {
  return (
    <SecondSection>
      <SecondTopText>{ShowInfoText.TopText}</SecondTopText>
      <SecondExplainText
        dangerouslySetInnerHTML={{ __html: ShowInfoText.ExplainText }}
      />
      <EarthWrapper bgsrc={Icon_Earth.src}>
        <Pin bgsrc={EarthPin.src} />
        <PinShadow bgsrc={PinShadowIcon.src} />
        <EarthTextWrapper left={190} top={-30} backgroundColor="#fff">
          <EarthText>{ShowInfoText.WordCloud[0]}</EarthText>
        </EarthTextWrapper>
        <EarthTextWrapper left={0} top={-5} backgroundColor="#fff">
          <EarthText>{ShowInfoText.WordCloud[1]}</EarthText>
        </EarthTextWrapper>
        <EarthTextWrapper left={110} top={5} backgroundColor="#fff">
          <EarthText>{ShowInfoText.WordCloud[2]}</EarthText>
        </EarthTextWrapper>
        <EarthTextWrapper left="195px" top="-60px" backgroundColor="#FFDE6D">
          <EarthText>{ShowInfoText.WordCloud[3]}</EarthText>
        </EarthTextWrapper>
        <EarthTextWrapper
          left="-20px"
          top="-30px"
          backgroundColor="#FFDE6D"
          zIndex={-1}
        >
          <EarthText>{ShowInfoText.WordCloud[4]}</EarthText>
        </EarthTextWrapper>
      </EarthWrapper>
    </SecondSection>
  );
};

export default ShowInfo;
