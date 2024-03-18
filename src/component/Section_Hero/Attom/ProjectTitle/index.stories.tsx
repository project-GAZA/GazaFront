import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attoms/ProjectTitle',
  component: ProjectTitle,
  args: {
    blackBold: '가자지구 분쟁 ',
    regular1: '피해 어린이를 위한 ',
    yellowBold: '후원금 및 응원 메세지 ',
    regular2: '전달 프로젝트',
  },
} as ComponentMeta<typeof ProjectTitle>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof ProjectTitle> = args => (
  <ProjectTitle {...args} />
);

export const Mobile: ComponentStory<typeof ProjectTitle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
