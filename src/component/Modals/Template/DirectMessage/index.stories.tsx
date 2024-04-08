import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DirectMessage from './index';

export default {
  title: 'stories/Modals/Template/DirectMessage',
  component: DirectMessage,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
} as ComponentMeta<typeof DirectMessage>;

const Template: ComponentStory<typeof DirectMessage> = args => (
  <RecoilRoot>
    <DirectMessage />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof DirectMessage> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
