import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import {
  MenuWrapper,
  EmptyBox,
  MobileUlWrapper,
  MobileMenuTitle,
  MobilLi,
  AWrapperMobile,
  IconBoxMenu,
  IconInMenu,
  HamIcon,
} from './common.style';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

import { propsTypes } from '@/types';

const MobileNav = ({
  onOpenMail,
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
          <AWrapperMobile
            to="section3"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            응원메세지 보기
          </AWrapperMobile>
        </MobilLi>
        <MobilLi
          className={activeSection === 'section4' ? 'on' : ''}
          data-menuanchor="section4"
        >
          <AWrapperMobile
            to="section4"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            응원메세지 남기기
          </AWrapperMobile>
        </MobilLi>
        <MobilLi
          className={activeSection === 'section5' ? 'on' : ''}
          data-menuanchor="section5"
        >
          <AWrapperMobile
            to="section5"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            프로젝트 소개
          </AWrapperMobile>
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
          <IconInMenu onClick={onOpenMail}>
            <Image width={22} height={22} src={CallIcon.src} alt="CallIcon" />
          </IconInMenu>
        </IconBoxMenu>
      </MobileUlWrapper>
    </MenuWrapper>
  );
};

export default MobileNav;
