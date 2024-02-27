import React from 'react';
import Title from '@/component/Section_Hero/Attom/Title';
import ProjectTitle from '@/component/Section_Hero/Attom/ProjectTitle';
import ProjectSubTitle from '@/component/Section_Hero/Attom/ProjectSubTitle';

const HeroMainTitle = () => {
  return (
    <div>
      <Title marginBottom={12} black="Gaza’s Child Read " yellow=" HOPE" />
      <ProjectTitle
        marginBottom={34}
        blackBold="가자지구 분쟁 "
        regular1="피해 어린이를 위한 "
        yellowBold="후원금 및 응원 메세지"
        regular2="전달 프로젝트 "
      />
      <ProjectSubTitle
        color="black"
        content="가자지구 분쟁에 휘말린 아이들의 꿈을 지켜주세요"
      />
    </div>
  );
};

export default HeroMainTitle;
