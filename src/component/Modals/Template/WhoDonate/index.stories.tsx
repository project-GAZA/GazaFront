import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import WhoDonate from './index';

export default {
  title: 'stories/Modals/Template/WhoDonate',
  component: WhoDonate,
  parameters: {
    docs: {
      description: { component: '아이디 적는 모달창' },
    },
  },
} as ComponentMeta<typeof WhoDonate>;

const Template: ComponentStory<typeof WhoDonate> = args => (
  <RecoilRoot>
    <WhoDonate />
  </RecoilRoot>
);

export const View: ComponentStory<typeof WhoDonate> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
