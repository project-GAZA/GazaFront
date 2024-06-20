import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MobileComments from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Modules/MobileComments',
  component: MobileComments,
  parameters: {
    docs: {
      description: { component: '메세지 섹션 - 모바일 보기' },
    },
  },
  args: {
    comments: [
      {
        id: 1,
        username: '무지한 카카오',
        content: 'dkanfjdsanfjdsf',
        nation: 'Kor',
        latitude: 1,
        longitude: 2,
        amount: 1000,
        created_dt: '2020.12.12',
        modified_dt: '202020',
      },
      {
        id: 1,
        username: '무지한 카카오',
        content: 'dkanfjdsanfjdsf',
        nation: 'Kor',
        latitude: 1,
        longitude: 2,
        amount: 1000,
        created_dt: '2020.12.12',
        modified_dt: '202020',
      },
      {
        id: 1,
        username: '무지한 카카오',
        content: 'dkanfjdsanfjdsf',
        nation: 'Kor',
        latitude: 1,
        longitude: 2,
        amount: 1000,
        created_dt: '2020.12.12',
        modified_dt: '202020',
      },
    ],
  },
} as ComponentMeta<typeof MobileComments>;
const Template: ComponentStory<typeof MobileComments> = args => (
  <MobileComments {...args} />
);

export const View: ComponentStory<typeof MobileComments> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
