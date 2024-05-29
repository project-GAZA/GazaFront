import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

export default {
  title: 'stories/Common/Attom/Title',
  component: Title,
  parameters: {
    docs: {
      description: { component: '제목텍스트' },
    },
  },
  args: {
    title: '응원 댓글이 등록되었습니다. ',
    fontSize: 18,
    color: 'black',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const View: ComponentStory<typeof Title> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
