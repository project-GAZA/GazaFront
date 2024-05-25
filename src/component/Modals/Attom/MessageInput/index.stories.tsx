import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MessageInput from './index';

export default {
  title: 'stories/Modals/Attom/MessageInput',
  component: MessageInput,
  parameters: {
    docs: {
      description: { component: '모달 메세지내용 인풋' },
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

const Template: ComponentStory<typeof MessageInput> = args => (
  <MessageInput {...args} />
);

export const View: ComponentStory<typeof MessageInput> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
