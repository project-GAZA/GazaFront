'use client';

import '@/style/globals.scss';

import SectionHero from '@/component/Section_Hero/Template/SectionHero';
import SectionContainer from '@/app/_sections/SectionContainer';
import CommentSection from './_sections/CommentSection';
import DeadInfoSection from './_sections/DeadInfoSection';
import DonateSection from './_sections/DonateSection';
import WhoAmISection from './_sections/WhoAmISection';
import WhyDonateSection from './_sections/WhyDonateSection';

const HeroSectionMook = {
  goDonateButtonData: {
    onClick: () => {
      console.log('hihi');
    },
  },
  heroInfoData: {
    goButtonsData: {
      Buttons: [
        {
          children: '희망 메세지 보내기',
          fill: false,
          theme: 'primary' as 'primary' | 'secondary',
        },
        {
          children: '후원하기',
          fill: true,
          theme: 'primary' as 'primary' | 'secondary',
        },
      ],
      gap: 12,
    },
    heroMainTitleData: {
      title: {
        black: 'Gaza’s Child Read ',
        yellow: ' HOPE',
        marginBottom: 12,
        marginTop: 20,
      },
      projectTitle: {
        blackBold: '가자지구 분쟁 ',
        regular1: '피해 어린이를 위한 ',
        yellowBold: '후원금 및 응원메세지',
        regular2: '전달 프로젝트',
        marginBottom: 34,
      },
      projectSubTitle: {
        color: 'black' as const,
        content: '가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요',
      },
    },
    color: 'background_light' as const,
    borderRadius: 20,
  },
  mainPictureData: {
    borderRadius: 20,
    urls: [
      'https://s3-alpha-sig.figma.com/img/4314/bd9c/b29ee568b8a80a4a8a5ee5e36f0d86ed?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPfWF2gUIgsuOrTxs~0kJj0Pvf9I3eDb7IuIgMPe3pzQHy06oUN~VC31cF51b8fY~YvYZNqaNvEVLl-rv8Riw7KYYw90J7LXer8OZMUG8axisKvGJjdJFu3HIcbmh2zFvQkq4WxzD3O3QEwaRC9E7BifYaZRuAgmM7SbbffzaPc-m~RvAwKHVvl5My7Ttx7VWTRz0yoimh5gjAgeHW9uy8hMzCxMYwrIduuuEsF7wjcT8r-by~zCRHkPLRTbbElZld1uTLcVSZnQPPhXOt~jU-KYGmICX99h5rGssqPg~ITOS7QwJuk8naxku-ZF-PQtPxw11~6mMb8P8tIdBlOc-Q__',
      'https://s3-alpha-sig.figma.com/img/5544/c27a/5389ee72fd81f6eb04121d1e64393a3d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xrb-Xk-SsWIbh2VBuGjd1ZaEeaY~AmV44WX6EAOoT2O4XmIaPD~TgS-N1WvWvMZFT5G5jjz2cQBXtuRRS5irjqETIZRYDw8HuNwKRbRiyBrS2xSQpITaFAJsAmPNEb8WjJafyfhPUUXH-ndeZjdjP7XSQqZTXfj8OIj3QOmIbcnL15qvqop3va~m4U-f2G4lN3pqFynT8ybTGaAeg9l8l1O2Yl0ABkJSR3esPvFRRy5iWqHKAb4uxBprOQI9U6stiR~AwoeP6WZwkA4bKxpAe3aMO2uICr0ih7NcBsW5pXJsf8P2sVLDY9tMTYAZBwESHlhnq~Ip7YVnENyxzeVQxQ__',
    ],
  },
};

const Home = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHero
          heroInfoData={HeroSectionMook.heroInfoData}
          goDonateButtonData={HeroSectionMook.goDonateButtonData}
          mainPictureData={HeroSectionMook.mainPictureData}
        />
      </SectionContainer>
      <DeadInfoSection />
      <CommentSection />
      <DonateSection />
      <WhyDonateSection />
      <WhoAmISection />
    </div>
  );
};

export default Home;
