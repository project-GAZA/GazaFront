import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { Link as ScrollLink } from 'react-scroll';

import ShareIcon from '@/assets/svg/ShareIcon.svg';

import Common from './common.style';

const MobileNav = ({
  MenuText,
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
  activeSection,
  onClickLange,
}) => {
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
            {MenuText.menu1}
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
            {MenuText.menu2}
          </ScrollLink>
        </Common.MobilLi>
        <Common.MobilLi>
          <ScrollLink
            style={{
              ...Common.MenuLink,
              cursor: 'pointer',
              color: '#8f8f8f',
              fontSize: '13px',
              padding: '0px',
            }}
            to="section5"
            spy
            smooth
            duration={800}
          >
            {MenuText.descript}
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
            {MenuText.menu3}
          </ScrollLink>
        </Common.MobilLi>
        <Common.LangChanBox onClick={onClickLange}>
          <Common.LangChanText>한국어/English</Common.LangChanText>
        </Common.LangChanBox>
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
