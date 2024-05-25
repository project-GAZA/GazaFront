import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import CloseButton from './index';

export default {
  title: 'stories/Modals/Attom/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: { component: '모달창 닫기버튼' },
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

export const View: ComponentStory<typeof CloseButton> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
