import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DonateNameInput from './index';

export default {
  title: 'stories/Modals/Modules/DonateNameInput',
  component: DonateNameInput,
  parameters: {
    docs: {
      description: { component: '모달 토스 아이디 인풋' },
    },
  },
  args: {
    nick: '',
  },
} as ComponentMeta<typeof DonateNameInput>;

const Template: ComponentStory<typeof DonateNameInput> = args => (
  <DonateNameInput {...args} />
);

export const View: ComponentStory<typeof DonateNameInput> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
