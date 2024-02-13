import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroInfo from './index';

export default {
  title: 'stories/Section_Hero/Organisms/HeroInfo',
  component: HeroInfo,
  args: {
    goButtonsData: {
      Buttons: [
        {
          children: '희망 메세지 보내기',
          fill: false,
        },
        {
          children: '후원하기',
          fill: true,
          theme: 'primary',
        },
      ],
      gap: 12,
    },
    heroMainTitleData: {
      title: {
        black: 'Gaza’s Child Read ',
        yellow: ' HOPE',
        marginBottom: 12,
        marginTop: 20,
      },
      projectTitle: {
        blackBold: '가자지구 분쟁 ',
        regular1: '피해 어린이를 위한 ',
        yellowBold: '후원금 및 응원메세지 ',
        regular2: '전달 프로젝트',
        marginBottom: 34,
      },
      projectSubTitle: {
        color: 'black',
        content: '가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요',
      },
    },
    color: 'background_light',
    borderRadius: 20,
  },
} as ComponentMeta<typeof HeroInfo>;

const Template: ComponentStory<typeof HeroInfo> = args => (
  <HeroInfo {...args} />
);
export const Mobile: ComponentStory<typeof HeroInfo> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
