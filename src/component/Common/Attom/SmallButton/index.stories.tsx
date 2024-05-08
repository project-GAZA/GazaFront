import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SmallButton from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Attom/SmallButton',
  component: SmallButton,
  parameters: {
    docs: {
      description: {
        component: '작은버튼',
      },
    },
  },
  args: {
    children: '후원하기',
    theme: 'black',
    background: 'red',
  },
} as ComponentMeta<typeof SmallButton>;

const Template: ComponentStory<typeof SmallButton> = args => (
  <SmallButton {...args} />
);
export const View: ComponentStory<typeof SmallButton> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
