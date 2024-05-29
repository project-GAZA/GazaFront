import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoneySlider from './index';

export default {
  title: 'stories/Section_Donation/Attom/MoneySlider',
  component: MoneySlider,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션의 기부금 퍼센터 바' },
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

export const View: ComponentStory<typeof MoneySlider> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
