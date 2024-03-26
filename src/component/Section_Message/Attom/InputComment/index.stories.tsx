import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attoms/InputComment',
  component: MessageTitle,
  parameters: {
    docs: {
      description: { component: '댓글 다는 부분' },
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

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof MessageTitle> = args => (
  <MessageTitle {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof MessageTitle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
