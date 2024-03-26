import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomContent from './index';

export default {
  title: 'stories/Section_Donation/Modules/BottomContent',
  component: BottomContent,
  parameters: {
    docs: {
      description: { component: '섹션 위의 내용' },
    },
  },
} as ComponentMeta<typeof BottomContent>;

const Template: ComponentStory<typeof BottomContent> = () => <BottomContent />;

export const Mobile: ComponentStory<typeof BottomContent> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
