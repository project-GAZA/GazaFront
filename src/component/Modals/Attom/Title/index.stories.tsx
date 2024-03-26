import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

export default {
  title: 'stories/Modals/Attoms/Title',
  component: Title,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
  args: {
    title: '응원 댓글이 등록되었습니다. ',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Mobile: ComponentStory<typeof Title> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
