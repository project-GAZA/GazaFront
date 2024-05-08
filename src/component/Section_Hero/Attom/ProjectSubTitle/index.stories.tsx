import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectSubTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Hero/Attom/ProjectSubTitle',
  component: ProjectSubTitle,
  parameters: {
    docs: {
      description: {
        component: '히어로섹션 서브타이틀 텍스트',
      },
    },
  },
  args: {
    content: '가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요',
    color: 'black',
  },
} as ComponentMeta<typeof ProjectSubTitle>;
const Template: ComponentStory<typeof ProjectSubTitle> = args => (
  <ProjectSubTitle {...args} />
);

export const View: ComponentStory<typeof ProjectSubTitle> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
