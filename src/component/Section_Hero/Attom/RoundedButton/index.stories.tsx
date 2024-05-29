import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundedButton from './index';

export default {
  title: 'stories/Section_Hero/Attom/RoundedButton',
  component: RoundedButton,
  parameters: {
    docs: {
      description: {
        component: '히어로 섹션 동그란 버튼요소',
      },
    },
  },
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = args => (
  <RoundedButton {...args} />
);

export const View: ComponentStory<typeof RoundedButton> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
