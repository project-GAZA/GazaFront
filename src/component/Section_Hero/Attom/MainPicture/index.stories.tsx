import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPicture from './index';

export default {
  title: 'stories/Section_Hero/Attoms/MainPicture',
  component: MainPicture,
  args: {
    borderRadius: 20,
    urls: [
      'https://www.unicef.org/sites/default/files/styles/press_release_feature/public/UNI448902.jpg.webp?itok=rJ0nJGrU',
      'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=2000&t=st=1707292771~exp=1707293371~hmac=dcdf183bd73ff247c217221f3d89c7d49ce04115ce9932faf6a860a6ae916420',
    ],
  },
} as ComponentMeta<typeof MainPicture>;

const Template: ComponentStory<typeof MainPicture> = args => (
  <MainPicture {...args} />
);
export const Desktop: ComponentStory<typeof MainPicture> = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
export const Tablet: ComponentStory<typeof MainPicture> = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};
export const Mobile: ComponentStory<typeof MainPicture> = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
