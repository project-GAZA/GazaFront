import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from './index';

export default {
  title: 'stories/Section_Donation/Section',
  component: Section,
  parameters: {
    docs: {
      description: { component: '섹션' },
    },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = () => <Section />;

export const Mobile: ComponentStory<typeof Section> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
