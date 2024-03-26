import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheerTop from './index';

export default {
  title: 'stories/Modals/Modules/CheerTop',
  component: CheerTop,
  parameters: {
    docs: {
      description: { component: '응원메세지 첫번째 제목과 내용' },
    },
  },
} as ComponentMeta<typeof CheerTop>;

const Template: ComponentStory<typeof CheerTop> = () => <CheerTop />;

export const Mobile: ComponentStory<typeof CheerTop> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
