import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';

import { propsTypes } from '@/types';
import Common from './common.style';

const MobileNav = ({
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
  activeSection,
}: propsTypes.MobileNavPropsType) => {
  return (
    <Common.MenuWrapper isOpen={isMobileNavShow}>
      <Common.HamIcon
        aria-label="Menu"
        size="md"
        icon={
          <CiMenuBurger color={isMobileNavShow ? 'black' : 'white'} size="md" />
        }
        onClick={setIsMobileNavShow}
      />
      <Common.EmptyBox />
      <Common.MobileUlWrapper className="gnb">
        <Common.MobileMenuTitle>Gaza’s Child Read HOPE</Common.MobileMenuTitle>
        <Common.MobilLi
          className={activeSection === 'section3' ? 'on' : ''}
          data-menuanchor="section3"
        >
          <ScrollLink
            style={Common.AWrapperMobile}
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
        </Common.MobilLi>
        <Common.MobilLi
          className={activeSection === 'section4' ? 'on' : ''}
          data-menuanchor="section4"
        >
          <ScrollLink
            style={Common.AWrapperMobile}
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
        </Common.MobilLi>
        <Common.MobilLi
          className={activeSection === 'section5' ? 'on' : ''}
          data-menuanchor="section5"
        >
          <ScrollLink
            style={{
              ...Common.MenuLink,
              cursor: 'pointer',
              color: '#8f8f8f',
              fontSize: '13px',
            }}
            to="section5"
            spy
            smooth
            duration={800}
          >
            메시지 하나로 가자지구의 평화 만드는 방법
          </ScrollLink>
        </Common.MobilLi>
        <Common.MobilLi
          className={activeSection === 'section5' ? 'on' : ''}
          data-menuanchor="section5"
        >
          <ScrollLink
            style={Common.AWrapperMobile}
            to="section5"
            spy
            smooth
            duration={800}
            onClick={() => {
              setIsMobileNavShow();
            }}
          >
            더 알아보기
          </ScrollLink>
        </Common.MobilLi>
        {/* 
        <LangChanBox>
          <LangChanText>한국어/영어</LangChanText>
        </LangChanBox>
        */}
        <Common.IconBoxMenu>
          <Common.IconInMenu onClick={onOpenShare}>
            <Image width={22} height={22} src={ShareIcon.src} alt="sharIcon" />
          </Common.IconInMenu>
        </Common.IconBoxMenu>
      </Common.MobileUlWrapper>
    </Common.MenuWrapper>
  );
};

export default MobileNav;
