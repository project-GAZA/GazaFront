import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/SectionAdditional/Modules/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: '아코디언메뉴들',
      },
    },
  },
} as ComponentMeta<typeof Footer>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Footer> = args => <Footer />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof Footer> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
