import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectSubTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attoms/ProjectSubTitle',
  component: ProjectSubTitle,
  args: {
    content: '가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요',
    color: 'black',
  },
} as ComponentMeta<typeof ProjectSubTitle>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof ProjectSubTitle> = args => (
  <ProjectSubTitle {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음
export const Desktop: ComponentStory<typeof ProjectSubTitle> = Template.bind(
  {},
);
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
export const Mobile: ComponentStory<typeof ProjectSubTitle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
