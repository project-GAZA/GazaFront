import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pin from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_WhoAmI/Attoms/Pin',
  component: Pin,
  parameters: {
    docs: {
      description: {
        component: '지구모양 핀',
      },
    },
  },
  args: {
    color: 'white',
    posx: 0,
    posy: 0,
    text: '#Gaza',
    posz: 0,
  },
} as ComponentMeta<typeof Pin>;
const Template: ComponentStory<typeof Pin> = args => <Pin {...args} />;

export const Mobile: ComponentStory<typeof Pin> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
