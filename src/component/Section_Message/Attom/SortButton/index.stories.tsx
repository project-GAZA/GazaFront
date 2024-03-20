import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortButton from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attoms/SortButton',
  component: SortButton,
  parameters: {
    docs: {
      description: { component: 'Sort클릭 버튼' },
    },
  },
  args: {
    text: 'New',
    active: true,
    theme: 'secondary',
  },
} as ComponentMeta<typeof SortButton>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof SortButton> = args => (
  <SortButton {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof SortButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
