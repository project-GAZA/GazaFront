import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DirectDonate from './index';

export default {
  title: 'stories/Modals/Template/DirectDonate',
  component: DirectDonate,
  parameters: {
    docs: {
      description: { component: '기부먼저 하는 모달창' },
    },
  },
} as ComponentMeta<typeof DirectDonate>;

const Template: ComponentStory<typeof DirectDonate> = args => (
  <RecoilRoot>
    <DirectDonate />
  </RecoilRoot>
);

export const View: ComponentStory<typeof DirectDonate> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
