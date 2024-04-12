import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionMessage from './index';

export default {
  title: 'stories/Section_Message/Section',
  component: SectionMessage,
} as ComponentMeta<typeof SectionMessage>;

const Template: ComponentStory<typeof SectionMessage> = args => (
  <SectionMessage />
);

export const Mobile: ComponentStory<typeof SectionMessage> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
