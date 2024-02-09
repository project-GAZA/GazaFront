import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroMainTitle from './index';

export default {
  title: 'stories/Section_Hero/Molecule/HeroMainTitle',
  component: HeroMainTitle,
  args: {
    title: { black: 'Gaza’s Child Read ', yellow: ' HOPE', marginBottom: 12 },
    projectTitle: {
      blackBold: '가자지구 분쟁 ',
      regular1: '피해 어린이를 위한 ',
      yellowBold: '후원금 및 응원 메세지 ',
      regular2: '전달 프로젝트 ',
      marginBottom: 34,
    },
    projectSubTitle: {
      color: 'black',
      content: '가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요',
    },
  },
} as ComponentMeta<typeof HeroMainTitle>;

const Template: ComponentStory<typeof HeroMainTitle> = args => (
  <HeroMainTitle {...args} />
);

export const Mobile: ComponentStory<typeof HeroMainTitle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
