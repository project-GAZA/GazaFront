import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DonateContent from './index';

export default {
  title: 'stories/Modals/Modules/DonateContent',
  component: DonateContent,
  parameters: {
    docs: {
      description: { component: '기부모달 콘텐츠들' },
    },
  },
  args: {
    title: "Gaza's Child Read Hope",
    content: ' 주변에 가자지구의 상황을 널리 알려주세요',
  },
} as ComponentMeta<typeof DonateContent>;

const Template: ComponentStory<typeof DonateContent> = args => (
  <DonateContent {...args} />
);

export const View: ComponentStory<typeof DonateContent> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
