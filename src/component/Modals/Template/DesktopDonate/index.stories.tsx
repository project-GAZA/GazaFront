import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecoilRoot } from 'recoil';
import DesktopDonate from './index';

export default {
  title: 'stories/Modals/Template/DesktopDonate',
  component: DesktopDonate,
  parameters: {
    docs: {
      description: { component: '데스크탑전용 모달창' },
    },
  },
} as ComponentMeta<typeof DesktopDonate>;

const Template: ComponentStory<typeof DesktopDonate> = args => (
  <RecoilRoot>
    <DesktopDonate />
  </RecoilRoot>
);

export const View: ComponentStory<typeof DesktopDonate> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
