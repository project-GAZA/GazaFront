import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoneySlider from './index';

export default {
  title: 'stories/Section_Donation/Attoms/MoneySlider',
  component: MoneySlider,
  parameters: {
    docs: {
      description: { component: '기본 버튼' },
    },
  },
  args: {
    current: 1000,
    goal: 5000,
  },
} as ComponentMeta<typeof MoneySlider>;

const Template: ComponentStory<typeof MoneySlider> = args => (
  <MoneySlider {...args} />
);

export const Mobile: ComponentStory<typeof MoneySlider> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
