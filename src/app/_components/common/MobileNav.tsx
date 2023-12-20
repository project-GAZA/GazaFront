import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';

import { propsTypes } from '@/types';
import {
  MenuWrapper,
  EmptyBox,
  MobileUlWrapper,
  MobileMenuTitle,
  MobilLi,
  IconBoxMenu,
  IconInMenu,
  HamIcon,
  AWrapperMobile,
} from './common.style';

const MobileNav = ({
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
  activeSection,
}: propsTypes.MobileNavPropsType) => {
  return (
    <MenuWrapper isOpen={isMobileNavShow}>
      <HamIcon
        aria-label="Menu"
        size="md"
        icon={
          <CiMenuBurger color={isMobileNavShow ? 'black' : 'white'} size="md" />
        }
        onClick={setIsMobileNavShow}
      />
      <EmptyBox />
      <MobileUlWrapper className="gnb">
        <MobileMenuTitle>Gaza’s Child Read HOPE</MobileMenuTitle>
        <MobilLi
          className={activeSection === 'section3' ? 'on' : ''}
          data-menuanchor="section3"
        >
          <ScrollLink
            style={AWrapperMobile}
            to="section3"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            응원메세지 보기
          </ScrollLink>
        </MobilLi>
        <MobilLi
          className={activeSection === 'section4' ? 'on' : ''}
          data-menuanchor="section4"
        >
          <ScrollLink
            style={AWrapperMobile}
            to="section4"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            응원메세지 남기기
          </ScrollLink>
        </MobilLi>
        <MobilLi
          className={activeSection === 'section5' ? 'on' : ''}
          data-menuanchor="section5"
        >
          <ScrollLink
            style={AWrapperMobile}
            to="section5"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            프로젝트 소개
          </ScrollLink>
        </MobilLi>
        {/* 
        <LangChanBox>
          <LangChanText>한국어/영어</LangChanText>
        </LangChanBox>
        */}
        <IconBoxMenu>
          <IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </IconInMenu>
        </IconBoxMenu>
      </MobileUlWrapper>
    </MenuWrapper>
  );
};

export default MobileNav;
