import React from 'react';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionHero from './index';

export default {
  title: 'stories/Section_Hero/Section',
  component: SectionHero,
  parameters: {
    docs: {
      description: {
        component: '히어로섹션',
      },
    },
  },
  args: {
    mainPictureData: {
      borderRadius: 20,
      urls: [
        'https://s3-alpha-sig.figma.com/img/4314/bd9c/b29ee568b8a80a4a8a5ee5e36f0d86ed?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPfWF2gUIgsuOrTxs~0kJj0Pvf9I3eDb7IuIgMPe3pzQHy06oUN~VC31cF51b8fY~YvYZNqaNvEVLl-rv8Riw7KYYw90J7LXer8OZMUG8axisKvGJjdJFu3HIcbmh2zFvQkq4WxzD3O3QEwaRC9E7BifYaZRuAgmM7SbbffzaPc-m~RvAwKHVvl5My7Ttx7VWTRz0yoimh5gjAgeHW9uy8hMzCxMYwrIduuuEsF7wjcT8r-by~zCRHkPLRTbbElZld1uTLcVSZnQPPhXOt~jU-KYGmICX99h5rGssqPg~ITOS7QwJuk8naxku-ZF-PQtPxw11~6mMb8P8tIdBlOc-Q__',
        'https://s3-alpha-sig.figma.com/img/5544/c27a/5389ee72fd81f6eb04121d1e64393a3d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xrb-Xk-SsWIbh2VBuGjd1ZaEeaY~AmV44WX6EAOoT2O4XmIaPD~TgS-N1WvWvMZFT5G5jjz2cQBXtuRRS5irjqETIZRYDw8HuNwKRbRiyBrS2xSQpITaFAJsAmPNEb8WjJafyfhPUUXH-ndeZjdjP7XSQqZTXfj8OIj3QOmIbcnL15qvqop3va~m4U-f2G4lN3pqFynT8ybTGaAeg9l8l1O2Yl0ABkJSR3esPvFRRy5iWqHKAb4uxBprOQI9U6stiR~AwoeP6WZwkA4bKxpAe3aMO2uICr0ih7NcBsW5pXJsf8P2sVLDY9tMTYAZBwESHlhnq~Ip7YVnENyxzeVQxQ__',
      ],
    },
  },
} as ComponentMeta<typeof SectionHero>;

const Template: ComponentStory<typeof SectionHero> = args => (
  <RecoilRoot>
    <SectionHero />
  </RecoilRoot>
);
export const View: ComponentStory<typeof SectionHero> = Template.bind({});
View.parameters = {
  viewport: {
    defaultViewport: 'iphone14promax',
  },
};
