import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MessageTitle from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Message/Attoms/MessageTitle',
  component: MessageTitle,
  parameters: {
    docs: {
      description: { component: '메세지영역 제목' },
    },
  },
  args: {
    topText: '전세계 각지에서',
    bottomText: '많은 사람들이 응원글 작성에 참여하고 있어요',
  },
} as ComponentMeta<typeof MessageTitle>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof MessageTitle> = args => (
  <MessageTitle {...args} />
);

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const Mobile: ComponentStory<typeof MessageTitle> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
