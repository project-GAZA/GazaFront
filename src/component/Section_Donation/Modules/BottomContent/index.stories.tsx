import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomContent from './index';

export default {
  title: 'stories/Section_Donation/Modules/BottomContent',
  component: BottomContent,
  parameters: {
    docs: {
      description: { component: '도네이션 섹션의 아래 컨텐츠' },
    },
  },
} as ComponentMeta<typeof BottomContent>;

const Template: ComponentStory<typeof BottomContent> = () => <BottomContent />;

export const View: ComponentStory<typeof BottomContent> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
