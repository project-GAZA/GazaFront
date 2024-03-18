import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundedButton from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attoms/RoundedButton',
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof RoundedButton> = args => (
  <RoundedButton {...args} />
);

// 각각이 새로운 스토리들

export const Mobile: ComponentStory<typeof RoundedButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
