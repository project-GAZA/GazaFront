import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comments from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Modules/Comments',
  component: Comments,
  parameters: {
    docs: {
      description: { component: '히어로 섹션 댓글목록들' },
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
} as ComponentMeta<typeof Comments>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Comments> = args => (
  <Comments {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const View: ComponentStory<typeof Comments> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
