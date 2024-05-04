import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DesktopDonate from './index';

export default {
  title: 'stories/Modals/Template/DesktopDonate',
  component: DesktopDonate,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
} as ComponentMeta<typeof DesktopDonate>;

const Template: ComponentStory<typeof DesktopDonate> = args => (
  <RecoilRoot>
    <DesktopDonate />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof DesktopDonate> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
