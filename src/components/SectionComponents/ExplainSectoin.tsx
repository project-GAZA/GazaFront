'use clients';

import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import ExplainComponent from '@/components/ExplainComponent';
import Icon_Facebook from '@/assets/svg/Icon_Facebook.png';
import Icon_insta from '@/assets/svg/Icon_insta.png';

const ExplainSection = () => {
  const onClickInsta = () => {
    window.open('https://www.instagram.com/gazaschildreadhope/');
  };
  return (
    <Box className="ExplainSection">
      <Text className="ExplainTitleText">Gaza's Child Read HOPE 프로젝트</Text>
      <Box className="ExplainWrapper">
        <ExplainComponent />
      </Box>
      <Box className="SNSIconBox">
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
      </Box>
      <Text className="ExplainFooterText">
        “프로젝트의 진행 과정을 SNS에서 함께 지켜봐 주세요!
        <br />
        페이스북과 인스타그램 팔로우로 이 여정에 동참해 주세요:)”
      </Text>
    </Box>
  );
};

export default ExplainSection;
