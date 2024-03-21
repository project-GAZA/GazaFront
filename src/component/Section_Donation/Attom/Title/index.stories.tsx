import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

export default {
  title: 'stories/Section_Donation/Attoms/Title',
  component: Title,
  parameters: {
    docs: {
      description: { component: '기본 버튼' },
    },
  },
  args: {
    title: '가자지구 사람들을 위한 12번째 후원자가 되어주세요',
    content:
      '<strong>1000원도 후원</strong>가능하며 후원과 함께 작성된 메세지는 책자로 만들어 가자지구에 전달할 예정이에요!',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Mobile: ComponentStory<typeof Title> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
