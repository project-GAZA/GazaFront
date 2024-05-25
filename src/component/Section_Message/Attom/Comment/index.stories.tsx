import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attom/Comment',
  component: Comment,
  parameters: {
    docs: {
      description: { component: '메세지섹션 댓글요소' },
    },
  },
  args: {
    index: 10,
    nick: 'JooKyungJin',
    date: '2023.03.04',
    isLike: true,
    onClick: () => {
      console.log('신고누름');
    },
    content: '뉴스를 봤는데 마음이 너무 아팠습니다.',
    isdonate: true,
  },
} as ComponentMeta<typeof Comment>;
const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />;

export const View: ComponentStory<typeof Comment> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
