import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DirectDonate from './index';

export default {
  title: 'stories/Modals/Template/DirectDonate',
  component: DirectDonate,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
} as ComponentMeta<typeof DirectDonate>;

const Template: ComponentStory<typeof DirectDonate> = args => (
  <RecoilRoot>
    <DirectDonate />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof DirectDonate> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
