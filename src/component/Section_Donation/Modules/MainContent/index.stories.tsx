import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainContent from './index';

export default {
  title: 'stories/Section_Donation/Modules/MainContent',
  component: MainContent,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션의 사진과 콘텐츠' },
    },
  },
} as ComponentMeta<typeof MainContent>;

const Template: ComponentStory<typeof MainContent> = () => <MainContent />;

export const View: ComponentStory<typeof MainContent> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
