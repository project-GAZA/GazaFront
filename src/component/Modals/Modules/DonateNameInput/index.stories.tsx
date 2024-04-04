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
    nickName: '',
  },
} as ComponentMeta<typeof DonateNameInput>;

const Template: ComponentStory<typeof DonateNameInput> = args => (
  <DonateNameInput />
);

export const Mobile: ComponentStory<typeof DonateNameInput> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
