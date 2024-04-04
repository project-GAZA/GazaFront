import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import WhoDonate from './index';

export default {
  title: 'stories/Modals/Template/WhoDonate',
  component: WhoDonate,
  parameters: {
    docs: {
      description: { component: '후원하기 모달창' },
    },
  },
} as ComponentMeta<typeof WhoDonate>;

const Template: ComponentStory<typeof WhoDonate> = args => (
  <RecoilRoot>
    <WhoDonate />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof WhoDonate> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
