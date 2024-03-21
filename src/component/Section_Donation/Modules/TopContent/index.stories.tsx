import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopContent from './index';

export default {
  title: 'stories/Section_Donation/Modules/TopContent',
  component: TopContent,
  parameters: {
    docs: {
      description: { component: '섹션 위의 내용' },
    },
  },
} as ComponentMeta<typeof TopContent>;

const Template: ComponentStory<typeof TopContent> = () => <TopContent />;

export const Mobile: ComponentStory<typeof TopContent> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
