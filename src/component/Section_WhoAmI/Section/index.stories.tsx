import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section_WhoAmI from './index';

export default {
  title: 'stories/Section_WhoAmI/Section',
  component: Section_WhoAmI,
  parameters: {
    docs: {
      description: {
        component: '우리가 누구 섹션',
      },
    },
  },
} as ComponentMeta<typeof Section_WhoAmI>;

const Template: ComponentStory<typeof Section_WhoAmI> = () => (
  <Section_WhoAmI />
);

export const View: ComponentStory<typeof Section_WhoAmI> = Template.bind({});
