import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Content from './index';

export default {
  title: 'stories/Modals/Attoms/Content',
  component: Content,
  parameters: {
    docs: {
      description: { component: '글의 제목이빈다.' },
    },
  },
  args: {
    content: '마지막으로 가자기구 아이들에게<br/> 따뜻함을 선물해 보시겠어요?',
    color: 'black',
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => <Content {...args} />;

export const Mobile: ComponentStory<typeof Content> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
