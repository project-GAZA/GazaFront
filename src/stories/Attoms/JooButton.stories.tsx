import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../component/HelloSection/Button';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Attoms/JooButton',
  component: Button,
} as ComponentMeta<typeof Button>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음
export const Desktop: ComponentStory<typeof Button> = Template.bind({});
Desktop.args = {
  label: '후원하기',
};
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};

export const Tablet: ComponentStory<typeof Button> = Template.bind({});
Tablet.args = {
  label: '후원하기',
};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Mobile: ComponentStory<typeof Button> = Template.bind({});
Mobile.args = {
  label: '후원하기',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
