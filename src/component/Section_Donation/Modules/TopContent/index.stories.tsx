import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopContent from './index';

export default {
  title: 'stories/Section_Donation/Modules/TopContent',
  component: TopContent,
  parameters: {
    docs: {
      description: { component: '도네이션섹션 위의 내용' },
    },
  },
} as ComponentMeta<typeof TopContent>;

const Template: ComponentStory<typeof TopContent> = () => <TopContent />;

export const View: ComponentStory<typeof TopContent> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
