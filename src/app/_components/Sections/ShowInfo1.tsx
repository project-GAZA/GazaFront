'use client';

import Icon_Earth from '@/assets/svg/Icon_Earth.png';
import EarthPin from '@/assets/svg/EarthPin.svg';
import PinShadowIcon from '@/assets/svg/PinShadow.svg';
import { dataTypes } from '@/types';
import Section from './section.style';

const ShowInfo = ({
  ShowInfoText,
}: {
  ShowInfoText: dataTypes.ShowInfoType;
}) => {
  return (
    <Section.SecondSection>
      <Section.SecondTopText>{ShowInfoText.TopText}</Section.SecondTopText>
      <Section.SecondExplainText
        dangerouslySetInnerHTML={{ __html: ShowInfoText.ExplainText }}
      />
      <Section.EarthWrapper bgsrc={Icon_Earth.src}>
        <Section.Pin bgsrc={EarthPin.src} />
        <Section.PinShadow bgsrc={PinShadowIcon.src} />
        <Section.EarthTextWrapper left={190} top={-30} backgroundColor="#fff">
          <Section.EarthText>{ShowInfoText.WordCloud[0]}</Section.EarthText>
        </Section.EarthTextWrapper>
        <Section.EarthTextWrapper left={0} top={-5} backgroundColor="#fff">
          <Section.EarthText>{ShowInfoText.WordCloud[1]}</Section.EarthText>
        </Section.EarthTextWrapper>
        <Section.EarthTextWrapper left={110} top={5} backgroundColor="#fff">
          <Section.EarthText>{ShowInfoText.WordCloud[2]}</Section.EarthText>
        </Section.EarthTextWrapper>
        <Section.EarthTextWrapper
          left="195px"
          top="-60px"
          backgroundColor="#FFDE6D"
        >
          <Section.EarthText>{ShowInfoText.WordCloud[3]}</Section.EarthText>
        </Section.EarthTextWrapper>
        <Section.EarthTextWrapper
          left="-20px"
          top="-30px"
          backgroundColor="#FFDE6D"
          zIndex={-1}
        >
          <Section.EarthText>{ShowInfoText.WordCloud[4]}</Section.EarthText>
        </Section.EarthTextWrapper>
      </Section.EarthWrapper>
    </Section.SecondSection>
  );
};

export default ShowInfo;
