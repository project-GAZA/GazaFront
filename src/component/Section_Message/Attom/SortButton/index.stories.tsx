import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortButton from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attom/SortButton',
  component: SortButton,
  parameters: {
    docs: {
      description: {
        component: '메세지 섹션 Sort클릭 버튼. 기본배경은 검정입니다.',
      },
    },
  },
  args: {
    text: 'New',
    active: true,
    theme: 'secondary',
  },
} as ComponentMeta<typeof SortButton>;
const Template: ComponentStory<typeof SortButton> = args => (
  <SortButton {...args} />
);

export const View: ComponentStory<typeof SortButton> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
