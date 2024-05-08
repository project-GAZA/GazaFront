import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attom/ProjectTitle',
  component: ProjectTitle,
  parameters: {
    docs: {
      description: {
        component: '히어로섹션 타이틀 텍스트',
      },
    },
  },
  args: {
    blackBold: '가자지구 분쟁 ',
    regular1: '피해 어린이를 위한 ',
    yellowBold: '후원금 및 응원 메세지 ',
    regular2: '전달 프로젝트',
  },
} as ComponentMeta<typeof ProjectTitle>;

const Template: ComponentStory<typeof ProjectTitle> = args => (
  <ProjectTitle {...args} />
);

export const View: ComponentStory<typeof ProjectTitle> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
