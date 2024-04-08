import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MessageInput from './index';

export default {
  title: 'stories/Modals/Attoms/MessageInput',
  component: MessageInput,
  parameters: {
    docs: {
      description: { component: '모달 토스 아이디 인풋' },
    },
  },
  args: {
    nickName: '',
  },
  argTypes: {
    content: { control: 'text' },
    changeContent: { action: 'changed' },
  },
} as ComponentMeta<typeof MessageInput>;

const Template: ComponentStory<typeof MessageInput> = args => <MessageInput />;

export const Mobile: ComponentStory<typeof MessageInput> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
