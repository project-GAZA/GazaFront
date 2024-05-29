import React from 'react';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionMessage from './index';

export default {
  title: 'stories/Section_Message/Section',
  component: SectionMessage,
  parameters: {
    docs: {
      description: {
        component: '메세지 섹션',
      },
    },
  },
} as ComponentMeta<typeof SectionMessage>;

const Template: ComponentStory<typeof SectionMessage> = args => (
  <RecoilRoot>
    <SectionMessage />
  </RecoilRoot>
);

export const View: ComponentStory<typeof SectionMessage> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
