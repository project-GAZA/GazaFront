import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Buttons from './index';

export default {
  title: 'stories/Modals/Modules/Buttons',
  component: Buttons,
  parameters: {
    docs: {
      description: { component: '모달 하위 버튼' },
    },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = args => <Buttons {...args} />;

export const View: ComponentStory<typeof Buttons> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
