import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Middle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_WhoAmI/Modules/Middle',
  component: Middle,
  parameters: {
    docs: {
      description: {
        component: '지구',
      },
    },
  },
} as ComponentMeta<typeof Middle>;
const Template: ComponentStory<typeof Middle> = () => <Middle />;

export const Mobile: ComponentStory<typeof Middle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
