import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SmallButton from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Attoms/SmallButton',
  component: SmallButton,
  parameters: {
    docs: {
      description: {
        component: '기본 버튼 - 히어로, 기부섹션에 사용되었습니다.',
      },
    },
  },
  args: {
    children: '후원하기',
    theme: 'black',
    background: 'red',
  },
} as ComponentMeta<typeof SmallButton>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof SmallButton> = args => (
  <SmallButton {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof SmallButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
