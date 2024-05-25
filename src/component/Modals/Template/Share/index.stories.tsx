import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import Share from './index';

export default {
  title: 'stories/Modals/Template/Share',
  component: Share,
  parameters: {
    docs: {
      description: { component: '공유하기 모달창' },
    },
  },
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = args => (
  <RecoilRoot>
    <Share />
  </RecoilRoot>
);

export const View: ComponentStory<typeof Share> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
