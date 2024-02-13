import React from 'react';
import Title, { TitleType } from '@/component/Section_Hero/Attom/Title';
import ProjectTitle, {
  ProjectTitleType,
} from '@/component/Section_Hero/Attom/ProjectTitle';
import ProjectSubTitle, {
  ProjectSubTitleType,
} from '@/component/Section_Hero/Attom/ProjectSubTitle';

export interface HeroMainTitleType {
  /**
   * 제목 아톰 - Attom을 참고해주세요
   */
  title: TitleType;
  /**
   * 프로젝트 타이틀아톰 - Attom을 참고해주세요
   */
  projectTitle: ProjectTitleType;
  /**
   * 프로젝트 서브타이틀 아톰 - Attom을 참고해주세요
   */
  projectSubTitle: ProjectSubTitleType;
}

const HeroMainTitle = ({
  title,
  projectTitle,
  projectSubTitle,
}: HeroMainTitleType) => {
  return (
    <div>
      <Title
        marginBottom={title.marginBottom}
        marginTop={title.marginTop}
        marginRight={title.marginRight}
        marginLeft={title.marginLeft}
        black={title.black}
        yellow={title.yellow}
      />
      <ProjectTitle
        marginBottom={projectTitle.marginBottom}
        marginTop={projectTitle.marginTop}
        marginRight={projectTitle.marginRight}
        marginLeft={projectTitle.marginLeft}
        blackBold={projectTitle.blackBold}
        regular1={projectTitle.regular1}
        yellowBold={projectTitle.yellowBold}
        regular2={projectTitle.regular2}
      />
      <ProjectSubTitle
        marginBottom={projectSubTitle.marginBottom}
        marginTop={projectSubTitle.marginTop}
        marginRight={projectSubTitle.marginRight}
        marginLeft={projectSubTitle.marginLeft}
        color={projectSubTitle.color}
        content={projectSubTitle.content}
      />
    </div>
  );
};

export default HeroMainTitle;
