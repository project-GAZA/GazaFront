'use client';

import styled from '@emotion/styled';
import '@/app/style/header.css';

const HeaderWrapper = styled.header`
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  height: 58;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 12px 0px;
`;

const MenuInner = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  width: 100vw;
`;

const PCHeader = () => {
  const onClickHandle = e => {
    document.querySelectorAll('ul li').forEach(li => {
      li.classList.remove('on');
    });
    e.target.parentElement.classList.add('on');
  };

  return (
    <HeaderWrapper>
      <MenuInner className="gnb">
        <li data-menuanchor="section2">
          <a href="#section2" onClick={onClickHandle}>
            프로젝트 설명
          </a>
        </li>
        <li data-menuanchor="section3">
          <a href="#section3" onClick={onClickHandle}>
            응원 메세지 보기
          </a>
        </li>
        <li data-menuanchor="section4" style={{ marginRight: '50px' }}>
          <a href="#section4" onClick={onClickHandle}>
            응원 메세지 남기기
          </a>
        </li>

        <li>English/한국어</li>
      </MenuInner>
    </HeaderWrapper>
  );
};

export default PCHeader;
