import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Insta from 'public/assets/svg/insta.svg';

import IconBox from './index';

export default {
  title: 'stories/Modals/Attoms/IconBox',
  component: IconBox,
  parameters: {
    docs: {
      description: { component: '모달창에 쓸 제목' },
    },
  },
  args: {
    iconsrc: Insta.src,
    name: '페이스북',
  },
} as ComponentMeta<typeof IconBox>;

const Template: ComponentStory<typeof IconBox> = args => <IconBox {...args} />;

export const Mobile: ComponentStory<typeof IconBox> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
