import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoDonateButton from './index';

export default {
  title: 'stories/Section_Hero/Molecule/GoDonateButton',
  component: GoDonateButton,
} as ComponentMeta<typeof GoDonateButton>;

const Template: ComponentStory<typeof GoDonateButton> = args => (
  <GoDonateButton {...args} />
);

export const Mobile: ComponentStory<typeof GoDonateButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
