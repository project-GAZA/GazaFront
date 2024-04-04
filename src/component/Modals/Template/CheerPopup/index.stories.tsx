import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import CheerPopup from './index';

export default {
  title: 'stories/Modals/Template/CheerPopup',
  component: CheerPopup,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
} as ComponentMeta<typeof CheerPopup>;

const Template: ComponentStory<typeof CheerPopup> = args => (
  <RecoilRoot>
    <CheerPopup />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof CheerPopup> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
