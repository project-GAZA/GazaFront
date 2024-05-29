import React from 'react';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadMenu from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Modules/HeadMenu',
  component: HeadMenu,
  parameters: {
    docs: {
      description: {
        component: '헤더메뉴',
      },
    },
  },
  args: {
    msgRef: null,
    infoRef: null,
  },
} as ComponentMeta<typeof HeadMenu>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof HeadMenu> = args => (
  <RecoilRoot>
    <HeadMenu {...args} />
  </RecoilRoot>
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const View: ComponentStory<typeof HeadMenu> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
