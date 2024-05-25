import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section_Situation from './index';

export default {
  title: 'stories/Section_Situation/Section',
  component: Section_Situation,
  parameters: {
    docs: {
      description: {
        component: '상황 섹션',
      },
    },
  },
} as ComponentMeta<typeof Section_Situation>;

const Template: ComponentStory<typeof Section_Situation> = args => (
  <Section_Situation />
);

export const View: ComponentStory<typeof Section_Situation> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
