import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

export default {
  title: 'stories/Section_Donation/Attoms/Title',
  component: Title,
  parameters: {
    docs: {
      description: { component: '글의 제목이빈다.' },
    },
  },
  args: {
    title: '가자지구 사람들을 위한 12번째 후원자가 되어주세요',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Mobile: ComponentStory<typeof Title> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
