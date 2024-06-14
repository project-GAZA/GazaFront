import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Earth from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_WhoAmI/Modules/Earth',
  component: Earth,
  parameters: {
    docs: {
      description: {
        component: '지구',
      },
    },
  },
} as ComponentMeta<typeof Earth>;
const Template: ComponentStory<typeof Earth> = () => <Earth />;

export const Mobile: ComponentStory<typeof Earth> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
