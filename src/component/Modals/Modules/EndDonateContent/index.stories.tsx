import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EndDonateContent from './index';

export default {
  title: 'stories/Modals/Modules/EndDonateContent',
  component: EndDonateContent,
  parameters: {
    docs: {
      description: { component: '후원 완료에 보여질 메세지들' },
    },
  },
} as ComponentMeta<typeof EndDonateContent>;

const Template: ComponentStory<typeof EndDonateContent> = args => (
  <EndDonateContent />
);

export const View: ComponentStory<typeof EndDonateContent> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
