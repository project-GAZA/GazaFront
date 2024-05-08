import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from './index';

export default {
  title: 'stories/Section_Additional/Attom/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: { component: '아코디언 한개' },
    },
  },
  args: {
    title: '프로젝트 소개',
    content:
      '이 프로젝트는 “가자지구 아이들이 겪고 있는 고통과 아픔에 작은 도움이 되고 싶다.” 하는 마음에서 시작했습니다.프로젝트를 기획하는 과정에서, 그 어떤 종교적 정치적 편향 없이 ‘가자지구 아이들’에 초점이 맞춰질 수 있도록 많이 고민하고 노력했습니다.우리의 선조들은 전쟁의 아픔 속에서도, 전 세계의 도움을 받아 오늘날의 대한민국을 일궈냈습니다. 그리고 이제는 우리가 그 도움의 주체가 되어, 가자지구의 어린이들에게 희망의 손길을 내밀고자 합니다.그 아이들이 테러의 그림자가 아닌, 더 나은 세계를 만들어가는 주역으로 성장할 수 있도록 돕고자 합니다. 이는 단순한 도움이 아니라, 평화와 번영의 미래를 향한 확고한 발걸음이 될 것입니다. 가자지구의 아이들이 밝은 미래를 그리며, 다음 세대의 훌륭한 구성원으로 성장할 수 있도록, 그 아이들에게 작지만 확실한 변화를 주기 위해 프로젝트를 시작합니다.',
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args} />
);

export const View: ComponentStory<typeof Accordion> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
