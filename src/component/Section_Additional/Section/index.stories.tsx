import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section_Additional from './index';

export default {
  title: 'stories/Section_Additional/Section',
  component: Section_Additional,
} as ComponentMeta<typeof Section_Additional>;

const Template: ComponentStory<typeof Section_Additional> = args => (
  <Section_Additional />
);

export const View: ComponentStory<typeof Section_Additional> = Template.bind(
  {},
);
