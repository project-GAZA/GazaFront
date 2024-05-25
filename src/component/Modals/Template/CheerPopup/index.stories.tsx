import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import CheerPopup from './index';

export default {
  title: 'stories/Modals/Template/CheerPopup',
  component: CheerPopup,
  parameters: {
    docs: {
      description: { component: '응원메세지 전달 모달창' },
    },
  },
} as ComponentMeta<typeof CheerPopup>;

const Template: ComponentStory<typeof CheerPopup> = args => (
  <RecoilRoot>
    <CheerPopup />
  </RecoilRoot>
);

export const View: ComponentStory<typeof CheerPopup> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
