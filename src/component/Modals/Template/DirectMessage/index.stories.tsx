import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DirectMessage from './index';

export default {
  title: 'stories/Modals/Template/DirectMessage',
  component: DirectMessage,
  parameters: {
    docs: {
      description: { component: '직접 메세지 입력하는 모달창' },
    },
  },
} as ComponentMeta<typeof DirectMessage>;

const Template: ComponentStory<typeof DirectMessage> = args => (
  <RecoilRoot>
    <DirectMessage />
  </RecoilRoot>
);

export const View: ComponentStory<typeof DirectMessage> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
