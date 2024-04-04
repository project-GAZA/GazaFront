import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'stories/Modals/Attoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: { component: '모달 토스 아이디 인풋' },
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

const Template: ComponentStory<typeof Input> = args => <Input />;

export const Mobile: ComponentStory<typeof Input> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
