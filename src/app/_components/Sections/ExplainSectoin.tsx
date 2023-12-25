'use clients';

import Image from 'next/image';

import ExplainComponent from '@/app/_components/ExplainComponent';
import Icon_Facebook from '@/assets/svg/Icon_Facebook.png';
import Icon_insta from '@/assets/svg/Icon_insta.png';

import { dataTypes } from '@/types';
import Section from './section.style';

const onClickInsta = (): void => {
  window.open('https://www.instagram.com/gazaschildreadhope/');
};

const ExplainSection = ({
  explain,
}: {
  explain: dataTypes.ServiceLanguage;
}) => {
  return (
    <Section.ExplainSectionWrapper>
      <Section.ExplainTitleText>
        {explain.ExplainSection.title}
      </Section.ExplainTitleText>
      <Section.ExplainWrapper>
        <ExplainComponent explain={explain.Explain} />
      </Section.ExplainWrapper>
      <Section.SNSIconBox>
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
      </Section.SNSIconBox>
      <Section.ExplainFooterText
        dangerouslySetInnerHTML={{ __html: explain.ExplainSection.footerText }}
      />
    </Section.ExplainSectionWrapper>
  );
};

export default ExplainSection;
