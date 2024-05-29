import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InfoBox from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Situation/Attoms/InfoBox',
  component: InfoBox,
  parameters: {
    docs: {
      description: {
        component: '상황섹션 실제상황박스 기본 배경은 검은색입니다.',
      },
    },
  },
  args: {
    number: 10000,
    title: '사망자',
    color: '#EB4511',
  },
} as ComponentMeta<typeof InfoBox>;
const Template: ComponentStory<typeof InfoBox> = args => <InfoBox {...args} />;

export const Mobile: ComponentStory<typeof InfoBox> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
