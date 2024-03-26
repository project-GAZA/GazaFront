import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Picture from './index';

export default {
  title: 'stories/Section_Donation/Attoms/Picture',
  component: Picture,
  parameters: {
    docs: {
      description: { component: '기본 버튼' },
    },
  },
  args: {
    url: '',
  },
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = args => <Picture {...args} />;

export const Mobile: ComponentStory<typeof Picture> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
