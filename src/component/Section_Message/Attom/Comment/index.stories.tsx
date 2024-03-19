import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attoms/Comment',
  component: Comment,
  parameters: {
    docs: {
      description: { component: '메세지영역 제목' },
    },
  },
  args: {
    index: 10,
    nick: 'JooKyungJin',
    date: '2023.03.04',
    isLike: true,
    onClick: [
      () => {
        console.log('신고누름');
      },
    ],
    content: '뉴스를 봤는데 마음이 너무 아팠습니다.',
    isdonate: true,
  },
} as ComponentMeta<typeof Comment>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof Comment> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
