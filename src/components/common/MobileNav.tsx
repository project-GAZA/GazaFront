import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import {
  MenuWrapper,
  EmptyBox,
  MobileUlWrapper,
  MobileMenuTitle,
  MobilLi,
  AWrapperMobile,
  LangChanBox,
  LangChanText,
  IconBoxMenu,
  IconInMenu,
  HamIcon,
} from './common.style';

import ShareIcon from '@/assets/svg/ShareIcon.svg';
import CallIcon from '@/assets/svg/CallIcon.svg';

const MobileNav = ({
  onOpenMail,
  onOpenShare,
  isMobileNavShow,
  setIsMobileNavShow,
}) => {
  return (
    <MenuWrapper>
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
        <MobilLi data-menuanchor="section3">
          <AWrapperMobile
            href="#section3"
            onClick={() => {
              // toggleDisplay();
            }}
          >
            응원메세지 보기
          </AWrapperMobile>
        </MobilLi>
        <MobilLi data-menuanchor="section4">
          <AWrapperMobile href="#section4">응원메세지 남기기</AWrapperMobile>
        </MobilLi>
        <MobilLi data-menuanchor="section5">
          <AWrapperMobile href="#section5">프로젝트 소개</AWrapperMobile>
        </MobilLi>
        <LangChanBox>
          <LangChanText>한국어/영어</LangChanText>
        </LangChanBox>
        <IconBoxMenu>
          <IconInMenu>
            <Image
              width={22}
              height={22}
              src={ShareIcon.src}
              alt="sharIcon"
              onClick={onOpenShare}
            />
          </IconInMenu>
          <IconInMenu>
            <Image
              width={22}
              height={22}
              src={CallIcon.src}
              alt="CallIcon"
              onClick={onOpenMail}
            />
          </IconInMenu>
        </IconBoxMenu>
      </MobileUlWrapper>
    </MenuWrapper>
  );
};

export default MobileNav;
