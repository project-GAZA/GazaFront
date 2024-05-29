import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MessageTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attom/MessageTitle',
  component: MessageTitle,
  parameters: {
    docs: {
      description: {
        component: '메세지 섹션 메세지영역 제목 기본 배경은 검정입니다.',
      },
    },
  },
  args: {
    topText: '전세계 각지에서',
    bottomText: '많은 사람들이 응원글 작성에 참여하고 있어요',
  },
} as ComponentMeta<typeof MessageTitle>;
const Template: ComponentStory<typeof MessageTitle> = args => (
  <MessageTitle {...args} />
);

export const View: ComponentStory<typeof MessageTitle> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
