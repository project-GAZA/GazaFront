import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attom/InputComment',
  component: MessageTitle,
  parameters: {
    docs: {
      description: { component: '메세지 섹션 댓글 입력' },
    },
  },
  args: {
    placeholder: '가자지구 아이들에게 응원의 메세지를 남겨보세요',
    onSubmit: e => {
      e.preventDefault();
      console.log('hi');
    },
  },
} as ComponentMeta<typeof MessageTitle>;
const Template: ComponentStory<typeof MessageTitle> = args => (
  <MessageTitle {...args} />
);
export const View: ComponentStory<typeof MessageTitle> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
