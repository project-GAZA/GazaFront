import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menus from './index';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'stories/Common/Attom/Menus',
  component: Menus,
  parameters: {
    docs: {
      description: {
        component: '메뉴들 => 기본배경은 검은색입니다.',
      },
    },
  },
  args: {
    menus: [
      {
        name: '응원 메세지 보기',
        click: () => {},
      },
      {
        name: '프로젝트 더 알아보기',
        click: () => {},
      },
    ],
  },
} as ComponentMeta<typeof Menus>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Menus> = args => <Menus {...args} />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음

export const View: ComponentStory<typeof Menus> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
