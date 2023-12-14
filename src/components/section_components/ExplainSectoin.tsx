'use clients';

import Image from 'next/image';

import ExplainComponent from '@/components/ExplainComponent';
import Icon_Facebook from '@/assets/svg/Icon_Facebook.png';
import Icon_insta from '@/assets/svg/Icon_insta.png';

import {
  ExplainFooterText,
  ExplainSectionWrapper,
  ExplainTitleText,
  ExplainWrapper,
  SNSIconBox,
} from './section.style';

const onClickInsta = (): void => {
  window.open('https://www.instagram.com/gazaschildreadhope/');
};

const ExplainSection = ({ explain }) => {
  return (
    <ExplainSectionWrapper>
      <ExplainTitleText>{explain.ExplainSection.title}</ExplainTitleText>
      <ExplainWrapper>
        <ExplainComponent explain={explain.Explain} />
      </ExplainWrapper>
      <SNSIconBox>
        <Image
          width={31}
          height={31}
          src={Icon_Facebook.src}
          alt="FaceBookIcon"
        />
        <Image
          onClick={onClickInsta}
          width={31}
          height={31}
          src={Icon_insta.src}
          alt="Icon_insta"
        />
      </SNSIconBox>
      <ExplainFooterText
        dangerouslySetInnerHTML={{ __html: explain.ExplainSection.footerText }}
      />
    </ExplainSectionWrapper>
  );
};

export default ExplainSection;
