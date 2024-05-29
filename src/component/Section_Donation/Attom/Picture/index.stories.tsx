import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Picture from './index';

export default {
  title: 'stories/Section_Donation/Attom/Picture',
  component: Picture,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션의 사진컴포넌트입니다.' },
    },
  },
  args: {
    url: '',
  },
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = args => <Picture {...args} />;

export const View: ComponentStory<typeof Picture> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
