import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attoms/Title',
  component: Title,
  args: {
    black: 'Gaza’s Child Read ',
    yellow: ' HOPE',
  },
} as ComponentMeta<typeof Title>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

// 각각이 새로운 스토리들
export const Mobile: ComponentStory<typeof Title> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
