import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

export default {
  title: 'stories/Section_Donation/Attom/Title',
  component: Title,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션의  제목텍스트입니다.' },
    },
  },
  args: {
    title: '가자지구 사람들을 위한 12번째 후원자가 되어주세요',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const View: ComponentStory<typeof Title> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
