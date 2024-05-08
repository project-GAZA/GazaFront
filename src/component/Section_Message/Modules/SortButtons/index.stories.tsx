import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortButtons from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Modules/SortButtons',
  component: SortButtons,
  parameters: {
    docs: {
      description: {
        component: '메세지 섹션 Sort클릭 버튼. 기본 배경은 검은색입니다.',
      },
    },
  },
  args: {
    theme: 'secondary',
  },
} as ComponentMeta<typeof SortButtons>;

const Template: ComponentStory<typeof SortButtons> = args => (
  <SortButtons {...args} />
);

export const View: ComponentStory<typeof SortButtons> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
