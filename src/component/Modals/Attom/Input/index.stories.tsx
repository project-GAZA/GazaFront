import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'stories/Modals/Attom/Input',
  component: Input,
  parameters: {
    docs: {
      description: { component: '모달 아이디 인풋' },
    },
  },
  args: {
    nickName: '',
  },
  argTypes: {
    nickName: { control: 'text' },
    changeNickName: { action: 'changed' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const View: ComponentStory<typeof Input> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
