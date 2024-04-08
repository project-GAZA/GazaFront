import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menus from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Attom/Menus',
  component: Menus,
  parameters: {
    docs: {
      description: {
        component: '기본 버튼 - 히어로, 기부섹션에 사용되었습니다.',
      },
    },
  },
} as ComponentMeta<typeof Menus>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Menus> = args => <Menus />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof Menus> = Template.bind({});
Mobile.args = {
  fill: false,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
