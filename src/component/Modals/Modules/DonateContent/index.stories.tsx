import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DonateContent from './index';

export default {
  title: 'stories/Modals/Modules/DonateContent',
  component: DonateContent,
  parameters: {
    docs: {
      description: { component: '기부 아이디 입력' },
    },
  },
} as ComponentMeta<typeof DonateContent>;

const Template: ComponentStory<typeof DonateContent> = () => <DonateContent />;

export const Mobile: ComponentStory<typeof DonateContent> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
