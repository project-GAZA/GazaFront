import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DonateComplete from './index';

export default {
  title: 'stories/Modals/Template/DonateComplete',
  component: DonateComplete,
  parameters: {
    docs: {
      description: { component: '후원하기 완료된 모달창' },
    },
  },
} as ComponentMeta<typeof DonateComplete>;

const Template: ComponentStory<typeof DonateComplete> = args => (
  <RecoilRoot>
    <DonateComplete />
  </RecoilRoot>
);

export const View: ComponentStory<typeof DonateComplete> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
