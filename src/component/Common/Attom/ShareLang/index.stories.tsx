import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShareLang from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Attom/ShareLang',
  component: ShareLang,
  parameters: {
    docs: {
      description: {
        component: '공유하기버튼 - 히어로, 기부섹션에 사용되었습니다.',
      },
    },
  },
} as ComponentMeta<typeof ShareLang>;

const Template: ComponentStory<typeof ShareLang> = args => <ShareLang />;

export const View: ComponentStory<typeof ShareLang> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
