import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Insta from 'public/assets/svg/insta.svg';

import IconBox from './index';

export default {
  title: 'stories/Common/Attom/IconBox',
  component: IconBox,
  parameters: {
    docs: {
      description: { component: '아이콘 버튼' },
    },
  },
  args: {
    iconsrc: Insta.src,
    name: '페이스북',
  },
} as ComponentMeta<typeof IconBox>;

const Template: ComponentStory<typeof IconBox> = args => <IconBox {...args} />;

export const View: ComponentStory<typeof IconBox> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
