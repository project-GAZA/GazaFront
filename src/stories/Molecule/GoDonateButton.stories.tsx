import React from 'react';
import GoDonateButton from '../../component/HelloSection/molecule/GoDonateButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'stories/Molecule/GoDonateButton',
  component: GoDonateButton,
} as ComponentMeta<typeof GoDonateButton>;

const Template: ComponentStory<typeof GoDonateButton> = args => (
  <GoDonateButton {...args} />
);
export const Desktop: ComponentStory<typeof GoDonateButton> = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};

export const Mobile: ComponentStory<typeof GoDonateButton> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
};
