import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Content from './index';

export default {
  title: 'stories/Section_Donation/Attom/Content',
  component: Content,
  parameters: {
    docs: {
      description: { component: '도네이션섹션 글의 제목이빈다.' },
    },
  },
  args: {
    content:
      '<strong>1000원도 후원</strong>가능하며 후원과 함께 작성된 메세지는 책자로 만들어 가자지구에 전달할 예정이에요!',
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => <Content {...args} />;

export const View: ComponentStory<typeof Content> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
