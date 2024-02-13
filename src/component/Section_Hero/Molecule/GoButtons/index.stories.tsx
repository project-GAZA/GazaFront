import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoButtons from './index';

export default {
  title: 'stories/Section_Hero/Molecule/GoButtons',
  component: GoButtons,
  args: {
    Buttons: [
      {
        children: '후원하기',
        fill: true,
        theme: 'primary',
      },
      {
        children: '희망 메세지 보러가기',
        fill: false,
      },
    ],
    gap: 12,
    deskwidth: 500,
  },
} as ComponentMeta<typeof GoButtons>;

const Template: ComponentStory<typeof GoButtons> = args => (
  <GoButtons {...args} />
);

export const Mobile: ComponentStory<typeof GoButtons> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
