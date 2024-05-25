import React from 'react';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from './index';

export default {
  title: 'stories/Section_Donation/Section',
  component: Section,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션' },
    },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = () => (
  <RecoilRoot>
    <Section />
  </RecoilRoot>
);

export const View: ComponentStory<typeof Section> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
