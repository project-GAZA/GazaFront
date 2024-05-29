import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Section_Additional/Modules/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: '푸터',
      },
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer />;

export const View: ComponentStory<typeof Footer> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
