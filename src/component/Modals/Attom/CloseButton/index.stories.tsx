import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import CloseButton from './index';

export default {
  title: 'stories/Modals/Attoms/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
  args: {
    theme: 'light',
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => (
  <RecoilRoot>
    <CloseButton {...args} />
  </RecoilRoot>
);

export const Mobile: ComponentStory<typeof CloseButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
