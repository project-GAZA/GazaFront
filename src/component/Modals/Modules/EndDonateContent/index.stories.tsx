import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EndDonateContent from './index';

export default {
  title: 'stories/Modals/Modules/EndDonateContent',
  component: EndDonateContent,
  parameters: {
    docs: {
      description: { component: '후원 완료 창에 송금아이디' },
    },
  },
} as ComponentMeta<typeof EndDonateContent>;

const Template: ComponentStory<typeof EndDonateContent> = args => (
  <EndDonateContent {...args} />
);

export const Mobile: ComponentStory<typeof EndDonateContent> = Template.bind(
  {},
);
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
