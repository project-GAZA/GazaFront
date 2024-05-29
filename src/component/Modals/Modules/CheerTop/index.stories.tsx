import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheerTop from './index';

export default {
  title: 'stories/Modals/Modules/CheerTop',
  component: CheerTop,
  parameters: {
    docs: {
      description: {
        component:
          '응원메세지 첫번째 제목과 내용 - 배경색이 기본적으로 있습니다.',
      },
    },
  },
} as ComponentMeta<typeof CheerTop>;

const Template: ComponentStory<typeof CheerTop> = () => <CheerTop />;

export const View: ComponentStory<typeof CheerTop> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
