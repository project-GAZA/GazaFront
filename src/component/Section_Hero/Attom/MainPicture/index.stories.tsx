import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPicture from './index';

export default {
  title: 'stories/Section_Hero/Attom/MainPicture',
  component: MainPicture,
  parameters: {
    docs: {
      description: {
        component: '히어로섹션 사진스크롤링은 메인페이지에서 동작확인가능',
      },
    },
  },
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
export const View: ComponentStory<typeof MainPicture> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
