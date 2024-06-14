import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Top from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_WhoAmI/Modules/Top',
  component: Top,
  parameters: {
    docs: {
      description: {
        component: '상위 컨텐츠',
      },
    },
  },
} as ComponentMeta<typeof Top>;
const Template: ComponentStory<typeof Top> = () => <Top />;

export const view: ComponentStory<typeof Top> = Template.bind({});
